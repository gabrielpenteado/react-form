import React, { createContext, useState, useEffect } from "react";

import { useToast } from "@chakra-ui/react";

export interface IUser {
  agreements: boolean;
  firstname: string;
  lastname: string;
  email: string;
  password: string | number;
}

interface IUserContext {
  user?: IUser;
  handleCreateUser(user: IUser): void;
  userList?: IUser[];
  handleDeleteUser(user: IUser): void;
}

const UserContext = createContext<IUserContext>({
  user: undefined,
  handleCreateUser: () => { },
  userList: undefined,
  handleDeleteUser: () => { }
});

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const defaultUserList: IUser[] = JSON.parse(localStorage.getItem('users'));

  const [user, setUser] = useState<IUser>();
  const [userList, setUserList] = useState<IUser[]>(defaultUserList || []);

  const toast = useToast();

  function handleCreateUser(newuser: IUser) {
    const newUser = user;

    if (userList.some(userFromList => userFromList.email === newuser.email)) {
      toast({
        title: "User email already exist!",
        status: "warning",
        duration: 2000,
        isClosable: true
      });
    } else {
      setUser(newUser);
      toast({
        title: "Account created!",
        status: "success",
        position: "bottom",
        duration: 2000,
        isClosable: true
      });
      setUserList(prevState => [...prevState, newuser])
    }
  };

  function handleDeleteUser(userToDelete: IUser) {
    const newUserList = userList.filter(user => user !== userToDelete);
    setUserList(newUserList);

    toast({
      title: "User deleted!",
      status: "error",
      position: "bottom",
      duration: 2000,
      isClosable: true
    });
  }

  useEffect(() => {
    if (userList) {
      localStorage.setItem('users', JSON.stringify(userList))
    }
  }, [userList]);

  console.log(userList)

  return (
    <UserContext.Provider value={{ user: user, userList: userList, handleCreateUser, handleDeleteUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };


