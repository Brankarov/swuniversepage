import { Film } from "@/interfaces/filmsInterface";
import { FetchCharacterData } from '../../Data/funtions/FetchCharacterData';
import {getEpisodeIdFromUrl} from '@/Data/funtions/getEpisodeIdFromUrl'
import { url } from 'inspector';
import { Character } from '@/interfaces/characterInterface';


export async function FilmMapper(data : any) : Promise<Film>{
    if (!data) {
        throw new Error("Missing data");
    }
    
      const id: number = data.url
        ? getEpisodeIdFromUrl(data.url)
        : 0;
    const film : Film = {
        id: id,
        title : data.title,
        img: data.img,
        episode_id: data.episode_id,
        opening_crawl: data.opening_crawl,
        director: data.director,
        characters: [],
        url: data.url
    }
    
    if (data.characters){
        const characterPromises = data.characters.map((url: string) => FetchCharacterData(url));
        const characters = await Promise.all(characterPromises);
        film.characters = characters;
    }

    return film;
}