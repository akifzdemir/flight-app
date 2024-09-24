import { fetcher } from "@/api/axiosInstance";
import BookedFlight from "@/components/flights/BookedFlight";
import Filters from "@/components/flights/Filters";
import { formatTime } from "@/lib/utils";
import { FlightData } from "@/types";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface FlightResponse {
  flights: FlightData[];
}
export default function Flights() {
  const { data } = useSWR<FlightResponse>("/flights/user", fetcher);
  const [times, setTimes] = useState<string[]>([]);
  const [airlines, setAirlines] = useState<number[]>([]);
  const [stops, setStops] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setAirlines([
        ...new Set(data.flights.map((flight) => flight.airlineCode)),
      ]);
      setTimes([
        ...new Set(
          data.flights.map((flight) => formatTime(flight.scheduleDateTime))
        ),
      ]);
      setStops([...new Set(data.flights.map((flight) => flight.prefixIATA))]);
    }
  }, [data]);

  return (
    <div className="min-h-screen bg-homebg flex flex-col">
      <Filters times={times} airlines={airlines} stops={stops} />

      <div className="flex p-4 justify-between items-center mb-4">
        <select className="border rounded p-2">
          <option>Sort by: Recommended</option>
        </select>
        <div className="text-sm text-gray-600">Avg Fare: $225</div>
      </div>
      <div className="px-4">
        {data?.flights?.map((flight) => (
          <BookedFlight key={flight._id} flight={flight} />
        ))}
      </div>
    </div>
  );
}
