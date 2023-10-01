import { useQuery } from '@tanstack/react-query';

import * as threadApis from '@/domain/thread/api';

type Params = {
  params?: threadApis.IndexThreadSummariesParams;
};

export const useThreadSummaries = ({ params }: Params) => {
  return useQuery({
    queryKey: ['thread-summary', params?.keyword],
    queryFn: () => threadApis.indexThreadSummaries(params),
    suspense: true,
  });
};
