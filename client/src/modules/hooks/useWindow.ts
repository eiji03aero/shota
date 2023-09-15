import * as React from 'react';

export function useWindow() {
  const getWindow = React.useCallback(() => {
    return typeof window !== 'undefined' ? window : undefined;
  }, []);

  return {
    getWindow,
  };
}
