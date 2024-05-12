import { Character } from "@/interfaces/characterInterface";
import { Film } from "@/interfaces/filmsInterface";
import { FetchCharacterData } from '../../Data/funtions/FetchCharacterData';

export async function FilmMapper(data : any) : Promise<Film>{
    
    const film : Film = {
        id: data.id,
        title : data.title,
        img: data.img,
        episode_id: data.episode_id,
        opening_crawl: data.opening_crawl,
        director: data.director,
        characters: []
    }

    const characterPromises = data.characters.map((url: string) => FetchCharacterData(url));
    const characters = await Promise.all(characterPromises);
    film.characters = characters;

    return film;
}