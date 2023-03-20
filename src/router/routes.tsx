import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Auth from "../pages/Auth";
import Signin from "../pages/Auth/Signin";

const UserProtected = lazy(() => import("./UserProtected"));
const RootLayout = lazy(() => import("../layout"));
const Profile = lazy(() => import("../pages/Profile"));

const routes = createBrowserRouter([
   // Authenication
   {
      path: "",
      element: <Auth />,
      children: [{ path: "/signin", element: <Signin /> }],
   },
   {
      path: "/",
      element: (
         <UserProtected>
            <RootLayout />
         </UserProtected>
      ),
      children: [
         {
            index: true,
            element: <Profile />,
         },
      ],
   },
]);

export default routes;
