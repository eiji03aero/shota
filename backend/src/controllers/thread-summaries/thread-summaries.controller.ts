import { Controller, Get, Post, Put, Body, Param, Query } from '@nestjs/common';
import { DataSource, Like } from 'typeorm';

import { ThreadSummary } from '../../entities/ThreadSummary';
import { ThreadPost } from '../../entities/ThreadPost';
import { ThreadSummaryForum } from '../../entities/ThreadSummaryForum';

import * as dto from './dto';

const sleep = (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
};

@Controller('thread-summaries')
export class ThreadSummariesController {
  constructor(private readonly dataSource: DataSource) {}

  @Get()
  async index(
    @Query()
    query: {
      keyword?: string;
    },
  ) {
    const threadSummaryRepo = this.dataSource.getRepository(ThreadSummary);

    await sleep(3000);

    return threadSummaryRepo.find({
      where: {
        title: query.keyword ? Like(`%${query.keyword}%`) : undefined,
      },
      relations: { posts: true },
    });
  }

  @Get(':id')
  async show(
    @Param('id')
    id: string,
  ) {
    const threadSummaryRepo = this.dataSource.getRepository(ThreadSummary);
    return threadSummaryRepo.findOne({
      where: { id: parseInt(id) },
      relations: { posts: true },
    });
  }

  @Post()
  async create(
    @Body()
    body: dto.CreateDto,
  ) {
    const threadSummary = new ThreadSummary();
    threadSummary.title = body.title;
    threadSummary.url = body.url;
    await this.dataSource.manager.save(threadSummary);

    const posts = body.posts.map((p) => {
      const threadPost = new ThreadPost();
      threadPost.postId = p.postId;
      threadPost.userId = p.userId;
      threadPost.userName = p.userName;
      threadPost.content = p.content;
      threadPost.postedAt = p.postedAt;
      threadPost.thread = threadSummary;
      return threadPost;
    });
    await this.dataSource.manager.save(posts);

    const threadSummaryForum = new ThreadSummaryForum();
    threadSummaryForum.thread = threadSummary;
    await this.dataSource.manager.save(threadSummaryForum);

    return {};
  }

  @Put(':id')
  async update(
    @Body()
    body: dto.UpdateDto,
    @Param('id')
    id: string,
  ) {
    const threadSummaryRepo = this.dataSource.getRepository(ThreadSummary);
    const threadPostsRepo = this.dataSource.getRepository(ThreadPost);

    const threadSummary = await threadSummaryRepo.findOne({
      where: { id: parseInt(id) },
      relations: { posts: true },
    });

    const newPostIds = body.posts.map((p) => p.postId);
    const currentPostIds = threadSummary.posts.map((p) => p.postId);

    // in current but not in new
    const deletedIds = threadSummary.posts
      .filter((p) => !newPostIds.includes(p.postId))
      .map((p) => p.id);

    // not in current but in new
    const added = body.posts.filter((p) => !currentPostIds.includes(p.postId));
    const addedPosts = added.map((p) => {
      const threadPost = new ThreadPost();
      threadPost.postId = p.postId;
      threadPost.userId = p.userId;
      threadPost.userName = p.userName;
      threadPost.content = p.content;
      threadPost.postedAt = p.postedAt;
      threadPost.thread = threadSummary;
      return threadPost;
    });

    threadSummary.title = body.title;
    threadSummary.url = body.url;
    await threadSummaryRepo.save(threadSummary);
    if (addedPosts.length > 0) {
      await threadPostsRepo.save(addedPosts);
    }
    if (deletedIds.length > 0) {
      await threadPostsRepo.delete(deletedIds);
    }

    return {};
  }
}
