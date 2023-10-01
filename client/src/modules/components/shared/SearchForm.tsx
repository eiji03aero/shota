import * as React from 'react';

type Props = {
  value: string;
  onChangeValue: (value: string) => void;
  onSubmit: () => void;
};

export function SearchForm({ value, onChangeValue, onSubmit }: Props) {
  const handleSubmit = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );

  return (
    <form
      className="flex max-w-md border-slate-200 border"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 py-1 pl-1"
        type="search"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
      <button className="px-2 bg-white border-slate-200 border-l" type="submit">
        Search
      </button>
    </form>
  );
}
