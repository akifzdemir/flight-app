import { FlightData } from "@/types";
import { calculateDuration, formatTime } from "@/lib/utils";
import { Button } from "../ui/Button";

export default function BookedFlight({ flight }: { flight: FlightData }) {
  return (
    <div
      className="mb-4 p-4 flex flex-row gap-4 items-center justify-around
     shadow-md bg-white border rounded-lg"
    >
      <div className="flex flex-row items-center gap-6">
        <div className="text-5xl">🔺</div>
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-thin">
            {formatTime(flight.scheduleDateTime)} -{" "}
            {formatTime(flight.estimatedLandingTime)}
          </span>
          <span className="text-2xl">Airline</span>
          <span className="underline text-blue-600">Flight Details</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col">
          <span className="text-lg font-semibold">Non-Stop</span>
          <span className="text-lg font-thin">
            {calculateDuration(
              flight.scheduleDateTime,
              flight.estimatedLandingTime
            )}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">
            {flight.prefixICAO} to {flight.route.destinations[0]}
          </span>
          <span className="text-sm text-gray-600">
            {" "}
            {flight.aircraftType.iataSub} {flight.airlineCode}
          </span>
        </div>
      </div>

      <div className="h-full flex flex-row items-center gap-4">
        <Button variant={"outline"} className="h-32">
          $156
        </Button>
        <Button variant={"outline"} className="h-32">
          $156
        </Button>
        <Button variant={"outline"} className="h-32">
          $156
        </Button>
      </div>
    </div>
  );
}
