import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { ThreadSummary } from './ThreadSummary';

@Entity({ name: 'thread_posts' })
export class ThreadPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'thread_id' })
  threadId: number;

  @Column({ name: 'post_id' })
  postId: number;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'user_name' })
  userName: string;

  @Column()
  content: string;

  @Column({ name: 'posted_at' })
  postedAt: string;

  @ManyToOne(() => ThreadSummary, (threadSummary) => threadSummary.posts)
  @JoinColumn({ name: 'thread_id', referencedColumnName: 'id' })
  thread: ThreadSummary;
}
