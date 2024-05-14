import { Character } from "@/interfaces/characterInterface";
import Image from "next/image";
import { Suspense } from "react";
import SkeletonCard from "./Skeletons/skeletonCharacterLiest";

export default function CharacterItemList( character : Character){
    return(
        <Suspense fallback={<SkeletonCard />}>
            <li key={character.id} className="w-1/3 md:w-1/4 lg:w-1/5 p-2 rounded-md">
                <div className="bg-slate-700 p-1">
                    <Image src={character.img || ""} alt={character.name || ""} width={75} height={75} className="p-1"/>
                </div>
                <div className="flex-1 pl-2">
                    <h1 className="text-lg text-semibold">{character.name}</h1>
                    <p className="text-sm">Eyes: {character.eye_color}</p>
                    {character.gender!== "n/a" && character.gender !== "unknow" && (<p>Gender: {character.gender} </p>) }
                </div>
            </li>
        </Suspense>
    );
};