import { Box, IconButton, DeleteIcon } from '@/modules/components/mui';

import { Post as PostType } from '@/domain/gochan/api';
import { Post } from '@/domain/thread/standalone/ThreadSummaryEditor/components/Post';

type Props = {
  post: PostType;
  onDelete: (id: number) => void;
};

export function SelectedPost({ post, onDelete }: Props) {
  return (
    <Box sx={{ pl: 5, position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
        <IconButton onClick={() => onDelete(post.postId)}>
          <DeleteIcon />
        </IconButton>
      </Box>

      <Post post={post} />
    </Box>
  );
}
