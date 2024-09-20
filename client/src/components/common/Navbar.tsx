import { Plane } from "lucide-react";
import { RegisterDialog } from "../auth/RegisterDialog";
import { LoginDialog } from "../auth/LoginDialog";
import { useAuthStore } from "@/stores/authStore";
import { Button } from "../ui/Button";

export default function Navbar() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <header
      className=" 
     top-0 left-0 w-full h-16 flex bg-homebg z-20 flex-row items-center justify-between px-12"
    >
      <div className="flex flex-row items-center ">
        <Plane size={32} strokeWidth={2} />
      </div>
      <div className="flex flex-row items-center gap-3">
        {isLoggedIn ? (
          <Button onClick={() => useAuthStore.getState().logout()}>
            Logout
          </Button>
        ) : (
          <>
            <LoginDialog />
            <RegisterDialog />
          </>
        )}
      </div>
    </header>
  );
}
