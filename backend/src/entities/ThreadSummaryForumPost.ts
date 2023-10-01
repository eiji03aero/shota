import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { ThreadSummaryForum } from './ThreadSummaryForum';

@Entity({ name: 'thread_summary_forum_posts' })
export class ThreadSummaryForumPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'thread_summary_forum_id' })
  threadSummaryForumId: number;

  @Column({ name: 'post_id' })
  postId: number;

  @Column({ name: 'content' })
  content: string;

  @Column({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @ManyToOne(() => ThreadSummaryForum, (forum) => forum.posts)
  @JoinColumn({ name: 'thread_summary_forum_id', referencedColumnName: 'id' })
  forum: ThreadSummaryForum;
}
