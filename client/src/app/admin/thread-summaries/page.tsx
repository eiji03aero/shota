import * as threadApis from '@/domain/thread/api';
import { ThreadSummaryList } from '@/app/admin/thread-summaries/_components/ThreadSummaryList';

export default async function ThreadSummariesList() {
  const { responseData } = await threadApis.indexThreadSummaries();

  return <ThreadSummaryList threadSummaries={responseData} />;
}
