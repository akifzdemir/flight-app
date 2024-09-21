import { Plane, User } from "lucide-react";
import { RegisterDialog } from "../auth/RegisterDialog";
import { LoginDialog } from "../auth/LoginDialog";
import { useAuthStore } from "@/stores/authStore";
import { Button } from "../ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropwonMenu";

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
          <UserDropdown />
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

const UserDropdown = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="rounded-full">
          <User /> {user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8}>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem onClick={logout} className="cursor-pointer">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
