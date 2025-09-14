import {createBrowserRouter} from "react-router";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersJsonPage from "../pages/UsersJsonPage.tsx";
import UsersDummyPage from "../pages/UsersDummyPage.tsx";
import PostsJsonPage from "../pages/PostsJsonPage.tsx";
import PostsDummyPage from "../pages/PostsDummyPage.tsx";
import CommentsJsonPage from "../pages/CommentsJsonPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users/jsonplaceholder', element: <UsersJsonPage/>},
            {path: 'users/dummyjson', element: <UsersDummyPage/>},
            {path: 'posts/jsonplaceholder', element: <PostsJsonPage/>},
            {path: 'posts/dummyjson', element: <PostsDummyPage/>},
            {path: 'comments/jsonplaceholder', element: <CommentsJsonPage/>},
        ]
    }
])