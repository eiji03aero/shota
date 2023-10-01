import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { ThreadSummary } from './ThreadSummary';

@Entity({ name: 'thread_summary_views' })
export class ThreadSummaryView {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'thread_id' })
  threadId: number;

  @Column({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @ManyToOne(() => ThreadSummary, (thread) => thread.views)
  @JoinColumn({ name: 'thread_id', referencedColumnName: 'id' })
  thread: ThreadSummary;
}
