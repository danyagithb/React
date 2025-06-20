// export interface IPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

export interface IReactions {
  likes: number;
  dislikes: number;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}