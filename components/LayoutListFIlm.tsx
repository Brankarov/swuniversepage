import LayaoutItemList from "@/components/LayoutItemList";
import { LayoutFilmListProps } from "@/interfaces/LayoutIFilmListprops";
import { Film } from "@/interfaces/filmsInterface";


export default function LayoutListFil(films: LayoutFilmListProps){
    return(
        <ul> 
        {films.map((film: Film) =>(
            <LayaoutItemList film={film}/>
        ))}
    </ul>
    );
}