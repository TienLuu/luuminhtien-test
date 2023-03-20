import { IUserUpdate } from "../type/user.interface";
import fetcher from "./fetcher";

const userAPI = {
   getUser: (keyword: string | number) => {
      return fetcher("/Users/getUser", {
         params: {
            keyword,
         },
      });
   },

   updateUser: (values: IUserUpdate) => {
      return fetcher.put("/Users/editUser", values);
   },
};

export default userAPI;
