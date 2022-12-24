
import Navbar from "./navbar"
export default function PageBody(props){
    return (
        <div className=' p-4 bg-main-background'>
            <Navbar classes="text-main-cyan hover:scale-110 duration-100"/>
            <div className=' bg-main-background flex flex-col flex-initial min-h-screen'>
                {props.children}
            </div>
        </div>
    )
}