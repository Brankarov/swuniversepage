import { GetAllCharacters } from "@/Data/funtions/FetchData/GetAllCharacters";
import { Character } from "@/interfaces/characterInterface";
import { Suspense } from "react";
import CharacterItemList from "./CharacterItemList";

export default async function CharacterList(){
    const chars : Character[] = await GetAllCharacters();
    return(
        <ul className="bg-slate-900 flex flex-wrap">
            <Suspense fallback={<div> Cargando characters</div>}>
                {chars.map((char)=>(
                   <CharacterItemList key={char.id} {...char}/>
                ))}
            </Suspense>
        </ul>
    );
};