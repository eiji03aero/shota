'use client';

import * as React from 'react';

import { SearchForm } from '@/modules/components/shared';
import { useThreadSummaries } from '@/domain/thread/hooks/useThreadSummaries';

import { ThreadSummaryCard } from '@/app/user/thread-summaries/_components/ThreadSummaryCard';

type Props = {};

export function ThreadSummaryList({}: Props) {
  const [keyword, setKeyword] = React.useState('');
  const [threadSummariesParams, setThreadSummariesParams] = React.useState({
    keyword: '',
  });

  const { data: threadSummariesData } = useThreadSummaries({
    params: threadSummariesParams,
  });

  const handleSubmit = React.useCallback(() => {
    setThreadSummariesParams({
      keyword,
    });
  }, [keyword]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-6">
        <SearchForm
          value={keyword}
          onChangeValue={setKeyword}
          onSubmit={handleSubmit}
        />
      </div>

      {threadSummariesData?.responseData.map((threadSummary) => (
        <ThreadSummaryCard
          key={threadSummary.id}
          threadSummary={threadSummary}
        />
      ))}
    </div>
  );
}
