import { cookies } from 'next/headers';

import * as sharedStyles from '@/modules/styles/shared';
import * as threadApis from '@/domain/thread/api';
import { ViewHistory } from '@/app/user/my/_components/ViewHistory';

export const revalidate = 0;

export default async function MyPage() {
  const { value: userId } = cookies().get('userId')!;
  const { responseData: threadSummaryViews } =
    await threadApis.indexThreadSummaryViews({ userId });

  return (
    <div className={sharedStyles.container}>
      <h1 className="text-2xl mb-6">My page</h1>

      <ViewHistory views={threadSummaryViews} />
    </div>
  );
}
