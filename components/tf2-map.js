import Image from "next/image"


export default function TF2Map(props){
    const mapWidth = 300;
    const mapHeight = 169;

    return (
        <div className=" text-center text-white flex flex-col">       
            <div className="my-4 tracking-widest">
                {props.title}
            </div>         
            <div>
                <Image className="rounded-lg" src={props.mapSource} alt={props.mapAlt} width={mapWidth} height={mapHeight}/>
            </div>
        </div>
    )
}