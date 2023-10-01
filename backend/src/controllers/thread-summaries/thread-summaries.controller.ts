import { Controller, Get, Post, Put, Body, Param, Query } from '@nestjs/common';
import { DataSource, Like, In } from 'typeorm';

import { ThreadSummary } from '../../entities/ThreadSummary';
import { ThreadPost } from '../../entities/ThreadPost';
import { ThreadSummaryForum } from '../../entities/ThreadSummaryForum';
import { ThreadSummaryView } from '../../entities/ThreadSummaryView';

import * as dto from './dto';

const sleep = (ms: number) => {
  return new Promise((res) => setTimeout(res, ms));
};

@Controller('thread-summaries')
export class ThreadSummariesController {
  constructor(private readonly dataSource: DataSource) {}

  @Get('views')
  async indexViews(
    @Query()
    query: {
      userId: string;
    },
  ) {
    const threadSummaryViewRepo =
      this.dataSource.getRepository(ThreadSummaryView);

    const viewHistories = await threadSummaryViewRepo
      .createQueryBuilder('v')
      .select('v.thread_id', 'thread_id')
      .addSelect('MAX(v.id)', 'id')
      .where({ userId: query.userId })
      .groupBy('v.thread_id')
      .orderBy('MIN(v.created_at)', 'DESC')
      .getRawMany<{
        thread_id: number;
        id: number;
      }>();

    const viewIds = viewHistories.map((v) => v.id);
    const views = await threadSummaryViewRepo.find({
      where: { id: In(viewIds) },
      order: { createdAt: 'DESC' },
      relations: { thread: true },
    });

    return views;
  }

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

  @Post(':id/views')
  async createView(
    @Param('id')
    id: string,
    @Body()
    body: dto.CreateViewDao,
  ) {
    const threadSummaryViewRepo =
      this.dataSource.getRepository(ThreadSummaryView);

    const view = new ThreadSummaryView();
    view.userId = body.userId;
    view.threadId = parseInt(id);
    view.createdAt = new Date();
    await threadSummaryViewRepo.save(view);

    return {};
  }
}
