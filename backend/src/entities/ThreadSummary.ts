import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

import { ThreadPost } from './ThreadPost';

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
}
