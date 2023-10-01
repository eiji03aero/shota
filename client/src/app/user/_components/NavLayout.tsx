'use client';

import * as React from 'react';

import { useSetUid } from '@/domain/auth/hooks/useSetUid';

import { Nav } from '@/app/user/_components/Nav';

type Props = {
  children: React.ReactNode;
};

export function NavLayout({ children }: Props) {
  useSetUid();

  return (
    <div className="bg-orange-50 min-h-screen">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
