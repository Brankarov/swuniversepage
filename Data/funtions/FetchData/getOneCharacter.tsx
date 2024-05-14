import { Character } from "@/interfaces/characterInterface";
import { FetchCharacterData } from "../FetchCharacterData";

export default async function getOneCharacter(id :number) {
    const url : string = `https://swapi.dev/api/people/${id}`;
    const character : Character = await FetchCharacterData(url);
    
};