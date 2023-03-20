import { Outlet } from "react-router-dom";
import style from "./RootLayout.module.scss";

const RootLayout = () => {
   return (
      <div className={style.wrapper}>
         <div className={style.main}>
            <Outlet />
         </div>
      </div>
   );
};

export default RootLayout;
