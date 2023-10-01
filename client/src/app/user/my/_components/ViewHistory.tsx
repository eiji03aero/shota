import { Link } from '@/modules/components/shared';
import * as threadApis from '@/domain/thread/api';

type Props = {
  views: threadApis.ThreadSummaryView[];
};

export function ViewHistory({ views }: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-xl mb-2">View History</h2>

      {views.map((view) => (
        <p key={view.id}>
          <Link
            className="text-purple-600 mr-4"
            href={`/user/thread-summaries/${view.thread.id}`}
          >
            {view.thread.title}
          </Link>

          <span>({view.createdAt})</span>
        </p>
      ))}
    </div>
  );
}
