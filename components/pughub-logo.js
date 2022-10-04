
import Link from "next/link";

export default function PughubLogo(props){
    return (
        <div className= "m-auto font-bold text-2xl tracking-widest flex-1 opacity-75 duration-0 hover:duration-500 transition hover:opacity-100 hover:saturate-200">
            <Link href="/">
                PUGHUB
            </Link>
        </div>
    )
}