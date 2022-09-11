import Link from "next/link";
import Image from "next/image";
import NavbarLogo from "./navbar-logo";
import PughubLogo from "./pughub-logo";

export default function Navbar(){
    return (
        <div className="bg-navbar-background drop-shadow-2xl pl-8 flex flex-row justify-center content-center">
            <div className="flex-1 pr-8 flex">
                <PughubLogo />
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1"></div>

            </div>
            <div className="flex justify-center content-center">
                <NavbarLogo>
                    <Link href="/">
                        HOME
                    </Link>
                </NavbarLogo>
                <NavbarLogo>
                    <Link href="/about">
                        ABOUT
                    </Link>
                </NavbarLogo>
                <NavbarLogo>
                    <Link href="/rules">
                        RULES
                    </Link>
                </NavbarLogo>
                <NavbarLogo>
                    <Link href="/format">
                        FORMAT
                    </Link>
                </NavbarLogo>
            </div>
            <div className="flex-1 pr-8 flex">
                <div className="flex-1"></div>
                <div className="flex-1"></div>
                <div className="flex-1 right-7">
                    <div className=" cursor-pointer float-right py-0 pb-0 pt-3 content-center justify-center bg-center opacity-75 duration-0 hover:duration-500 transition hover:opacity-100">
                        <Link href="/">
                            <Image src="/images/discordlogo.png" alt="discord logo" width={64} height={36}></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}