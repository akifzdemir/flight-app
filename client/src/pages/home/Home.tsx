import { fetcher } from "@/api/axiosInstance";
import BookFlight from "@/components/home/BookFlight";
import Filter from "@/components/home/Filter";
import Flight from "@/components/home/Flight";
import Services from "@/components/home/Services";
import { calculateDuration, formatTime } from "@/lib/utils";
import { FlightData } from "@/types";
import { Loader2 } from "lucide-react";
import useSWR from "swr";

interface FlightResponse {
  flights: FlightData[];
}

export default function Home() {
  const { data, isLoading } = useSWR<FlightResponse>("/flights", fetcher);

  return (
    <div className="grid grid-cols-12 bg-homebg gap-6 min-h-screen  px-6">
      <div className="col-span-9">
        <BookFlight />
        <div className="grid mt-4 grid-cols-8">
          <div className="col-span-6">
            {isLoading ? (
              <center className="mt-4 ">
                <Loader2 className="animate-spin text-primary" size={64} />
              </center>
            ) : (
              data?.flights.map((flight) => (
                <Flight
                  key={flight.id}
                  from={flight.prefixIATA}
                  to={flight.route.destinations[0]}
                  departure={formatTime(flight.scheduleDateTime)}
                  arrival={formatTime(flight.actualLandingTime)}
                  duration={calculateDuration(
                    flight.scheduleDateTime,
                    flight.actualLandingTime
                  )}
                  price={100}
                  airline={flight.flightName}
                />
              ))
            )}
          </div>
          <div className="col-span-2">
            <Filter />
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <Services />
      </div>
    </div>
  );
}
