import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

import { ThreadSummary } from './ThreadSummary';
import { ThreadSummaryForumPost } from './ThreadSummaryForumPost';

@Entity({ name: 'thread_summary_forums' })
export class ThreadSummaryForum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'thread_id' })
  threadId: number;

  @OneToOne(() => ThreadSummary, (threadSummary) => threadSummary.forum)
  @JoinColumn({ name: 'thread_id', referencedColumnName: 'id' })
  thread: ThreadSummary;

  @OneToMany(() => ThreadSummaryForumPost, (post) => post.forum)
  posts: ThreadSummaryForumPost[];
}
