import * as React from 'react';

import { ContentLoader } from '@/modules/components/shared';
import * as sharedStyles from '@/modules/styles/shared';

import { ThreadSummaryList } from '@/app/user/thread-summaries/_components/ThreadSummaryList';

export default async function ThreadSummaryListPage() {
  return (
    <div className={sharedStyles.container}>
      <React.Suspense fallback={<ContentLoader />}>
        <ThreadSummaryList />
      </React.Suspense>
    </div>
  );
}
