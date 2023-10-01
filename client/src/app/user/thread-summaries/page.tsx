import * as React from 'react';

import { ContentLoader } from '@/modules/components/shared';

import { ThreadSummaryList } from '@/app/user/thread-summaries/_components/ThreadSummaryList';

export default async function ThreadSummaryListPage() {
  return (
    <React.Suspense fallback={<ContentLoader />}>
      <ThreadSummaryList />
    </React.Suspense>
  );
}
