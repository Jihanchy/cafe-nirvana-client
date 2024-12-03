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
                element:<HomePage/>,
                loader:()=>fetch('http://localhost:4000/coffees')
            },
            {
                path:'/addCoffee',
                element:<AddCoffee/>
            },
            {
                path:'/viewCoffee',
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