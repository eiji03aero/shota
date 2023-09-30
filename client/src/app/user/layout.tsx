import * as React from 'react';

import '@/app/user/globals.css';
import { NavLayout } from '@/app/user/_components/NavLayout';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavLayout>{children}</NavLayout>;
}
