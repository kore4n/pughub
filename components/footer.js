import Image from "next/image";
import PughubLogo from "./pughub-logo";
import Link from "next/link";
import FooterBorder from "./footer-border";

export default function Footer(){
    return (
    <div className="font-['Open Sans'] bg-main-background text-gray-400 p-10 text-center tracking-widest flex flex-col justify-center items-center itemscontent-evenly pt-28">
        <div className="py-2">
            Copyright © 2022 Pughub
        </div>
        <div className="py-2">
            Created with Next.js. Powered by{' '}
            <Image className="invert" src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
        <FooterBorder />
        <div className="py-2 flex">
            <div className="" >
                <PughubLogo/>
            </div>

            <div className=" py-0 pl-2 flex-1 m-auto">
            owned and co-founded by Cerby#3741 & Unity#2031
            </div>
        </div>
        <FooterBorder />
        <div className="py-2 flex">
            <div>
                Front-end by&nbsp;
            </div>
            <div className=" text-blue-500">
                <Link href="https://github.com/kore4n">
                    Jason Kwan
                </Link>
            </div>
        </div>
        <div className="py-2">
            Back-end by Kastaling#0001
        </div>
    </div>
    )
}