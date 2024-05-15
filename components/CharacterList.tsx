import { GetAllCharacters } from "@/Data/funtions/FetchData/GetAllCharacters";
import { Character } from "@/interfaces/characterInterface";
import { Suspense, useEffect, useState } from "react";
import CharacterItemList from "./CharacterItemList";


export default async function CharacterList(){
    const chars : Character[] = await GetAllCharacters();
    
    useEffect(()=>{
        setFilteredData(chars);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value)
        if(search.length > 1){
            const filteredValues = chars.filter( row =>{
                const rawGender = row.gender?.toLocaleLowerCase();
                const rawEyes = row.eye_color?.toLocaleLowerCase();
                const q = e.target.value.toLowerCase();
                if(rawGender?.includes(q) || rawEyes?.includes(q)){
                    return true
                }
                return false
            })
            setFilteredData(filteredValues);
        }
    }
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState<Character[]>([]);
    
    
    return(
        <div>
            <div className="flex justify-center align-items-center">
                <input type="text" placeholder="Search" value={search} onChange={handleSearch} className="block rounded-md border-solid  border border-inherit py-2 px-4 mb5"/>
            </div>
            <ul className="bg-slate-900 flex flex-wrap">
                <Suspense fallback={<div> Cargando characters</div>}>
                    {filteredData.map((char)=>(
                    <CharacterItemList key={char.id} {...char}/>
                    ))}
                </Suspense>
            </ul>
        </div>
    );
};