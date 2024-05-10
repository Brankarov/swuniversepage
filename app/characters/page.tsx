import Image from "next/image";

async function fetchCharacters() {
    const res = await fetch('https://swapi.dev/api/people');
    const data = await res.json();
    console.log(data)
    return data.results;
}

export default async function CharacterPage(){
    const characters = await fetchCharacters();
    return (
        <ul>
            {characters.map((char)=>(
                <li key={char.id}>
                    <div className="max-w-xs bg-slate-900 rounded overflow-hidden shadow-lg m-4 items-center justify-center">
                        <h1 className="text-semibold items-center flex justify-center">{char.name}</h1>
                        <Image src={char.img} height={200} width={100} className="bg-slate-800 items-center" />
                    </div>
                </li>
            ))}
        </ul>
    );
}