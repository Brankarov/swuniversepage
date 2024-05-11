import Image from "next/image";
import { Character } from "@/interfaces/characterInterface";

async function fetchCharacters() {
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json();
    return data.results;
}

export default async function CharacterPage(){
    const characters: Character[] = await fetchCharacters();
    return (
        <div className="carousel relative overflow-hidden bg-gray-900">
            <ul id="slider" className="flex trasnsition-transform duration-300 ease-in-out">
                {characters.map((char)=>(
                    <li key={char.id} className="mx-1 my-8">
                        <div className="max-w-xs bg-slate-900 rounded-sm overflow-hidden shadow-lg mx-1 my-8 p-4 justify-center flex flex-col items-center ">
                            <h1 className="text-2x1 text-semibold mt-4">{char.name}</h1>
                            <Image src={char.img} alt="character image" height={150} width={150} className="bg-slate-800 w-48 h-48 objetc.cover my-4"/>
                            <h2 className="text-center felx justify-center">Eyes Color: {char.eye_color}</h2>
                            <h2 className="text-center justify-center">Gender: {char.gender}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}