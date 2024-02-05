import { useEffect, useState } from "react";
type UseAuthDataReturnType = [
  boolean,
  (value: boolean, action: "login" | "logout") => null
];

const useAuthData = (): UseAuthDataReturnType => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    const isAuth: boolean = JSON.parse(localStorage.getItem("auth")!);

    if (isAuth) {
      setAuth(true);
    }
  }, []);

  // function to login and logout
  const setAuthData = (value: boolean, action: "login" | "logout") => {
    if (action === "login") {
      setAuth(true);
      localStorage.setItem("auth", JSON.stringify(value));
    } else if (action === "logout") {
      localStorage.removeItem("auth");
    }
    return null;
  };

  return [auth, setAuthData];
};
export default useAuthData;
