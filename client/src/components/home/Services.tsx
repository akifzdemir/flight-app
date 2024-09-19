import { Car, Hotel, TreePalm } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Car Rentals",
      image: "/car.jpg",
      icon: <Car size={32} strokeWidth={2} />,
    },
    {
      title: "Hotels",
      image: "/hotel.jpg",
      icon: <Hotel size={32} strokeWidth={2} />,
    },
    {
      title: "Travel Packages",
      image: "/travel.jpg",
      icon: <TreePalm size={32} strokeWidth={2} />,
    },
  ];
  return (
    <>
      {services.map((service) => (
        <div
          className="mb-4 overflow-hidden rounded-2xl shadow-2xl "
          key={service.title}
        >
          <div className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-4">
              <div className="text-white text-center">
                {service.icon}
                <h3 className="font-bold mt-2">{service.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
