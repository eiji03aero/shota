import { useQuery } from '@tanstack/react-query';

import * as gochanApis from '@/domain/gochan/api';

type Params = {
  url: string;
};

export const useThreadCrawl = ({ url }: Params) => {
  const queryResult = useQuery({
    queryKey: ['gochan', 'getCrawl'],
    queryFn: () => gochanApis.getCrawl({ url }),
  });

  return queryResult;
};
