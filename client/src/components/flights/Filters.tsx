import { Star } from "lucide-react";
import { Button } from "../ui/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

export default function Filters({
  times,
  airlines,
  stops,
}: {
  times: string[];
  airlines: number[];
  stops: string[];
}) {
  return (
    <div className="flex flex-row w-full border-b shadow-lg h-16 items-center mb-4">
      <div className="flex flex-row items-center gap-4 p-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Times" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Times</SelectLabel>
              {times.map((time, index) => (
                <SelectItem key={index} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Airlines" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Airlines</SelectLabel>
              {airlines.map((airline, index) => (
                <SelectItem key={index} value={airline?.toString()}>
                  {airline}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Stops" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Stops</SelectLabel>
              {stops.map((stop, index) => (
                <SelectItem key={index} value={stop}>
                  {stop}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
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
