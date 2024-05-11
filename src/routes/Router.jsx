import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Welcome from '../pages/Welcome/Welcome';

const createRoutes = () => {
  return createBrowserRouter([
    {
        path: "/",
        element: <Welcome />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/profile/:id",
        element: <Profile />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
  ]);
};

export default createRoutes;