import Image from "next/image";
import MaleImg from "@/public/Images/characters/manJedai.jpg"; 
import FemaleImg from "@/public/Images/characters/JediWoman2.jpg";
import AndroidImg from "@/public/Images/characters/android.jpg";
import { Character } from '../../../../interfaces/characterInterface';
import getOneCharacter from "@/Data/funtions/FetchData/getOneCharacter";

export default async function CharacterDetailPage({params} : {params: {id: string}}){
    const character : Character = await getOneCharacter(params.id);
    return(
        <div className="flex flex-wrap lg:flex-nowrap justify-center py-20 mx-auto">
        <div className="w-full lg:w-1/2 xl:w-1/3 p-4 lg:p-6 xl:p-8 mx-auto">
          <Image
            src={character.gender == "male"? MaleImg : character.gender == "female"? FemaleImg : AndroidImg}
            alt=""
            width={300}
            height={300}
            className="rounded-full shadow-lg sm:w-96 mx-auto"
          />
        </div>
        <div className="w-full lg:w-1/2 xl:w-2/3 p-4 lg:p-6 xl:p-8 mx-auto">
          <h1 className="text-3xl font-bold mb-4 sm:text-4xl">{character.name}</h1>
          <ul className="list-none mb-4">
            <li className="flex items-center mb-2">
              <span className="text-gray-600 sm:text-4xl">Year:</span>
              <span className="ml-2 sm:text-4xl">{character.birthyear}</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="text-gray-600 sm:text-4xl">Eyes:</span>
              <span className="ml-2 sm:text-4xl">{character.eye_color}</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="text-gray-600 sm:text-4xl">Gender:</span>
              <span className="ml-2 sm:text-4xl">{character.gender}</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="text-gray-600 sm:text-4xl">Hair:</span>
              <span className="ml-2 sm:text-4xl">{character.haircolor}</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="text-gray-600 sm:text-4xl">Mass:</span>
              <span className="ml-2 sm:text-4xl">{character.mass}</span>
            </li>
            <li className="flex items-center mb-2">
              <span className="text-gray-600 sm:text-4xl">Skin:</span>
              <span className="ml-2 sm:text-4xl">{character.skincolor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
}