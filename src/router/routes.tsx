import {createBrowserRouter} from "react-router";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersJsonPage from "../pages/users/UsersJsonPage.tsx";
import UsersDummyPage from "../pages/users/UsersDummyPage.tsx";
import PostsJsonPage from "../pages/posts/PostsJsonPage.tsx";
import PostsDummyPage from "../pages/posts/PostsDummyPage.tsx";
import CommentsJsonPage from "../pages/comments/CommentsJsonPage.tsx";
import CommentsDummyPage from "../pages/comments/CommentsDummyPage.tsx";
import UsersPage from "../pages/users/UsersPage.tsx";
import PostsPage from "../pages/posts/PostsPage.tsx";
import CommentsPage from "../pages/comments/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <UsersJsonPage/>},
                    {path: 'dummyjson', element: <UsersDummyPage/>},
                ]
            },
            {path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <PostsJsonPage/>},
                    {path: 'dummyjson', element: <PostsDummyPage/>},
                ]
            },
            {path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <CommentsJsonPage/>},
                    {path: 'dummyjson', element: <CommentsDummyPage/>},
                ]
            },
        ]
    }
])