import { ReactNode } from "react";

export default function Layout({children} : {children : ReactNode}){
    return(
        <div className="flex h-screen">
            <div className="w-1/2 bg-slate-800 p-4 overflow-y-auto">
                Layaout here
            </div>
            <div className="w-1/2 bg-slate-700 p-4 overflow-y-auto">
                children here
                {children}
            </div>
        </div>
    );
}