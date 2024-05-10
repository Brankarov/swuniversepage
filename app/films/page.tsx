import Image from "next/image";

async function fetchFilms() {
    const res = await fetch('https://swapi.dev/api/films');
    const data = await res.json();
    console.log(data)
    return data.results;
}


export default async function FilmsPage(){
    const films = await fetchFilms();
    return (
        <ul> 
            {films.map(film =>(
                <li key={film.episodeid} className="bg-slate-900 mb-2 p-2">
                    <article className="flex items-start spacex-6 p-6">
                        <Image src={film.image} alt="" width={"60"} height={88} className="flex-none rounded-md bg-slate-100"/>
                        <div className="min-w-0 relative flex-auto pr-20 pl-3">
                            <h2 className="font-semibold text-salte-900 truncate pr-20">{film.title}</h2>
                            <h5 className="text-slate-400 truncate pr-20">Episode: {film.episode_id}</h5>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    );
}