import { Image, Link, Dropdown } from '@/modules/components/shared';

const DropdownItems = [
  {
    label: 'Top',
    href: '/user/',
  },
  {
    label: 'Threads',
    href: '/user/thread-summaries/',
  },
];

export function Nav() {
  return (
    <nav className="sticky top-0 h-16 bg-white border-slate-200 border-b">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/user/" className="ml-2">
          <Image
            src="/assets/images/logo-shota.png"
            width={100}
            height={40}
            alt="Shota logo"
          />
        </Link>

        <div className="mr-4">
          <Dropdown label="Menu" items={DropdownItems} />
        </div>
      </div>
    </nav>
  );
}
