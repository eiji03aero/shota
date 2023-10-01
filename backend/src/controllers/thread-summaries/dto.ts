export type PostDao = {
  postId: number;
  userId: string;
  userName: string;
  content: string;
  postedAt: string;
};

export class CreateDto {
  title: string;
  url: string;
  posts: PostDao[];
}

export class UpdateDto {
  title: string;
  url: string;
  posts: PostDao[];
}

export type CreateViewDao = {
  userId: string;
};
