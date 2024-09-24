import { fetcher } from "@/api/axiosInstance";
import BookFlight from "@/components/home/BookFlight";
import Filter from "@/components/home/Filter";
import Flight from "@/components/home/Flight";
import Services from "@/components/home/Services";
import { calculateDuration, formatTime } from "@/lib/utils";
import { FlightData } from "@/types";
import { Loader2 } from "lucide-react";
import { useMemo, useState } from "react";
import useSWR from "swr";

interface FlightResponse {
  flights: FlightData[];
}

export default function Home() {
  const [scheduleDate, setScheduleDate] = useState(new Date());
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const formattedDate = useMemo(
    () => scheduleDate.toISOString().split("T")[0],
    [scheduleDate]
  );

  const { data, isLoading } = useSWR<FlightResponse>(
    `/flights?scheduleDate=${formattedDate}`,
    fetcher
  );

  console.log(arrival, departure);

  const filteredData = useMemo(() => {
    return data?.flights.filter((flight) => {
      if (departure && arrival) {
        return (
          flight.prefixIATA === departure &&
          flight.route.destinations[0] === arrival
        );
      } else if (departure) {
        return flight.prefixIATA === departure;
      } else if (arrival) {
        return flight.route.destinations[0] === arrival;
      }
      return true;
    });
  }, [data, departure, arrival]);

  return (
    <div className="grid grid-cols-12 bg-homebg gap-6 min-h-screen  px-6">
      <div className="col-span-9">
        <BookFlight
          setScheduleDate={setScheduleDate}
          setDeparture={setDeparture}
          setArrival={setArrival}
        />
        <div className="grid mt-4 grid-cols-8">
          <div className="col-span-6">
            {isLoading ? (
              <center className="mt-4 ">
                <Loader2 className="animate-spin text-primary" size={64} />
              </center>
            ) : filteredData && filteredData.length > 0 ? (
              filteredData.map((flight) => (
                <Flight
                  key={flight.id}
                  from={flight.prefixIATA}
                  to={flight.route.destinations[0]}
                  departure={formatTime(flight.scheduleDateTime)}
                  arrival={formatTime(flight.estimatedLandingTime)}
                  duration={calculateDuration(
                    flight.scheduleDateTime,
                    flight.actualLandingTime
                  )}
                  price={100}
                  airline={flight.flightName}
                  flight={flight}
                />
              ))
            ) : (
              <center className="mt-4 text-red-500">Flight not found</center>
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
