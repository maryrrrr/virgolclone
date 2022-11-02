import { createBrowserRouter } from 'react-router-dom';
import Feed from '../pages/feed';
import Login from '../pages/login';
import Post from '../pages/post';
import Author from '../pages/author';
import NotFound from '../pages/notfound';
import Category from '../pages/category';
import DescriptionPages from '../pages/descriptionpages';
import Tag from '../pages/tag';
import Register from '../pages/register';


export const Router= createBrowserRouter ([
    {
        path:"/",
        element: <Feed/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/author/:id",
        element: <Author/>
    },
    {
        path:"/register",
        element: <Register/>
    },
    {
        path:"/post/:id",
        element: <Post/>
    },
    {
        path:"/*",
        element: <NotFound/>
    },
    {
        path:"/descriptionpages",
        element: <DescriptionPages/>
    },
    {
        path:"/tag/:tagname",
        element: <Tag/>
    },
    {
        path: "/category/:id",
        element: <Category/>
    }

])