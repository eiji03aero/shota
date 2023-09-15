import {
  Box,
  IconButton,
  AddCircleOutlineIcon,
} from '@/modules/components/mui';

import { Post as PostType } from '@/domain/gochan/api';
import { Post } from '@/domain/thread/standalone/ThreadSummaryEditor/components/Post';

type Props = {
  post: PostType;
  onAdd: (id: number) => void;
};

export function SourcePost({ post, onAdd }: Props) {
  return (
    <Box sx={{ pl: 5, position: 'relative' }}>
      <Box sx={{ position: 'absolute', top: 0, left: 0 }}>
        <IconButton onClick={() => onAdd(post.postId)}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>

      <Post post={post} />
    </Box>
  );
}
