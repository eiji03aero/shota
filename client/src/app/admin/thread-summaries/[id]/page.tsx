import * as threadApis from '@/domain/thread/api';
import { ThreadSummaryCreate } from '@/views/ThreadSummaryCreate';
import { ThreadSummaryEdit } from '@/views/ThreadSummaryEdit';

import { FullScreenBox } from '@/app/admin/_components/FullScreenBox';

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
