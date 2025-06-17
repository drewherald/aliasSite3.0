import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    //remove from localStorage
    localStorage.removeItem("user");

    //global context logout
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
