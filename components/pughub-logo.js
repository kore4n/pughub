
import Link from "next/link";

export default function PughubLogo(props){
    return (
        // <div className= {`py-4 font-bold text-xl tracking-widest flex-1 ${props.custom}`}>
        <div className= "py-4 font-bold text-xl tracking-widest flex-1 opacity-75 duration-0 hover:duration-500 transition hover:opacity-100">
            <Link href="/">
                PUGHUB
            </Link>
        </div>
    )
}