import Link from 'next/link';

import { Box, Typography } from '@/modules/components/mui';
import { ThreadSummary } from '@/domain/thread/api';

type Props = {
  threadSummary: ThreadSummary;
};

export function Card({ threadSummary }: Props) {
  const samplePosts = threadSummary.posts
    .slice(0, 3)
    .map((post) => `${post.postId}: ${post.content.slice(0, 20)}`)
    .join(' ');
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mb: 1 }}>
        <Link href={`/admin/thread-summaries/${threadSummary.id}`}>
          {threadSummary.title}
        </Link>
      </Box>
      <Box>
        <Typography variant="body2">{samplePosts}</Typography>
      </Box>
    </Box>
  );
}
