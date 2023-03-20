import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate, useSearchParams } from "react-router-dom";
import { RootState, useAppDispatch } from "../../../store";
import { login } from "../../../redux/slices/authSlice";
import { showError, showSuccess } from "../../../utils/toast";
import { IUserSignin } from "../../../type/user.interface";

import style from "./Signin.module.scss";

const Signin = () => {
   const dispatch = useAppDispatch();
   const [searchParams, setSearchParams] = useSearchParams();
   const { user } = useSelector((state: RootState) => state.auth);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         email: "",
         passWord: "",
      },
   });

   const onSubmit = async (values: IUserSignin) => {
      try {
         await dispatch(login(values)).unwrap();
         showSuccess("Login successfully!");
      } catch (err: any) {
         showError(err.message);
      }
   };

   const showPassword = () => {
      const el = document.getElementById("passWord");

      if (el?.getAttribute("type") === "password") {
         el.setAttribute("type", "text");
      } else {
         el?.setAttribute("type", "password");
      }
   };

   if (user?.accessToken) {
      const redirectUrl = searchParams.get("redirectUrl");
      return <Navigate to={redirectUrl || "/"} replace />;
   }

   return (
      <div className={style.wrapper}>
         <h1 className={style.title}>Login</h1>
         <div className={style.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className={style.inputGroup}>
                  <label htmlFor="email">Email:</label>
                  <input
                     id="email"
                     placeholder="example@kyanon.digital"
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Please enter your email!",
                        },
                     })}
                  />
                  {errors.email && <span>{errors.email.message}</span>}
               </div>
               <div className={style.inputGroup}>
                  <label htmlFor="passWord">Password:</label>
                  <input
                     type="password"
                     id="passWord"
                     placeholder="******"
                     {...register("passWord", {
                        required: {
                           value: true,
                           message: "Please enter your password!",
                        },
                     })}
                  />
                  {errors.passWord && <span>{errors.passWord.message}</span>}
               </div>
               <div className={style.action}>
                  <div className={style.show}>
                     <input type="checkbox" id="check" onClick={showPassword} />
                     <label htmlFor="check">Show password</label>
                  </div>
                  <button>Sign in</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Signin;
