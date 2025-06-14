import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white text-black border-top px-12 py-4 gap-10">
        <div>
         
          <p>
            ALX is a platform where travelers can discover and book unique, comfortable and affordable lodging options worldwide. From cozy city apartments and tranquil coutryside retreats to exotic beachside villas. ALX connects you with the perfect place to stay for any trip.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="flex flex-col gap-3">
            <Link href="/rooms">Rooms</Link>
            <Link href="/mansion">Mansion</Link>
            <Link href="/countryside">Countryside</Link>
            <Link href="/beachfront">Beachfront</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/forest">Forest</Link>
            <Link href="/mountains">Mountains</Link>
            <Link href="/desert">Desert</Link>
            <Link href="/islands">Islands</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/forest">Forest</Link>
            <Link href="/mountains">Mountains</Link>
            <Link href="/desert">Desert</Link>
            <Link href="/islands">Islands</Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center  bg-white text-black  px-12 py-4">
        <p>&copy; 2023 Your Company</p>
      </div>
    </>
  );
}