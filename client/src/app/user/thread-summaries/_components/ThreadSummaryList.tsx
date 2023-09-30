'use client';

import * as threadApis from '@/domain/thread/api';

import { ThreadSummaryCard } from '@/app/user/thread-summaries/_components/ThreadSummaryCard';

type Props = {
  threadSummaries: threadApis.ThreadSummary[];
};

export function ThreadSummaryList({ threadSummaries }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {threadSummaries.map((threadSummary) => (
        <ThreadSummaryCard
          key={threadSummary.id}
          threadSummary={threadSummary}
        />
      ))}
    </div>
  );
}
