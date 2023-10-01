import * as React from 'react';
import Cookies from 'js-cookie';
import { ulid } from 'ulid';

export function useSetUid() {
  const key = 'uid';

  React.useEffect(() => {
    if (Cookies.get(key) !== undefined) {
      return;
    }

    const uid = ulid();
    const expires = 365;
    Cookies.set(key, uid, { expires });
  }, []);
}
