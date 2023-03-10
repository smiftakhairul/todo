import { createContext } from "react";
import { User } from "../../types/User";

export type AuthContextType = {
    loading: boolean,
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>(null!);
