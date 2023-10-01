'use client';

import * as React from 'react';

import { useSetUserId } from '@/domain/auth/hooks/useSetUserId';

import { Nav } from '@/app/user/_components/Nav';

type Props = {
  children: React.ReactNode;
};

export function NavLayout({ children }: Props) {
  useSetUserId();

  return (
    <div className="bg-orange-50 min-h-screen">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
