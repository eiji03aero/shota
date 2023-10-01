import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';

import { ThreadPost } from './ThreadPost';
import { ThreadSummaryForum } from './ThreadSummaryForum';
import { ThreadSummaryView } from './ThreadSummaryView';

@Entity({ name: 'thread_summaries' })
export class ThreadSummary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  url: string;

  @OneToMany(() => ThreadPost, (threadPost) => threadPost.thread)
  posts: ThreadPost[];

  @OneToOne(
    () => ThreadSummaryForum,
    (threadSummaryForum) => threadSummaryForum.thread,
  )
  forum: ThreadPost[];

  @OneToMany(() => ThreadSummaryView, (view) => view.thread)
  views: ThreadSummaryView[];
}
