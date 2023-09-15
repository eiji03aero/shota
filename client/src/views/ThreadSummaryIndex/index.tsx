import { Box } from '@/modules/components/mui';
import { ThreadSummary } from '@/domain/thread/api';
import { Card } from '@/views/ThreadSummaryIndex/components/Card';

type Props = {
  threadSummaries: ThreadSummary[];
};

export function ThreadSummaryIndex({ threadSummaries }: Props) {
  return (
    <Box sx={{ p: 3 }}>
      {threadSummaries.map((ts) => (
        <Card key={ts.id} threadSummary={ts} />
      ))}
    </Box>
  );
}
