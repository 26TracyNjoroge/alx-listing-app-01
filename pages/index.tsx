import Pill from "@/components/Pill";
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function index() {
  const pills = [
    "Top Villa",
    "Free Reschedule",
    "Book Now, Pay Later",
    "Self Checkin",
    "Instant book",
  ];
  const propertyLinstings = PROPERTYLISTINGSAMPLE;
  return (
    <>
      <section className="bg-[url('/assets/images/Image-1.png')] bg-cover bg-center rounded-xl text-center text-white py-14 px-4 mb-3">
        <h1 className="text-6xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <h2 className="text-l">
          The best prices for over 2 million properties worldwide.
        </h2>
      </section>
      <section className="flex justify-between bg-white rounded-4xl text-white">
        {pills.map((pill, index) => (
          <Pill key={index} title={pill} />
        ))}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-3 mt-5 mb-12">
        {propertyLinstings.map((property, index) => (
          <Card key={index} {...property} />
        ))}
      </section>
    </>
  );
}