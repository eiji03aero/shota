export const ApiUrl = 'http://localhost:3100/';
export const SSRApiUrl = 'http://backend:3100/';

export const getApiUrl = () => {
  if (typeof window === 'undefined') {
    // in server
    return SSRApiUrl;
  }

  // in client
  return ApiUrl;
};
