import BookFlight from "@/components/home/BookFlight";
import Filter from "@/components/home/Filter";
import Flight from "@/components/home/Flight";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6 min-h-screen  px-6">
      <div className="col-span-9">
        <BookFlight />
        <div className="grid mt-4 grid-cols-8">
          <div className="col-span-6">
            <Flight
              from="Milano"
              to="Madrid"
              departure="8:30 PM"
              arrival="10:25 PM"
              duration="2h 25m"
              price={234}
              airline="Alitalia"
            />
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
