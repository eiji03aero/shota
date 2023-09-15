import { Box, Typography } from '@/modules/components/mui';
import { Post } from '@/domain/gochan/api';

type Props = {
  post: Post;
};

export function Post({ post }: Props) {
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex' }}>
        <Typography variant="subtitle2" sx={{ mr: 1 }}>
          {post.postId}
        </Typography>
        <Typography variant="subtitle2">{post.userName}</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="subtitle2">{post.postedAt}</Typography>
        <Typography variant="subtitle2">{post.userId}</Typography>
      </Box>

      <Typography variant="body1">{post.content}</Typography>
    </Box>
  );
}
