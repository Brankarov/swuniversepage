import { LayaoutFilmItemListProps } from "@/interfaces/LayaoutFilmItemListProps";
import { Film } from "@/interfaces/filmsInterface";
import Image from "next/image";

 

export default function LayaoutItemList({film} : LayaoutFilmItemListProps){
    console.log(film);
    return(
        <li key={film.id} className="bg-slate-900 mb-2 p-2">
            <article className="flex items-start spacex-6 p-6">
                <Image src={film.img || ""} alt="main pic" width={"60"} height={88} className="flex-none rounded-md bg-slate-100"/>
                <Image src='/src/img/altimg.jpg'  alt="alt pic" width={"60"} height={88} className="flex-none rounded-md hidden"></Image>
                <div className="min-w-0 relative flex-auto pr-20 pl-3">
                    <h2 className="font-semibold text-salte-900 truncate pr-20">{film.title}</h2>
                    <h5 className="text-slate-300 truncate pr-20">Episode: {film.episode_id}</h5>
                    <h6 className="text-sm text-slate-500 overflow-hidden truncate withespace-no-wrap">{film.opening_crawl}</h6>
                </div>
            </article>
        </li>
    );
}