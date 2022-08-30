import { UserType } from "./user";

export type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserType;
};

export type CommentsType = CommentType[];
