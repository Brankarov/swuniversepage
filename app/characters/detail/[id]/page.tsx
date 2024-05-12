
import Image from "next/image";
import { Character } from '@/interfaces/characterInterface';
import { FetchCharacterData } from "@/Data/funtions/FetchCharacterData";

// async function FetCharacterDetail(){
//     const response =  await fetch('https://swapi.dev/api/people/1');
//     const data = response.json();
//     console.log(data);
//     return data;
// }

export default async function CharacterDetailPage(){
    // const data = await FetCharacterDetail();
    const character : Character = await FetchCharacterData('https://swapi.dev/api/people/1');
    return(
       <div className="w-100 h-100 flex border-solid bg-yellow-600 p-2 rounded-sm items-center justify-center">
            <div className="flex border-solid bg-slate-800 p-1 rounded-lg items-center justify-center">
                <Image src={""} alt="character image" className="w-20 h-20 rounded-full"/>
                <div className="block">
                    <h1 className="text-semibold text-gl">{character.name}</h1>
                    <h3 className="text-sm">{character.eye_color} eyes</h3>
                    <h3 className="text-sm">{character.birthyear}</h3>
                    <h3 className="text-sm">{character.haircolor} hair</h3>
                    <h3 className="text-sm">Height of{character.height}</h3>
                    <h3 className="text-sm">{character.skincolor} skin</h3>
                    <h3 className="text-sm">Mass of {character.mass}</h3>
                </div>
            </div>
       </div>
    );
}