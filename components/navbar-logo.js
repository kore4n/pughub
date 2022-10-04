import Link from "next/link"

export default function NavbarLogo(props){
    return(
        <li className="font-sans font-bold flex-1 my-auto mx-4 text-lg text-main-text transition duration-0 hover:duration-500 hover:text-white">
            {props.children}
        </li>
    )
}