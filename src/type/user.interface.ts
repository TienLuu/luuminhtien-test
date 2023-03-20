export interface IUser {
   id: number | string;
   email: string;
   name: string;
   phoneNumber: string;
}

export interface IUserSignin {
   email: string;
   passWord: string;
}

export interface IUserLS extends IUser {
   accessToken: string;
}

export interface IUserInfos extends IUserLS {
   avatar: string;
   userId: number;
}

export interface IUserUpdate extends IUser {
   passWord: string;
}
