import { Character } from '../../interfaces/characterInterface';

export async function FetchCharacterData(url: string): Promise<Character> {

    const res = await fetch(url);
    const data = await res.json();
  
    return {
        id: data.url,
        name: data.name,
        mass: data.mass,
        haircolor: data.hair_color,
        skincolor: data.skin_color,
        eye_color: data.eye_color,
        birthyear: data.birth_year,
        gender: data.gender,
        img: data.image,
        height: data.height
    };
}