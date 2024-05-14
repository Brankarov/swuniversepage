import { Character } from "@/interfaces/characterInterface";
import Image from "next/image";
import { Suspense } from "react";
import SkeletonCard from "./Skeletons/skeletonCharacterLiest";
import React, {useState} from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterItemList( character : Character){
    return(
        <Suspense fallback={<SkeletonCard />}>
            <li key={character.id} className="w-1/3 md:w-1/4 lg:w-1/5 p-2 rounded-md">
               <CharacterCard {...character}/>
            </li>
        </Suspense>
    );
};