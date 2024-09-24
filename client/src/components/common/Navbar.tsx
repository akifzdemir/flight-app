import { Earth, Plane, Tag, User } from "lucide-react";
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
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <header
      className=" 
     top-0 left-0 w-full h-16 flex bg-homebg z-20 flex-row items-center justify-between px-12"
    >
      <Link
        to={"/"}
        className="flex flex-row gap-2 text-2xl font-bold text-primary items-center "
      >
        <Plane size={32} strokeWidth={2} /> PLANE SCAPE
      </Link>
      <div className="flex flex-row items-center gap-3">
        <span className="flex flex-row items-center gap-2 text-primary">
          Deals <Tag />
        </span>
        <span className="flex flex-row items-center gap-2 text-primary">
          Discover <Earth />
        </span>
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
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="rounded-full">
          <User /> {user?.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={8}>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to={`/flights/${user.id}`}>My Flights</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
