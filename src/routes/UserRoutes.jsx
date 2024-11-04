import Home from "../pages/Home";
import Payment from "../pages/Payment";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PremiumTrial from "../pages/PremiumTrial";
import ViewTask from "../pages/ViewTask";
const UserRoutes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/premium-trial",
    element: <PremiumTrial />,
  },
  {
    path: "/view-task",
    element: <ViewTask />,
  },
];

export default UserRoutes;
