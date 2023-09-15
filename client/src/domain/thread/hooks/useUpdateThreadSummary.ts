import { useMutation } from '@tanstack/react-query';

import * as threadApis from '@/domain/thread/api';

export const useUpdateThreadSummary = () => {
  return useMutation(threadApis.updateThreadSummary);
};
