import { Character } from '../../interfaces/characterInterface';
import { getEpisodeIdFromUrl } from './getEpisodeIdFromUrl';

export async function FetchCharacterData(url: string): Promise<Character> {

    const res = await fetch(url);
    const data = await res.json();
    const id : number = getEpisodeIdFromUrl(data.url);
    return {
        id: id,
        name: data.name,
        mass: data.mass,
        haircolor: data.hair_color,
        skincolor: data.skin_color,
        eye_color: data.eye_color,
        birthyear: data.birth_year,
        gender: data.gender,
        img: data.image,
        height: data.height,
        url: data.url
    };
}