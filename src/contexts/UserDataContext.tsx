import React, { createContext, useState, useEffect } from "react";

import { useToast } from "@chakra-ui/react";

import { db } from "../firebase"
import { ref, set, onValue, remove } from "firebase/database";

import { uid } from "uid";

export interface IUser {
  agreements: boolean;
  firstname: string;
  lastname: string;
  email: string;
  password: string | number;
  uuid: string | number;
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

function sendToFirabase(user: IUser) {
  const uuid = uid();
  set(ref(db, `/${uuid}`), {
    agremments: user.agreements,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    uuid: uuid
  })
}

const UserProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser>();
  const [userList, setUserList] = useState<IUser[]>([]);

  const toast = useToast();

  function handleCreateUser(newuser: IUser) {
    if (userList.some(userFromList => userFromList.email === newuser.email)) {
      toast({
        title: "User email already exist!",
        status: "warning",
        duration: 2000,
        isClosable: true
      });

    } else {
      setUser(newuser);
      sendToFirabase(newuser);

      toast({
        title: "Account created!",
        status: "success",
        position: "bottom",
        duration: 2000,
        isClosable: true
      });
    }
  };

  function handleDeleteUser(userToDelete: IUser) {
    remove(ref(db, `/${userToDelete.uuid}`));

    toast({
      title: "User deleted!",
      status: "error",
      position: "bottom",
      duration: 2000,
      isClosable: true
    });
  }


  function realDatabase() {
    onValue(ref(db), (snapshot: any) => {
      setUserList([])
      const data = snapshot.val();
      if (data !== null) {
        Object.values<IUser>(data).map((user) => {
          setUserList(prevState => [...prevState, user])
        });
      }
    });
  }

  useEffect(() => {
    realDatabase();
  }, []);


  return (
    <UserContext.Provider value={{ user: user, userList: userList, handleCreateUser, handleDeleteUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };


