import type { Metadata } from 'next';

import { Layout } from '@/app/admin/_components/Layout';

export const metadata: Metadata = {
  title: 'Shota admin',
  description: 'Administrator page for Shota',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
