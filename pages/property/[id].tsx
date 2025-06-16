import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="">
        {/* Main content - Property details and reviews */}
        <div className="">
          <PropertyDetail property={property} />
        </div>
        
        {/* Sidebar - Booking section */}
        <div className="">
          <div className="w-96">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
}