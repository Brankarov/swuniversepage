import { Film } from "@/interfaces/filmsInterface";
import { FilmMapper } from "../FilmMapper";

export async function FetchFilms() : Promise<Film[]>  {
    const res = await fetch('https://swapi.dev/api/films');
    const data = await res.json();
    const filmslist = data.results.map((data : any) => FilmMapper(data));
    const films = await Promise.all(filmslist);
    return films;
}