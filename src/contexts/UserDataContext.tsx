import React, { createContext, useState } from "react";

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string | number;
}

interface IUserContext {
  user?: IUser;
  createUser(user: IUser):void;
  userList?: IUser[];
  updateUserList(user: IUser):void;
}

const UserContext = createContext<IUserContext>({
  user: undefined,
  createUser: () => {},
  userList: undefined,
  updateUserList: () => {}
});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser>();
  
  function createUser(user: IUser) {
    setUser(user);
  };

  const [userList, setUserList] = useState<IUser[]>([])
  
  function updateUserList(user: IUser) {
    setUserList(prevState => [...prevState, user])  
  }

  return (
    <UserContext.Provider value={{user: user, createUser, userList: userList, updateUserList}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };