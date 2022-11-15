import Link from "next/link";
import Image from "next/image";
import PughubLogo from "./pughub-logo";
import LinkTextLocal from "./link-text-local";

export default function Navbar(){
    return (
        <header className=' pt-5 pb-5 px-20 flex justify-between items-center'>
            <span >
                <PughubLogo className="pl-10" />
            </span>
            <nav>
                <ul className=" flex gap-10">
                    <LinkTextLocal link="about" linkText="about" />
                    <LinkTextLocal link="rules" linkText="rules" />
                    <LinkTextLocal link="format" linkText="format" />
                </ul>
            </nav>
      </header>
    )
}