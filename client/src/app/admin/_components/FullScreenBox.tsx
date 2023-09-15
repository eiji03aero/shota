import * as React from 'react';
import { Box } from '@/modules/components/mui';

type Props = {
  children: React.ReactNode;
};

export function FullScreenBox({ children }: Props) {
  return (
    <Box sx={{ width: '100%', height: `calc(100vh - 64px)` }}>{children}</Box>
  );
}
