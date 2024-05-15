import { Character } from "@/interfaces/characterInterface";
import { getEpisodeIdFromUrl } from "./getEpisodeIdFromUrl";
import { rawCharacter } from "@/interfaces/rawCharacterInterface";

export default function CharacterMapper(data : rawCharacter[]) :  Character[]{
    const characterArray : Character[] = [];
    
    data.map((character: any) => {
        const id : number = getEpisodeIdFromUrl(character.url);
        // return {
        //     id: id,
        //     name: character.name,
        //     mass: character.mass,
        //     haircolor: character.hair_color,
        //     skincolor: character.skin_color,
        //     eye_color: character.eye_color,
        //     birthyear: character.birth_year,
        //     gender: character.gender,
        //     img: "/public/Images/char_img.webp",
        //     height: character.height,
        //     url: character.url
        // };
        characterArray.push({
            id: id,
            name: character.name,
            mass: character.mass,
            haircolor: character.hair_color,
            skincolor: character.skin_color,
            eye_color: character.eye_color,
            birthyear: character.birth_year,
            gender: character.gender,
            img: "/public/Images/char_img.webp",
            height: character.height,
            url: character.url
        } );
    });

    return characterArray;
};
