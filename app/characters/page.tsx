"use client"
import Image from "next/image";
import React from "react";
import Carousel from "@/components/Carousel";
import { Character} from "@/interfaces/characterInterface";

async function fetchCharacters() {
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json();
    return data.results;
}

export default async function CharacterPage(){
    const characters: Character[] = await fetchCharacters();

    return (
        <div className="bg-gray-900">
            <Carousel>

                {characters.map((char)=>(

                    <div key={char.id} className="p-4">

                        <div className="max-w-xs bg-slate-900 rounded-sm overflow-hidden shadow-lg mx-1 my-8 p-4 justify-center flex flex-col items-center ">
                            
                            <h1 className="text-2xl text-semibold mt-4">{char.name}</h1>
                           
                            <Image src={char.img || ""} alt="character img" height={150} width={150} className="bg-slate-800 w-48 h-48 object-cover my-4"/>
                           
                            <h2 className="text-center flex justify-center">
                                Eyes Color: {char.eye_color}
                            </h2>
                             {char.gender !== "unknow" && char.gender !== "n/a" &&( 
                            <h2 className="text-center justify-center">Gender: {char.gender}</h2>
                            )}
                        </div>

                    </div>

                ))}

            </Carousel>
        </div>
    );
}