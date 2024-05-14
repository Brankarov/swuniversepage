import Image from "next/image";
import { Character } from '../../../../interfaces/characterInterface';

export default async function CharacterDetailPage(){
    const character : Character;
    return(
     <div className="flex flex-wrap">
            <Image src={""} alt={""}/>
            <div>
                <h1 className="text-semibold text-lg">{character.name}</h1>
                <p className="text-sm">Year:{character.birthyear}</p>
                <p className="text-sm">Eyes: {character.eye_color}</p>
                {character.gender &&(<p className="text.sm">Gender: {character.gender}</p>)}
                <p className="text-sm">Hair: {character.haircolor}</p>
                <p className="text-sm">Mass: {character.mass}</p>
                <p className="text-sm">Skin: {character.skincolor}</p>
            </div>
     </div>
    );
}