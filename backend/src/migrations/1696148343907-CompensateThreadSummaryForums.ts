import { MigrationInterface, QueryRunner } from 'typeorm';

export class CompensateThreadSummaryForums1696148343907
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        INSERT INTO thread_summary_forums (thread_id)
        SELECT id
        FROM thread_summaries AS ts
        WHERE NOT EXISTS (
          SELECT 1
          FROM thread_summary_forums
          WHERE thread_id = ts.id
        );
      `,
    );
  }

  public async down(): Promise<void> {}
}
