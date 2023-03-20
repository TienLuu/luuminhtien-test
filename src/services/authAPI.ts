import { IUserSignin } from "../type/user.interface";
import fetcher from "./fetcher";

const authAPI = {
   signin: (values: IUserSignin) => {
      return fetcher.post("Users/signin", values);
   },
};

export default authAPI;
