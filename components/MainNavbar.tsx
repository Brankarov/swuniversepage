import Link from "next/link";

export default function MainNavBarLayaout()
{
    return (
        <div>
            <div className="bg-slate-1000 flex items-center justify-center">
                <div className="pr-5 text-yellow-500 text-semibold">
                    <Link href={'/characters'} legacyBehavior className="p-2">
                        <a className="text-white">Characters</a>
                    </Link>
                </div >
                <div className="text-yellow-500 text-bold text-lg">
                    <Link href={'/'} legacyBehavior className="p-2 bg-slate-900 text-yellow-500 mx-4">
                        <a className="text-yellow">Star Wars Universe</a>
                    </Link>
                </div>
                <div className="pl-5 text-yellow-500 text-semibold">
                    <Link href={"/films"} legacyBehavior className="p-2 text-yellow-500">
                        <a className="text-white">Films</a>
                    </Link> 
                </div>
            </div>
        </div>
    );
};