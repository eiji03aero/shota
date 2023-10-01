import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateThreadSummaryViews1696163044050
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE thread_summary_views (
          id SERIAL NOT NULL, 
          user_id TEXT NOT NULL,
          thread_id INT NOT NULL,
          created_at TIMESTAMP NOT NULL,

          PRIMARY KEY (id),

          CONSTRAINT fk_thread_summary_views_to_thread_summaries
            FOREIGN KEY(thread_id) 
            REFERENCES thread_summaries(id)
        );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS thread_summary_views;
      `,
    );
  }
}
