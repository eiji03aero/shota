import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateThreadPosts1694183784642 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE thread_posts (
          id SERIAL NOT NULL, 
          thread_id INT NOT NULL, 
          post_id INT NOT NULL,
          user_id TEXT NOT NULL,
          user_name TEXT NOT NULL,
          content TEXT NOT NULL,
          posted_at VARCHAR(255) NOT NULL,

          PRIMARY KEY (id),

          CONSTRAINT fk_thread_posts_to_thread_summaries
            FOREIGN KEY(thread_id) 
            REFERENCES thread_summaries(id)
        );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS thread_posts;
      `,
    );
  }
}
