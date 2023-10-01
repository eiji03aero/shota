import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { ThreadSummaryForum } from '../../entities/ThreadSummaryForum';
import { ThreadSummaryForumPost } from '../../entities/ThreadSummaryForumPost';

import * as dto from './dto';

@Controller('')
export class ThreadSummaryForumsController {
  constructor(private readonly dataSource: DataSource) {}

  @Get('thread-summaries/:threadId/forum')
  async show(
    @Param('threadId')
    threadId: string,
  ) {
    const threadSummaryForumRepo =
      this.dataSource.getRepository(ThreadSummaryForum);

    return threadSummaryForumRepo.findOne({
      where: { threadId: parseInt(threadId) },
      relations: { posts: true },
    });
  }

  @Post('thread-summaries/:threadId/forum/post')
  async createPost(
    @Param('threadId')
    threadId: string,
    @Body()
    body: dto.CreatePostDto,
  ) {
    const threadSummaryForumRepo =
      this.dataSource.getRepository(ThreadSummaryForum);
    const threadSummaryForumPostRepo = this.dataSource.getRepository(
      ThreadSummaryForumPost,
    );

    const forum = await threadSummaryForumRepo.findOne({
      where: { threadId: parseInt(threadId) },
    });

    const lastPost = await threadSummaryForumPostRepo.findOne({
      where: { threadSummaryForumId: forum.id },
      order: { createdAt: 'DESC' },
    });
    const postId = lastPost?.postId ? lastPost.postId + 1 : 1;

    const post = new ThreadSummaryForumPost();
    post.userId = body.userId;
    post.postId = postId;
    post.forum = forum;
    post.content = body.content;
    post.createdAt = new Date();
    await threadSummaryForumPostRepo.save(post);

    return {};
  }
}
