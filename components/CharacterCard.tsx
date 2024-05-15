"use client"
import { Character } from "@/interfaces/characterInterface";
import Image from "next/image";
import { useState } from "react";
import femaleimg from "@/public/Images/char_img.webp";
import maleimg from "@/public/Images/film_img.avif";
import androidimg from "@/public/Images/android.avif";

export default function CharacterCard(character: Character){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div onClick={ () =>setIsOpen(!isOpen)}>
           {isOpen === false &&(
               <div>
                <div className="bg-slate-800 p-1 flex ">
                    <div className="flex items-center">
                        <Image src={character.gender === "male" ? maleimg : character.gender === "female" ? femaleimg : androidimg} alt={character.name || ""} width={100} height={100} className="p-1 p-1 border border-yellow-500"/>
                        <div className="flex-1 pl-2">
                            <h1 className="text-lg text-semibold">{character.name}</h1>
                            <p className="text-sm">Eyes: {character.eye_color}</p>
                            {character.gender!== "n/a" && character.gender !== "unknow" && (<p>Gender: {character.gender} </p>) }
                        </div>
                    </div>
                </div>
            </div>
            )}
            { isOpen === true &&
                (<div className="">
                    <h1 className="text-semibold text-lg">{character.name}</h1>
                    <p className="text-sm">Year:{character.birthyear}</p>
                    <p className="text-sm">Eyes: {character.eye_color}</p>
                    {character.gender &&(<p className="text.sm">Gender: {character.gender}</p>)}
                    <p className="text-sm">Hair: {character.haircolor}</p>
                    <p className="text-sm">Mass: {character.mass}</p>
                    <p className="text-sm">Skin: {character.skincolor}</p>
                </div>)}
        </div>
    );
};