import React, { createContext, useState, useEffect } from "react";

import { useToast } from "@chakra-ui/react";

export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string | number;
}

interface IUserContext {
  user?: IUser;
  createUser(user: IUser): void;
  userList?: IUser[];
  updateUserList(user: IUser): void;
  deleteUser(user: IUser): void;
}

const UserContext = createContext<IUserContext>({
  user: undefined,
  createUser: () => { },
  userList: undefined,
  updateUserList: () => { },
  deleteUser: () => { }
});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser>();

  const toast = useToast();

  function createUser(user: IUser) {
    setUser(user);
  };

  const defaultUserList: IUser[] = JSON.parse(localStorage.getItem('users'));

  const [userList, setUserList] = useState<IUser[]>(defaultUserList || []);

  function updateUserList(user: IUser) {
    setUserList(prevState => [...prevState, user])
  }

  function deleteUser(userToDelete: IUser) {
    const newUserList = userList.filter(user => user !== userToDelete);
    setUserList(newUserList);

    toast({
      title: "User deleted!",
      status: "error",
      duration: 2000,
      isClosable: true
    });
  }

  useEffect(() => {
    if (userList) {
      localStorage.setItem('users', JSON.stringify(userList))
    }
  }, [userList]);

  return (
    <UserContext.Provider value={{ user: user, createUser, userList: userList, updateUserList, deleteUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };