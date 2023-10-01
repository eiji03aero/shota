'use client';

import * as React from 'react';

import { useUid } from '@/domain/auth/hooks/useUid';
import { useThreadSummaryForum } from '@/domain/thread/hooks/useThreadSummaryForum';
import { useCreateThreadSummaryForumPost } from '@/domain/thread/hooks/useCreateThreadSummaryForumPost';

import { Post } from '@/app/user/thread-summaries/[id]/_standalone/Forum/components/Post';

type Props = {
  threadId: number;
};

export function Forum({ threadId }: Props) {
  const [content, setContent] = React.useState('');
  const { uid } = useUid();

  const threadSummaryForumParams = React.useMemo(() => {
    return { threadId };
  }, [threadId]);
  const { data: threadSummaryForumData, refetch } = useThreadSummaryForum({
    params: threadSummaryForumParams,
  });

  const { mutateAsync } = useCreateThreadSummaryForumPost();

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      await mutateAsync({ uid, threadId, content });
      refetch();
      setContent('');
    },
    [mutateAsync, refetch, uid, threadId, content],
  );

  return (
    <div>
      <h1 className="text-xl mb-6">Comment forum</h1>

      {threadSummaryForumData?.responseData.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}

      <div className="mb-6" />

      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full mb-1 border border-slate-200"
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="bg-white px-2 border border-slate-200" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
