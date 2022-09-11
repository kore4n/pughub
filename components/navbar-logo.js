import Link from "next/link"

export default function NavbarLogo(props){
    return(
        <div className="font-['Cubano'] flex-1 p-4 text-gray-400 transition duration-0 hover:duration-500 hover:text-white">
            {props.children}
        </div>
    )
}