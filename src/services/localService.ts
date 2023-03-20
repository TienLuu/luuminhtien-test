import { IUserLS } from "../type/user.interface";

const USER = "user";

const localService = {
   user: {
      set: (data: object) => {
         localStorage.setItem(USER, JSON.stringify(data));
      },
      get: (): Partial<IUserLS> => {
         return JSON.parse(localStorage.getItem(USER) || "{}");
      },
      remove: () => {
         localStorage.removeItem(USER);
      },
   },
};

export default localService;
