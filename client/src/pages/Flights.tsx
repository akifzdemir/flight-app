import { fetcher } from "@/api/axiosInstance";
import BookedFlight from "@/components/flights/BookedFlight";
import Filters from "@/components/flights/Filters";
import { FlightData } from "@/types";
import useSWR from "swr";

interface FlightResponse {
  flights: FlightData[];
}
export default function Flights() {
  const { data } = useSWR<FlightResponse>("/flights/user", fetcher);
  return (
    <div className="min-h-screen bg-homebg flex flex-col">
      <Filters />

      <div className="flex p-4 justify-between items-center mb-4">
        <select className="border rounded p-2">
          <option>Sort by: Recommended</option>
        </select>
        <div className="text-sm text-gray-600">Avg Fare: $225</div>
      </div>
      <div className="px-4">
        {data?.flights?.map((flight) => (
          <BookedFlight key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
}
