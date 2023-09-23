import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./layout/pages/Home/Home";
import Favorites from "./layout/pages/Favorites/Favorites";
import Login from "./layout/pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
           loader:()=> fetch('phons.json')
        },
        {
            path:'/favorites',
            element: <Favorites></Favorites>
            
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

export default router;