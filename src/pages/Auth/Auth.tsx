import { Outlet } from "react-router-dom";

import style from "./Auth.module.scss";

const Auth = () => {
   return (
      <div className={style.container}>
         <Outlet />
      </div>
   );
};

export default Auth;
