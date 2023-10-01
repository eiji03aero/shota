import Cookies from 'js-cookie';

export function useUid() {
  const key = 'uid';

  return {
    uid: Cookies.get(key)!,
  };
}
