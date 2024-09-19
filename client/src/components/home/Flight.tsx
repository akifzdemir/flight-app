import { Plane } from "lucide-react";
import { Button } from "../ui/Button";

export default function Flight({
  from,
  to,
  departure,
  arrival,
  duration,
  price,
  airline,
}: {
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  airline: string;
}) {
  return (
    <div className="mb-4 border bg-white shadow-md relative rounded-lg">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {from} - {to}
          </h3>
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Departure</p>
            <p className="font-semibold">{departure}</p>
            <p className="text-sm">Airport: MXP</p>
            <span className="text-purple-600 font-bold">Price: ${price}</span>
            <p className="text-gray-500">Round trip</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">{duration} (Nonstop)</p>
            <Plane className="h-6 w-6 mx-auto text-purple-600" />
            <p className="text-sm">{airline}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Arrival</p>
            <p className="font-semibold">{arrival}</p>
            <p className="text-sm">Airport: MAD</p>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <Button
            variant="ghost"
            className="text-purple-600 absolute rounded-t-none -bottom-10 border-purple-600"
          >
            Check the details
          </Button>
          <Button className="absolute h-16 w-48 rounded-b-none rounded-r-none bottom-0 right-0">
            Book Flight
          </Button>
        </div>
      </div>
    </div>
  );
}
