import { Link } from '@/modules/components/shared';
import * as threadApis from '@/domain/thread/api';

type Props = {
  threadSummary: threadApis.ThreadSummary;
};

export function ThreadSummaryCard({ threadSummary }: Props) {
  return (
    <article className="mb-8">
      <header className="text-xl mb-2">
        <Link
          href={`/user/thread-summaries/${threadSummary.id}`}
          className="text-purple-600"
        >
          {threadSummary.title}
        </Link>
      </header>
      <p>{threadSummary.posts[0].content}</p>
    </article>
  );
}
