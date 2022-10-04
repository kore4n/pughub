import Link from "next/link";
import Image from "next/image";
import NavbarLogo from "./navbar-logo";
import PughubLogo from "./pughub-logo";

export default function Navbar(){
    return (
        <nav className=" bg-main-background pl-44 flex flex-row justify-center content-center min-h-[12vh] ">
            <span className="flex-1 pr-8 flex">
                <PughubLogo />
            </span>
            <ul className="flex">
                <NavbarLogo>
                    <Link href="/about">
                        about
                    </Link>
                </NavbarLogo>
                <NavbarLogo>
                    <Link href="/rules">
                        rules
                    </Link>
                </NavbarLogo>
                <NavbarLogo>
                    <Link href="/format">
                        format
                    </Link>
                </NavbarLogo>
            </ul>
            <div className="pr-8 flex">
                <div className="flex-1 right-7">
                    <div className=" cursor-pointer float-right py-0 pr-44 pl-10 pb-0  pt-3 content-center justify-center bg-center opacity-75 duration-0 hover:duration-500 transition hover:opacity-100 hover:saturate-200 hover:scale-110">
                        <a href="https://www.google.ca/" >
                            <Image src="/images/discordlogo.png" alt="discord logo" width={96} height={54}/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}