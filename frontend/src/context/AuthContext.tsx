import React, {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
  Dispatch,
} from "react";

// Define the shape of your user object
interface User {
  id: string;
  userName: string;
  email: string;
  tier: string
  // Add other fields as needed
}

// Define the state shape
interface AuthState {
  user: User | null;
}

// Define the action types
type AuthAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" };

// Define the context shape
interface AuthContextType extends AuthState {
  dispatch: Dispatch<AuthAction>;
}

// Create the context with a default (nullable) value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props for the provider
interface AuthProviderProps {
  children: ReactNode;
}

// Reducer function
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

// Provider component
const AuthContextProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const user: User | null = userData ? JSON.parse(userData) : null;

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
