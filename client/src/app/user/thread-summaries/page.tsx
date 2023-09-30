import * as threadApis from '@/domain/thread/api';

import { ThreadSummaryList } from '@/app/user/thread-summaries/_components/ThreadSummaryList';

export default async function ThreadSummaryListPage() {
  const { responseData: threadSummaries } =
    await threadApis.indexThreadSummaries();

  return <ThreadSummaryList threadSummaries={threadSummaries} />;
}
