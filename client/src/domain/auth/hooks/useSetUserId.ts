import * as React from 'react';
import Cookies from 'js-cookie';
import { ulid } from 'ulid';

export function useSetUserId() {
  const key = 'userId';

  React.useEffect(() => {
    if (Cookies.get(key) !== undefined) {
      return;
    }

    const userId = ulid();
    const expires = 365;
    Cookies.set(key, userId, { expires });
  }, []);
}
