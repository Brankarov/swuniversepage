import { GetAllCharacters } from "@/Data/funtions/FetchData/GetAllCharacters";
import CharacterList from "@/components/CharacterList";
import { Character } from "@/interfaces/characterInterface";

export default async function CharacterPage() {
  const chars : Character[] = await GetAllCharacters();
  return (
    <div className="bg-gray-100">
       <CharacterList characters={chars}/>
    </div>
  );
}