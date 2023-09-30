import * as threadApis from '@/domain/thread/api';

import { FullScreenBox } from '@/app/admin/_components/FullScreenBox';
import { ThreadSummaryCreate } from '@/app/admin/thread-summaries/[id]/_standalone/ThreadSummaryCreate';
import { ThreadSummaryEdit } from '@/app/admin/thread-summaries/[id]/_standalone/ThreadSummaryEdit';

type Props = {
  params: {
    id: string;
  };
};

export default async function ThreadSummaryDetail({ params }: Props) {
  const renderCreate = async () => {
    return <ThreadSummaryCreate />;
  };

  const renderEdit = async () => {
    const { responseData } = await threadApis.showThreadSummary({
      id: parseInt(params.id),
    });
    return <ThreadSummaryEdit threadSummary={responseData} />;
  };

  return (
    <FullScreenBox>
      {params.id === 'new' && (await renderCreate())}
      {params.id !== 'new' && (await renderEdit())}
    </FullScreenBox>
  );
}
