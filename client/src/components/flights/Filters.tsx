import { Star } from "lucide-react";
import { Button } from "../ui/Button";

export default function Filters() {
  const filters = [
    { name: "Times" },
    { name: "Stops" },
    { name: "Airlines" },
    { name: "Airports" },
    { name: "Amenities" },
  ];
  return (
    <div className="flex flex-row w-full border-b shadow-lg h-16 items-center mb-4">
      {
        <div className="flex flex-row items-center gap-4 p-4">
          {filters.map((filter, index) => (
            <Button key={index} variant="ghost" className="text-gray-600">
              {filter.name}
            </Button>
          ))}
        </div>
      }
      <Button variant={"ghost"} className="text-blue-500">
        Edit Search
      </Button>
      <div className="flex items-center space-x-2">
        {[2, 3, 3, 3, 3].map((stars, index) => (
          <div key={index} className="flex ">
            {[...Array(stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-gray-400" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
