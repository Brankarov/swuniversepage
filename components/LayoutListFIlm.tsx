import LayaoutItemList from "@/components/LayoutItemList";
import { Film } from "@/interfaces/filmsInterface";

export interface LayoutFilmListProps{
    films: Film[];
}

export default function LayoutListFil({ films }: LayoutFilmListProps) {

    return (
      <ul>
        {films.map((film: Film) => (
          <LayaoutItemList film={film} />
        ))}
      </ul>
    );
}