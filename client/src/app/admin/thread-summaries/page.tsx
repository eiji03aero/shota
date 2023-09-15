import * as threadApis from '@/domain/thread/api';
import { ThreadSummaryIndex } from '@/views/ThreadSummaryIndex';

export default async function ThreadSummariesList() {
  const { responseData } = await threadApis.indexThreadSummaries();

  return <ThreadSummaryIndex threadSummaries={responseData} />;
}
