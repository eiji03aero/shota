import { getApiUrl } from '@/const';
import { axios } from '@/modules/lib/axios';

import { Post } from '@/domain/gochan/api';

export type ThreadPost = {
  id: number;
  threadId: number;
  postId: number;
  userId: string;
  userName: string;
  content: string;
  postedAt: string;
};

export type ThreadSummary = {
  id: number;
  title: string;
  url: string;
  posts: ThreadPost[];
};

export type ThreadSummaryForum = {
  id: number;
  threadId: number;
  posts: ThreadSummaryForumPost[];
};

export type ThreadSummaryForumPost = {
  id: number;
  threadSummaryForumId: number;
  postId: number;
  content: string;
  createdAt: string;
};

export type IndexThreadSummariesParams = {
  keyword?: string;
};
type IndexThreadSummariesRespose = ThreadSummary[];
export const indexThreadSummaries = async (
  params?: IndexThreadSummariesParams,
) => {
  const response = await axios.get(`${getApiUrl()}thread-summaries`, {
    params,
  });

  return {
    responseData: response.data as IndexThreadSummariesRespose,
  };
};

type ShowThreadSummaryParams = { id: number };
type ShowThreadSummaryResponse = ThreadSummary;
export const showThreadSummary = async (params: ShowThreadSummaryParams) => {
  const response = await axios.get(
    `${getApiUrl()}thread-summaries/${params.id}`,
  );

  return {
    responseData: response.data as ShowThreadSummaryResponse,
  };
};

type CreateThreadSummaryParams = {
  title: string;
  url: string;
  posts: Post[];
};
export const createThreadSummary = async (data: CreateThreadSummaryParams) => {
  await axios.post(`${getApiUrl()}thread-summaries/`, data);

  return;
};

type UpdateThreadSummaryParams = {
  id: number;
  title: string;
  url: string;
  posts: Post[];
};
export const updateThreadSummary = async (data: UpdateThreadSummaryParams) => {
  await axios.put(`${getApiUrl()}thread-summaries/${data.id}/`, data);

  return;
};

export type ShowThreadSummaryForumParams = { threadId: number };
type ShowThreadSummaryForumResponse = ThreadSummaryForum;
export const showThreadSummaryForum = async (
  params: ShowThreadSummaryForumParams,
) => {
  const response = await axios.get(
    `${getApiUrl()}thread-summaries/${params.threadId}/forum`,
  );

  return {
    responseData: response.data as ShowThreadSummaryForumResponse,
  };
};

type CreateThreadSummaryForumPostParams = {
  uid: string;
  threadId: number;
  content: string;
};
export const createThreadSummaryForumPost = async ({
  threadId,
  ...data
}: CreateThreadSummaryForumPostParams) => {
  await axios.post(
    `${getApiUrl()}thread-summaries/${threadId}/forum/post`,
    data,
  );

  return;
};
