import * as React from 'react';

import { Box, Button } from '@/modules/components/mui';
import { useThreadCrawl } from '@/domain/gochan/hooks/useThreadCrawl';
import { Contents } from '@/domain/thread/standalone/ThreadSummaryEditor/components/Contents';
import { Post } from '@/domain/gochan/api';

export type SubmitParams = {
  title: string;
  url: string;
  posts: Post[];
};

type Props = {
  url: string;
  initialData?: {
    selectedPostIds: number[];
  };
  onSubmit: (params: SubmitParams) => void;
};

export function ThreadSummaryEditor({ url, initialData, onSubmit }: Props) {
  const { data } = useThreadCrawl({ url });

  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);

  const selectedPosts = React.useMemo(() => {
    if (!data) {
      return [];
    }
    const { posts } = data.responseData;

    return selectedIds.map((id) => {
      return posts.find((p) => p.postId === id)!;
    });
  }, [data, selectedIds]);

  const handleSelectPost = React.useCallback((id: number) => {
    setSelectedIds((prev) => prev.concat(id));
  }, []);

  const handleUnselectPost = React.useCallback((id: number) => {
    setSelectedIds((prev) => prev.filter((p) => p !== id));
  }, []);

  const handleSubmit = React.useCallback(() => {
    if (!data) {
      return;
    }

    onSubmit({
      title: data.responseData.title,
      url: url,
      posts: selectedPosts,
    });
  }, [data, selectedPosts, onSubmit, url]);

  React.useEffect(() => {
    if (!initialData) {
      return;
    }

    setSelectedIds(initialData.selectedPostIds);
  }, [initialData, setSelectedIds]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <Box sx={{ p: 1 }}>{data?.responseData.title}</Box>
      <Box sx={{ flex: 1, minHeight: 0 }}>
        {data && (
          <Contents
            posts={data.responseData.posts}
            selectedPosts={selectedPosts}
            onSelectPost={handleSelectPost}
            onUnselectPost={handleUnselectPost}
          />
        )}
      </Box>

      <Box sx={{ p: 1, textAlign: 'right' }}>
        <Button color="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Box>
    </Box>
  );
}
