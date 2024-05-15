import CharacterMapper from "@/Data/funtions/CharacterMapper";
import { GetAllCharacters } from "@/Data/funtions/FetchData/GetAllCharacters";
import CharacterList from "@/components/CharacterList";
import { Character } from "@/interfaces/characterInterface";
import { rawCharacter } from "@/interfaces/rawCharacterInterface";

export default async function CharacterPage() {
  const charsRaw : rawCharacter[] = await GetAllCharacters();
  const chars : Character[] = CharacterMapper(charsRaw);
  return (
    <div className="bg-gray-100">
       <CharacterList characters={chars}/>
    </div>
  );
}