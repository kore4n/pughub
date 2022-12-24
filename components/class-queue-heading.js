import Image from "next/image"
import ClassIsQueued from "./class-is-queued"

export default function ClassQueueHeading(props){
    return (
        <div className=' flex saturate-200 bg-gray-600 max-h-16'>
            <div className='p-2'>
                <Image src={props.image} alt={props.alt} width={48} height={48}/>
                </div>
                <div className='flex flex-col flex-1 content-center'>
                  <div className='grid place-items-center brightness-100'>
                    {props.title}
                    <ClassIsQueued input={props.input} onChangeHandler={props.onChangeHandler}/>
                  </div>
            </div>
        </div>
    )
}