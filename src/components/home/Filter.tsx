import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";

export default function Filter() {
  return (
    <div className="mb-4">
      <div className="p-4">
        <h3 className="font-semibold mb-2">Sort by:</h3>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Lowest Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lowest">Lowest Price</SelectItem>
            <SelectItem value="highest">Highest Price</SelectItem>
            <SelectItem value="duration">Duration</SelectItem>
          </SelectContent>
        </Select>

        <h3 className="font-semibold mt-4 mb-2">Arrival Time</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="morning" className="mr-2" />
            <label htmlFor="morning">5:00 AM - 11:59 AM</label>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="afternoon" className="mr-2" />
            <label htmlFor="afternoon">12:00 PM - 5:59 PM</label>
          </div>
        </div>

        <h3 className="font-semibold mt-4 mb-2">Stops</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input type="checkbox" id="nonstop" className="mr-2" />
            <label htmlFor="nonstop">Nonstop</label>
            <span className="ml-auto">$230</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="1stop" className="mr-2" />
            <label htmlFor="1stop">1 Stop</label>
            <span className="ml-auto">$230</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="2stops" className="mr-2" />
            <label htmlFor="2stops">2+ Stops</label>
            <span className="ml-auto">$230</span>
          </div>
        </div>

        <h3 className="font-semibold mt-4 mb-2">Airlines Included</h3>
        <div className="space-y-2">
          {[
            "Alitalia",
            "Lufthansa",
            "Air France",
            "Brussels Airlines",
            "Air Italy",
            "Siberia",
          ].map((airline) => (
            <div key={airline} className="flex items-center">
              <input type="checkbox" id={airline} className="mr-2" />
              <label htmlFor={airline}>{airline}</label>
              <span className="ml-auto">$230</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
