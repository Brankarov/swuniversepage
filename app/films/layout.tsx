import { ReactNode } from "react";

export default function Layout({children} : {children : ReactNode}){
    return(
        <div>
            <div>
                Layaout here
            </div>
            <div>
                children here
                {children}
            </div>
        </div>
    );
}