'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { useUpdateThreadSummary } from '@/domain/thread/hooks/useUpdateThreadSummary';
import {
  ThreadSummaryEditor,
  SubmitParams,
} from '@/domain/thread/standalone/ThreadSummaryEditor';
import { ThreadSummary } from '@/domain/thread/api';

type Props = {
  threadSummary: ThreadSummary;
};

export function ThreadSummaryEdit({ threadSummary }: Props) {
  const router = useRouter();
  const { mutate } = useUpdateThreadSummary();

  const initialData = React.useMemo(
    () => ({
      selectedPostIds: threadSummary.posts.map((post) => post.postId),
    }),
    [threadSummary],
  );

  const handleSubmit = React.useCallback(
    (params: SubmitParams) => {
      mutate(
        {
          ...params,
          id: threadSummary.id,
        },
        {
          onSuccess: () => {
            router.push('/admin/thread-summaries/');
          },
        },
      );
    },
    [threadSummary, mutate, router],
  );

  return (
    <ThreadSummaryEditor
      url={threadSummary.url}
      initialData={initialData}
      onSubmit={handleSubmit}
    />
  );
}
