import { Button } from "../ui/Button";
import { CalendarDays, Plane, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Input } from "../ui/Input";

export default function BookFlight() {
  return (
    <div className="flex flex-col bg-white gap-4 border rounded-2xl shadow-md py-10 px-4">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl flex flex-row items-center gap-2 uppercase font-bold">
          <Plane size={32} />
          Book your flight
        </h1>
        <div>
          <Button className="rounded-r-none rounded-l-full">Round Trip</Button>

          <Button variant="outline" className="rounded-l-none rounded-r-full">
            One Way
          </Button>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-6">
        <div className="flex flex-row items-center gap-2">
          <div className="relative">
            <span className="absolute text-primary inset-y-0 left-0 flex items-center pl-3">
              <PlaneTakeoff />
            </span>
            <Input type="text" className="rounded-l-full px-10 py-2 " />
          </div>
          <div className="relative">
            <span className="absolute text-primary inset-y-0 left-0 flex items-center pl-3">
              <PlaneLanding />
            </span>
            <Input type="text" className="rounded-r-full px-10 py-2 " />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="relative">
            <span className="absolute text-primary inset-y-0 left-0 flex items-center pl-3">
              <CalendarDays />
            </span>
            <Input
              type="datetime-local"
              className="rounded-l-full px-10 py-2 "
            />
          </div>
          <div className="relative">
            <span className="absolute text-primary inset-y-0 left-0 flex items-center pl-3">
              <CalendarDays />
            </span>
            <Input
              type="datetime-local"
              className="rounded-r-full px-10 py-2 "
            />
          </div>
        </div>
      </div>
      <Button className="w-1/3">Show Flights</Button>
    </div>
  );
}
