import React from "react";
import { useRouter } from "expo-router";
import { useStorageState } from "../SessionManager/useStorageState";
import { setSession } from "../SessionManager/sessionManager";
import authServices from "@/API/Services/auth.services";

interface AuthContextType {
  signOut: () => void;
  guestSignOut: () => void;
  session?: string | null;
  isLoading: boolean;
  setSession: (value: string | null) => void;
  getSession: () => Promise<string | null>;
  getAuthSession: () => Promise<string | null>;
}

const AuthContext = React.createContext<AuthContextType>({
  signOut: () => {},
  guestSignOut: () => {},
  session: null,
  isLoading: false,
  setSession: () => {},
  getSession: () => Promise.resolve(null),
  getAuthSession: () => Promise.resolve(null),
});

export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setStorageSession] = useStorageState("session");
  const router = useRouter();

  // Sync the session state with the singleton
  React.useEffect(() => {
    setSession(session);
  }, [session]);

  const getSession = async (): Promise<string | null> => {
    return await getSession();
  };

  return (
    <AuthContext.Provider
      value={{
        signOut: () => {
          setStorageSession(null);
        },
        guestSignOut: () => {
          setStorageSession(null);
          router.replace("/login");
        },
        session,
        isLoading,
        setSession: (value) => {
          console.log(value);
          
          setStorageSession(value);
          setSession(value);
          // authServices.setToken(value);
        },
        getSession,
        getAuthSession: authServices.getToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
