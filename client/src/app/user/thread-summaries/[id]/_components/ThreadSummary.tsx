import { Link } from '@/modules/components/shared';
import * as threadApis from '@/domain/thread/api';

import { ThreadPost } from '@/app/user/thread-summaries/[id]/_components/ThreadPost';

type Props = {
  threadSummary: threadApis.ThreadSummary;
};

export function ThreadSummary({ threadSummary }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="mb-6 text-xl">
        <Link href={threadSummary.url} target="_blank" rel="noopener">
          {threadSummary.title}
        </Link>
      </h1>

      <div className="mb-8">
        {threadSummary.posts.map((threadPost) => (
          <ThreadPost key={threadPost.id} threadPost={threadPost} />
        ))}
      </div>
    </div>
  );
}
