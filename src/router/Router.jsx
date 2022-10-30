import { createBrowserRouter } from 'react-router-dom';
import Feed from '../feed';
import Login from '../login';
import Post from '../post';
import Author from '../author';
import NotFound from '../notfound';
import Category from '../category';
import DescriptionPages from '../descriptionpages';
import Tag from '../tag';
import Register from '../register';


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
        path:"/notfound",
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