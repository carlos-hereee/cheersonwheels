// /* eslint-disable no-unused-vars */

// declare module "media-context" {
//   import type { A_MEDIA } from "@utils/actions/MediaActions";
//   import { Message } from "app-types";

//   export interface UserPostData {
//     avatar: string;
//     name: string;
//     userId: string;
//     role: UserRole;
//   }
//   export interface PostReply {
//     postId?: string;
//     post?: Post;
//     posts?: Post[];
//     messageId?: string;
//     reply?: { data: string };
//   }
//   export interface Post {
//     uid: string;
//     appId: string;
//     postId: string;
//     updatedAt: string;
//     thumbnail: string;
//     createdBy?: UserPostData;
//     name: string;
//     body: string;
//     reviews: string;
//     comments: Message[];
//   }
//   export interface MediaState {
//     isLoading: boolean;
//     error: string;
//     requestStatus: string;
//     post: Post;
//     posts: Post[];
//   }
//   export interface MediaRequest {
//     appId: string;
//     name: string;
//   }
//   export interface CreatePost {
//     post: Post;
//     appId: string;
//   }
//   export interface IMediaState extends MediaState {
//     setLoading: (loading: boolean) => void;
//     // updatePost: (post: Post) => void;
//     setRequestStatus: (status: string) => void;
//     getPosts: (appId: string) => void;
//     updatePosts: (post: Post[]) => void;
//     addPost: (event: CreatePost) => void;
//     postReply: (event: PostReply) => void;
//     updateLikePost: (postId: string) => void;
//     deletePost: (appId: string, postId: string) => void;
//     updateLikeMessage: (data: PostReply) => void;
//     postMessageReply: (event: PostReply) => void;
//   }
//   export interface MediaDispatchProps {
//     dispatch: React.Dispatch<MediaActionProps>;
//     updateUser?: (user: UserSchema) => void;
//     updatePost?: (user: PostReply) => void;
//     appId?: string;
//     messageId?: string;
//     post?: Post;
//     reply?: { data: string };
//     postId?: string;
//     posts?: Post[];
//   }
//   export type MediaActionProps =
//     | { type: A_MEDIA.IS_LOADING; payload: boolean }
//     | { type: A_MEDIA.SET_ERROR | A_MEDIA.SET_REQUEST_STATUS; payload: string }
//     | { type: A_MEDIA.SET_POST; payload: Post }
//     | { type: A_MEDIA.SET_POSTS; payload: Post[] };
// }
