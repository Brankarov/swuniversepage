import LayoutListFil from "@/components/LayoutListFIlm";
import { ReactNode } from "react";
import { Film } from '@/interfaces/filmsInterface';
import {FetchFilms} from '@/Data/funtions/FetchData/FetchFilms'


export default async function Layout({children} : {children : ReactNode}){
    const films : Film[] = await FetchFilms();
    return(
        <div className="flex h-screen w-screen">
            <div className="w-1/2 bg-slate-1000 p-4 overflow-y-auto">
             <LayoutListFil films={films} />
            </div>
            <div className="w-1/2 bg-slate-900 p-4 mt-0 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}