import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import AddProduct from "../Pages/Dashboard/Dashboard/AddProduct";
import AllBuyers from "../Pages/Dashboard/Dashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/Dashboard/AllSellers";
import AllUsers from "../Pages/Dashboard/Dashboard/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/Dashboard/MyOrders";
import MyProduct from "../Pages/Dashboard/Dashboard/MyProduct";
import SingleCategory from "../Pages/ProductCategory/SingleCategory";
import PrivateRoute from "./PrivateRoute";


const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main />,
        children: [
            {
                path:'/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/category/:Id',
                element: <PrivateRoute><SingleCategory /></PrivateRoute> 
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element: <MyOrders /> 
            } ,
            {
                path:'/dashboard/addproduct',
                element: <AddProduct /> 
            }, 
            {
                path:'/dashboard/allusers',
                element: <AllUsers /> 
            }, 
            {
                path:'/dashboard/myproduct',
                element: <MyProduct /> 
            }, 
            {
                path:'/dashboard/allsellers',
                element: <AllSellers /> 
            }, 
            {
                path:'/dashboard/allbuyers',
                element: <AllBuyers /> 
            }, 
        ]

    }
]);

export default routes;