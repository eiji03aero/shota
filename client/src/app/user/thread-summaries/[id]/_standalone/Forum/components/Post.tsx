import * as threadApis from '@/domain/thread/api';

type Props = {
  post: threadApis.ThreadSummaryForumPost;
};

export function Post({ post }: Props) {
  return (
    <article className="mb-4">
      <header className="text-sm mb-2">
        <span className="mr-1">{post.postId}</span>
        <span>{post.createdAt}</span>
      </header>
      <p>{post.content}</p>
    </article>
  );
}
