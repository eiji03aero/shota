import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateThreadSummaryForumPosts1696127475952
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE thread_summary_forum_posts (
          id SERIAL NOT NULL, 
          uid TEXT NOT NULL,
          thread_summary_forum_id INT NOT NULL, 
          post_id INT NOT NULL,
          content TEXT,
          created_at TIMESTAMP NOT NULL,

          PRIMARY KEY (id),

          CONSTRAINT fk_thread_summary_forum_posts_to_thread_summary_forums
            FOREIGN KEY(thread_summary_forum_id) 
            REFERENCES thread_summary_forums(id)
        );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS thread_summary_forum_posts;
      `,
    );
  }
}
