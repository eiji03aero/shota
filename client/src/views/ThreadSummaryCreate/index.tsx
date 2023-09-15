'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { useCreateThreadSummary } from '@/domain/thread/hooks/useCreateThreadSummary';
import {
  ThreadSummaryEditor,
  SubmitParams,
} from '@/domain/thread/standalone/ThreadSummaryEditor';

export function ThreadSummaryCreate() {
  const [url, setUrl] = React.useState('');
  const router = useRouter();
  const { mutate } = useCreateThreadSummary();

  const handleSubmit = React.useCallback(
    (params: SubmitParams) => {
      mutate(params, {
        onSuccess: () => {
          router.push('/admin/thread-summaries/');
        },
      });
    },
    [mutate, router],
  );

  React.useEffect(() => {
    const defaultUrl =
      'https://nova.5ch.net/test/read.cgi/livegalileo/1694004573?v=pc';
    const url = window.prompt('Input the url to the thread', defaultUrl);

    if (url) {
      setUrl(url);
    }
  }, []);

  if (!url) {
    return null;
  }

  return <ThreadSummaryEditor url={url} onSubmit={handleSubmit} />;
}
