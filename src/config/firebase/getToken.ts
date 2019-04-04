import { firebase } from "../";

import { LoginDebug, LoginDebugResult } from "./models/LoginDebug";

const generateInfo = (moduleName: string) => {
  const username = `${process.env.USERNAME}@mega.com.br`;

  let info: LoginDebug = {
    username,
    module: moduleName
  };

  return info;
};

export const getToken = async (moduleName: string) => {
  try {
    const info = generateInfo(moduleName);
    const login = await firebase.functions().httpsCallable("loginDebug")(info);
    const result: LoginDebugResult = login.data as LoginDebugResult;

    return result.token;
  } catch (e) {
    console.log("Error on login: ", e);
  }
};
