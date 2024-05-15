import Image from "next/image";
import bg from "@/public/Images/background/darthvader.avif"

export default function Home(){
  return (
    <div className="relative">
      <Image src={bg} alt={""}></Image>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-6xl text-white transform rotate-36">Explore the universe</h1>
      </div>
    </div>
  );
}