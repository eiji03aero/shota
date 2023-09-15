import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateThreadSummaries1694179288250 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE thread_summaries (
          id SERIAL NOT NULL, 
          title TEXT NOT NULL,
          url TEXT NOT NULL,

          PRIMARY KEY (id)
        );
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS thread_summaries;
      `,
    );
  }
}
