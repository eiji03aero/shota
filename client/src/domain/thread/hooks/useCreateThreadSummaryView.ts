import * as React from 'react';
import { useMutation } from '@tanstack/react-query';

import * as threadApis from '@/domain/thread/api';
import { useUserId } from '@/domain/auth/hooks/useUserId';

type Params = {
  threadId: number;
};

export function useCreateThreadSummaryView({ threadId }: Params) {
  const { userId } = useUserId();
  const { mutate } = useMutation(threadApis.createThreadSummaryView);

  React.useEffect(() => {
    mutate({
      threadId,
      userId,
    });
  }, [mutate, userId, threadId]);
}
