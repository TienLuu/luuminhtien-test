import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import userAPI from "../../services/userAPI";

import style from "./Profile.module.scss";
import { RootState, useAppDispatch } from "../../store";
import { showError, showSuccess } from "../../utils/toast";
import { IUserUpdate } from "../../type/user.interface";
import { getUser } from "../../redux/slices/userSlice";
import localService from "../../services/localService";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const { user } = useSelector((state: RootState) => state.user);

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm({
      defaultValues: {
         id: "",
         name: "",
         email: "",
         phoneNumber: "",
         passWord: "",
      },
   });

   useEffect(() => {
      const { id } = localService.user.get();
      if (id) {
         dispatch(getUser(id));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (user) {
         console.log(user[0]);
         Object.entries(user[0]).forEach(([key, value]: any) => {
            if (key === "userId") key = "id";
            setValue(key, value);
         });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [setValue, user]);

   const onSubmit = async (values: IUserUpdate) => {
      try {
         await userAPI.updateUser(values);
         showSuccess("Update user successfully");
      } catch (error: any) {
         showError(error);
      }
   };

   const hanldeSignout = async () => {
      dispatch(logout(null));
      navigate("/signin");
   };

   return (
      <div className={style.wrapper}>
         <h1 className={style.title}>Profile</h1>
         <div className={style.formWrapper}>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className={style.inputGroup}>
                  <label htmlFor="userId">ID:</label>
                  <input
                     id="userId"
                     placeholder="ID"
                     disabled
                     {...register("id", {
                        required: {
                           value: true,
                           message: "Id is required",
                        },
                     })}
                  />
                  {errors.id && (
                     <span className={style.error}>{errors.id.message}</span>
                  )}
               </div>
               <div className={style.inputGroup}>
                  <label htmlFor="name">Full name:</label>
                  <input
                     id="name"
                     placeholder="Name"
                     {...register("name", {
                        required: {
                           value: true,
                           message: "Name is required",
                        },
                     })}
                  />
                  {errors.name && (
                     <span className={style.error}>{errors.name.message}</span>
                  )}
               </div>
               <div className={style.inputGroup}>
                  <label htmlFor="email">Email:</label>
                  <input
                     id="email"
                     placeholder="Email"
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Email is required",
                        },
                     })}
                  />
                  {errors.email && (
                     <span className={style.error}>{errors.email.message}</span>
                  )}
               </div>
               <div className={style.inputGroup}>
                  <label htmlFor="phone">Phone:</label>
                  <input
                     id="phone"
                     placeholder="Phone Number"
                     {...register("phoneNumber", {
                        required: {
                           value: true,
                           message: "Phone Number is required",
                        },
                     })}
                  />
                  {errors.phoneNumber && (
                     <span className={style.error}>
                        {errors.phoneNumber.message}
                     </span>
                  )}
               </div>
               <div className={style.inputGroup}>
                  <label htmlFor="passWord">Password:</label>
                  <input
                     id="passWord"
                     placeholder="Password"
                     type="password"
                     {...register("passWord", {
                        required: {
                           value: true,
                           message: "Password is required",
                        },
                     })}
                  />
                  {errors.passWord && (
                     <span className={style.error}>
                        {errors.passWord.message}
                     </span>
                  )}
               </div>
               <div className={style.action}>
                  <button type="submit">Submit</button>
                  <button type="button" onClick={hanldeSignout}>
                     Cancel
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Profile;
