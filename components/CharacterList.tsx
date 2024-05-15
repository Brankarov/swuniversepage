"use client"
import { Character } from "@/interfaces/characterInterface";
import { Suspense, useEffect, useState } from "react";
import CharacterItemList from "./CharacterItemList";

interface CharacterListProps {
    characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps){
    
    
    useEffect(()=>{
        setFilteredData(characters);
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value)
        if(search.length > 1){
            const filteredValues = characters.filter( row =>{
                const rawGender = row.gender?.toLocaleLowerCase();
                const rawEyes = row.eye_color?.toLocaleLowerCase();
                const q = e.target.value.toLowerCase();
                if(rawGender?.includes(q)){
                    return rawGender === q;
                }
                if(rawEyes?.includes(q)){
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
                <input type="text" placeholder="Search" value={search} onChange={handleSearch} className="block rounded-md border-solid  border border-inherit py-2 px-4 mb5 text-sm text-semibold text-black"/>
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