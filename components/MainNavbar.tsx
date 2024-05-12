import Link from "next/link";

export default function MainNavBarLayaout()
{
    return (
        <div>
            <div className="bg-slate-900 flex items-center justify-center">
                <div>
                    <Link href={'/characters'} legacyBehavior className="p-2">
                        <a>Characters</a>
                    </Link>
                </div>
                <Link href={'/'} legacyBehavior className="p-2">
                    <a>Star Wars Universe</a>
                </Link>
                <div>
                    <Link href={"/films"} legacyBehavior className="p-2">
                        <a>Films</a>
                    </Link> 
                </div>
            </div>
        </div>
    );
};