

export default function PageOpening(props) {
    return(
        <div>
            <div className={`text-4xl font-bold text-center text-white top-500 justify-self-center py-64 tracking-widest bg-center bg-${props.imageName}`}>
            {/* <div className={`text-4xl font-bold text-center text-white top-500 justify-self-center py-64 tracking-widest bg-center bg-jorgen`}> */}
                {props.title}
                {/* {props.imageName} */}
                <div className="text-lg p-6 font-medium">
                    {props.subTitle}    
                </div>
            </div>
        </div>
    )
}