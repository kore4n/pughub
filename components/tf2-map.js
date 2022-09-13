import Image from "next/image"


export default function TF2Map(props){
    return (
        <div className=" text-center text-white flex flex-col">       
            {/* Title */}
            <div className="my-4 tracking-widest">
                {props.title}
            </div>         
            <div>
                {props.map}
            </div>
        </div>
    )
}