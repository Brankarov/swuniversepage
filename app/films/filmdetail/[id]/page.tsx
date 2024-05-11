import Image from "next/image";

async function fetchFilmbyId() {
    const res = await fetch('https://swapi.dev/api/films/1/');
    const data = await res.json();
    console.log(data);
    return data;
}

export default async function FilmDetailPage(){
    const film = await fetchFilmbyId();
    return(
        <div className="h-screen w-screen relative">
            <Image src={""} alt="background image" layout="fill" objectFit="cover" className="absolute top-0 lesft-0 w-full h-full"/>
            <div className="max-w-md p4 mx-auto mt-20">
                <h1 className="text-3xl font-bold">{film.title}</h1>
                <h2 className="text-lg py-0.5">Episode: {film.episode_id}</h2>
                <h3 className="text-sm py-0.5">Director: {film.director}</h3>
                <p className="text-sm fopy-2">{film.opening_crawl}</p>
                <h3 className="text-sm py-2"> Cast:</h3>
                <ul className="">
                    {film.characters.map((char)=>(
                        <li key={char.id} className="py-4 flex">
                            <Image src={char.img} alt="char img" className="h-20 w-20 rounder-full"/>
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-500">name{char.name}</p>
                                <p className="text-sm text-gray-700">see details{}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}