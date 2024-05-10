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
                <li key={film.episodeid} className="bg-slate-400 mb-2 p-4 rounded-md">
                    <div>
                        <h5>{film.title}</h5>
                        <h5>{film.episode_id}</h5>
                    </div>
                </li>
            ))}
        </ul>
    );
}