import { PillProps } from "@/interfaces";
import Image from "next/image";

const Pill: React.FC<PillProps> = ({ title, image }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-4 py-1 mt-2 rounded-full  border border-gray-400 text-sm text-gray-800 hover:bg-gray-300 transition">
      {image && <Image src={image} alt={title} width={12} height={12} />}
      <p>{title}</p>
    </button>
  );
};

export default Pill;