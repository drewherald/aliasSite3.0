import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const useLogin = () => {
  const [error, setError] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { dispatch } = useAuthContext();


  //login function
  const login = async (email: string | FormDataEntryValue | null, password:string | FormDataEntryValue | null) => {
    setIsLoading(true);
    setError(null);

  const response = await fetch(
     "http://localhost:3000/api/user/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

        const userJson = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(userJson.error);
    }
    if (response.ok) {
      //save user
      localStorage.setItem("user", JSON.stringify(userJson));

      //update authContext
      dispatch({ type: "LOGIN", payload: userJson });

      setIsLoading(false);
    }
    
  };

  const loginOauth = async (email: string | FormDataEntryValue | null, userName: string,  password:string | FormDataEntryValue | null) => {
    setIsLoading(true);
    setError(null);

  const response = await fetch(
     "http://localhost:3000/api/user/loginoauth",
      {
        method: "POST",
        body: JSON.stringify({ email, userName, password }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

        const userJson = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(userJson.error);
    }
    if (response.ok) {
      //save user
      localStorage.setItem("user", JSON.stringify(userJson));

      //update authContext
      dispatch({ type: "LOGIN", payload: userJson });

      setIsLoading(false);
    }
    
  };



  return { login, loginOauth, isLoading, error };
};
