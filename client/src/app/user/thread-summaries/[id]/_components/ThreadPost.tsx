import * as threadApis from '@/domain/thread/api';

type Props = {
  threadPost: threadApis.ThreadPost;
};

export function ThreadPost({ threadPost }: Props) {
  return (
    <article className="mb-6">
      <header className="text-xs">
        <div className="mb-1">
          <span className="mr-2">{threadPost.postId}</span>
          <span className="text-purple-600">{threadPost.userName}</span>
        </div>
        <div className="flex justify-between">
          <span>{threadPost.postedAt}</span>
          <span>User id: {threadPost.userId}</span>
        </div>
      </header>

      <p>{threadPost.content}</p>
    </article>
  );
}
