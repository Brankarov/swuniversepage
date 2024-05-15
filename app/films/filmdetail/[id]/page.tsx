import charpic from "@/public/Images/characters/charpic.avif"
import bg4 from "@/public/Images/background/films/sw4.avif";
import Image from "next/image";
import {FilmMapper} from "@/Data/funtions/FilmMapper"
import Link from "next/link";

async function fetchFilmbyId(id: string) {
    const url : string = `https://swapi.dev/api/films/${id}/`;
    const res = await fetch(url);
    const data = await res.json();
    const film = await FilmMapper(data);
    return film;
}

export default async function FilmDetailPage({params} : {params: {id: string}}){
    console.log(params);
    const film = await fetchFilmbyId(params.id);
    return(
        <div className="h-full w-full relative mt-0 p-0 jystify-lest bg-slate-900">
            {film.img && (<Image src={film.id == 4? bg4 : "" } alt="" layout="fill" objectFit="cover" className="absolute top-0 lesft-0 w-full h-full"/>)}
            <div className="max-w-md p4 mx-auto mt-20">
                <h1 className="text-3xl font-bold">{film.title}</h1>
                <h2 className="text-lg py-0.5">Episode: {film.episode_id}</h2>
                <h3 className="text-sm py-0.5">Director: {film.director}</h3>
                <p className="text-sm fopy-2">{film.opening_crawl}</p>
                <h3 className="text-sm py-2"> Cast:</h3>
                <ul className="list-none">
                    {film.characters.map((char : any)=>(
                        <li key={char.id} className="py-4 flex items-center">
                            <Image src={charpic} alt="char img" width={50} height={50} className="rounded-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-500">{char.name}</p>
                                <Link href={`/characters/detail/${char.id}`}>
                                    <p className="text-sm text-gray-600">see details{}</p>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}