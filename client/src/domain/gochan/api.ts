import { getApiUrl } from '@/const';
import { axios } from '@/modules/lib/axios';

export type Post = {
  postId: number;
  userId: string;
  userName: string;
  content: string;
  postedAt: string;
};

type GetCrawlParams = {
  url: string;
};
type GetCrawlResponse = {
  title: string;
  posts: Post[];
};
export const getCrawl = async ({ url }: GetCrawlParams) => {
  const response = await axios.get(`${getApiUrl()}gochan/crawl`, {
    params: { url },
  });

  return {
    responseData: response.data as GetCrawlResponse,
  };
};
