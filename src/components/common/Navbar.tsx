import { Plane } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header
      className="fixed border-b shadow-xl
     top-0 left-0 w-full h-16 flex flex-row items-center justify-between px-12"
    >
      <div className="flex flex-row items-center ">
        <Plane size={32} strokeWidth={2} />
      </div>
      <div className="flex flex-row items-center gap-3">
        <Button variant={"outline"}>Login</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
}
