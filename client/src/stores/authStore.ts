import { create } from "zustand";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface AuthState {
  user: UserPayload;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface UserPayload {
  id: string;
  email: string;
  name: string;
}

interface DecodedToken extends JwtPayload {
  user: UserPayload;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: JSON.parse(
    sessionStorage.getItem("user") ||
      JSON.stringify({
        id: "",
        email: "",
        name: "",
      })
  ),
  isLoggedIn: sessionStorage.getItem("token") ? true : false,
  login: (token: string) => {
    const decode = jwtDecode<DecodedToken>(token);
    set({ isLoggedIn: true });
    set({ user: decode.user });
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(get().user));
  },
  logout: () => {
    set({ isLoggedIn: false });
    set({
      user: {
        id: "",
        email: "",
        name: "",
      },
    });
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
  },
}));
