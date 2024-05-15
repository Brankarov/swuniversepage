import { Character } from "@/interfaces/characterInterface";
import { rawCharacter } from "@/interfaces/rawCharacterInterface";


export async function GetAllCharacters() {
    const characters : rawCharacter[] = [];
    let currentPage= 1;
    
    while (true){
        try {
            const res = await fetch(`https://swapi.dev/api/people/?page=${currentPage}`);
            if (!res.ok){
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            characters.push(...(data.results));
            if(data.next === null) break;
            currentPage++;
        } catch (error){
            console.error(`Error fetching data from API: ${error}`);
            break;
        }
    }
    
    return characters;
}