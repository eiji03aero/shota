import { useQuery } from '@tanstack/react-query';

import * as threadApis from '@/domain/thread/api';

type Params = {
  params: threadApis.ShowThreadSummaryForumParams;
};

export function useThreadSummaryForum({ params }: Params) {
  return useQuery({
    queryKey: ['thread-summary-forum', params.threadId],
    queryFn: () => threadApis.showThreadSummaryForum(params),
  });
}
