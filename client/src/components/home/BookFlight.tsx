import { Button } from "../ui/Button";
import { CalendarDays, Plane, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { Input } from "../ui/Input";
import useSWR from "swr";
import { fetcher } from "@/api/axiosInstance";
import { useEffect, useState } from "react";
import { FlightData } from "@/types";

interface FlightResponse {
  flights: FlightData[];
}

export default function BookFlight({
  setScheduleDate,
  setDeparture,
  setArrival,
}: {
  setScheduleDate: (date: Date) => void;
  setDeparture: (departure: string) => void;
  setArrival: (arrival: string) => void;
}) {
  const { data } = useSWR<FlightResponse>("flights", fetcher);
  const [destinations, setDestinations] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setDestinations((prev) => [
        ...new Set([
          ...prev,
          ...data.flights.map((flight) => flight.prefixIATA),
        ]),
      ]);
      setDestinations((prev) => [
        ...new Set([
          ...prev,
          ...data.flights.map((flight) => flight.route.destinations[0]),
        ]),
      ]);
    }
  }, [data]);

  const [departureDate, setDepartureDate] = useState(new Date());
  const [departureCountry, setDepartureCountry] = useState("");
  const [arrivalCountry, setArrivalCountry] = useState("");

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
        <div className="flex flex-1 flex-row items-center gap-2">
          <div className="relative flex-1">
            <span className="absolute text-primary inset-y-0 left-0 flex items-center pl-3">
              <PlaneTakeoff />
            </span>
            <select
              className="flex h-10 w-full rounded-md rounded-r-none border border-input
             bg-background px-12 py-2
              text-sm ring-offset-background
                 placeholder:text-muted-foreground cursor-pointer"
              name=""
              onChange={(e) => setDepartureCountry(e.target.value)}
            >
              <option value=""></option>
              {destinations?.map((destination: string, index: number) => (
                <option key={index} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
          </div>

          <div className="relative flex-1">
            <span className="absolute text-primary inset-y-0 left-0 flex items-center pl-3">
              <PlaneLanding />
            </span>
            <select
              className="flex h-10 w-full rounded-md rounded-l-none border border-input
             bg-background px-12 py-2
              text-sm ring-offset-background
                 placeholder:text-muted-foreground cursor-pointer"
              name=""
              onChange={(e) => setArrivalCountry(e.target.value)}
            >
              <option value=""></option>
              {destinations?.map((destination: string, index: number) => (
                <option key={index} value={destination}>
                  {destination}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-1 flex-row items-center gap-2">
          <div className="relative">
            <span className="absolute text-primary inset-y-0 left-0 flex items-center pl-3">
              <CalendarDays />
            </span>
            <Input
              type="datetime-local"
              className="rounded-l-full px-10 py-2 "
              onChange={(e) => setDepartureDate(new Date(e.target.value))}
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
      <Button
        className="w-1/3"
        onClick={() => {
          setScheduleDate(departureDate);
          setDeparture(departureCountry);
          setArrival(arrivalCountry);
        }}
      >
        Show Flights
      </Button>
    </div>
  );
}
