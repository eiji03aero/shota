import * as sharedStyles from '@/modules/styles/shared';
import * as threadApis from '@/domain/thread/api';

import { ThreadSummary } from '@/app/user/thread-summaries/[id]/_components/ThreadSummary';

type Props = {
  params: {
    id: string;
  };
};

export default async function ThreadSummaryDetail({ params }: Props) {
  const { responseData: threadSummary } = await threadApis.showThreadSummary({
    id: parseInt(params.id),
  });

  return (
    <div className={sharedStyles.container}>
      <ThreadSummary threadSummary={threadSummary} />
    </div>
  );
}
