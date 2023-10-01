'use client';

import * as React from 'react';

import {
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
} from '@/modules/components/mui';
import { Link } from '@/modules/components/shared';

const DropdownWidth = 200;

type Props = {
  label: string;
  items: Array<{
    label: string;
    href: string;
  }>;
};

export function Dropdown({ label, items }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const labelRef = React.useRef<HTMLButtonElement>(null);
  const dropdownCoordsRef = React.useRef({ x: 0, y: 0 });

  const handleClickOnLabel = React.useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    if (!labelRef.current) {
      return;
    }

    setIsOpen(true);

    const rect = labelRef.current.getBoundingClientRect();
    dropdownCoordsRef.current.x = rect.left + rect.width - DropdownWidth;
    dropdownCoordsRef.current.y = rect.top + rect.height + 8;
  }, [isOpen]);

  const handleClickOnItem = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <button ref={labelRef} onClick={handleClickOnLabel}>
        {label}
        <span className="text-base">
          {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed bg-white border-slate-200 border"
          style={{
            width: DropdownWidth,
            top: dropdownCoordsRef.current.y,
            left: dropdownCoordsRef.current.x,
          }}
        >
          {items.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={item.href}
                className="block border-b border-slate-200 px-6 py-2"
                onClick={handleClickOnItem}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
