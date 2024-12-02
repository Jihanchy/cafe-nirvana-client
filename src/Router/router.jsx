import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Page/ErrorPage";
import AddCoffee from "../Page/AddCoffee";
import Users from "../Page/Users";
import HomePage from "../Page/HomePage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/addCoffee',
                element:<AddCoffee/>
            },
            {
                path:'/users',
                element:<Users/>
            }
        ]
    }
])
    

export default router;