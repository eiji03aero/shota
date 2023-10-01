import Cookies from 'js-cookie';

export function useUserId() {
  const key = 'userId';

  return {
    userId: Cookies.get(key)!,
  };
}
