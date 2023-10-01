import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateThreadSummaryForums1696126603840
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE thread_summary_forums (
          id SERIAL NOT NULL, 
          thread_id INT NOT NULL, 

          PRIMARY KEY (id),

          CONSTRAINT fk_thread_summary_forums_to_thread_summaries
            FOREIGN KEY(thread_id) 
            REFERENCES thread_summaries(id)
        );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS thread_summary_forums;
      `,
    );
  }
}
