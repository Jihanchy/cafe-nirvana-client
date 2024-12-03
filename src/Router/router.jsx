import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Page/ErrorPage";
import AddCoffee from "../Page/AddCoffee";
import Users from "../Page/Users";
import HomePage from "../Page/HomePage";
import ViewCoffee from "../Page/ViewCoffee";
import UpdateCoffee from "../Page/UpdateCoffee";

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
                path:'/viewCoffee/:id',
                element:<ViewCoffee/>,
                loader:({params}) =>fetch(`http://localhost:4000/coffees/${params.id}`)
            },
            {
                path:'/updateCoffee/:id',
                element:<UpdateCoffee/>,
                loader:({params}) =>fetch(`http://localhost:4000/coffees/${params.id}`)
            },
            {
                path:'/users',
                element:<Users/>
            }
        ]
    }
])
    

export default router;