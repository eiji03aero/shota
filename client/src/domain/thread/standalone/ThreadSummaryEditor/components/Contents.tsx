import { Box } from '@/modules/components/mui';
import { Post } from '@/domain/gochan/api';
import { SourcePost } from '@/domain/thread/standalone/ThreadSummaryEditor/components/SourcePost';
import { SelectedPost } from '@/domain/thread/standalone/ThreadSummaryEditor/components/SelectedPost';

type Props = {
  posts: Post[];
  selectedPosts: Post[];
  onSelectPost: (id: number) => void;
  onUnselectPost: (id: number) => void;
};

export function Contents({
  posts,
  selectedPosts,
  onSelectPost,
  onUnselectPost,
}: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        p: 2,
      }}
    >
      <Box
        sx={{
          flex: 1,
          borderRight: '1px solid grey',
          background: '#f5f5f5',
          overflow: 'auto',
        }}
      >
        {selectedPosts.map((post) => (
          <SelectedPost
            key={post.postId}
            post={post}
            onDelete={onUnselectPost}
          />
        ))}
      </Box>

      <Box sx={{ flex: 1, background: '#f5f5f5', overflow: 'auto' }}>
        {posts.map((post) => (
          <SourcePost key={post.postId} post={post} onAdd={onSelectPost} />
        ))}
      </Box>
    </Box>
  );
}
