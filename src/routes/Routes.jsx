import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyList from "../components/MyList/MyList";
import AddTouristSpot from "../components/AddTouristSpot/AddTouristSpot";
import UpdateSpot from "../components/UpdateSpot/UpdateSpot";
import AllSpot from "../components/AllSpot/AllSpot";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import CountrySpot from "../components/CountrySpot/CountrySpot";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: '/login',
                element: <Login></Login>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: '/register',
                element: <Register></Register>,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: '/allTouristSpot',
                element: <AllSpot></AllSpot>,
                loader: () => fetch('http://localhost:5000/allSpot'),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                errorElement: <ErrorPage></ErrorPage>,

            },
            {
                path: '/addSpot',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot>
                </PrivateRoute> ,
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: '/updateSpot/:id',
                element: <PrivateRoute><UpdateSpot></UpdateSpot></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/userSpot/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/userSpot/${params.id}`),
                errorElement: <ErrorPage></ErrorPage>,
            },
            {
                path: '/countrySpot/:country',
                element: <CountrySpot></CountrySpot>,
                loader: ({params}) => fetch(`http://localhost:5000/spotList/${params.country}`),
                errorElement: <ErrorPage></ErrorPage>,
            }
        ]
    },
]);
export default router;