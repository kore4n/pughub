

export default function PageOpening(props) {
    return(
        <header>
            <h1 className={`text-5xl font-bold font-sans-serif bg-main-background text-center text-white top-500 justify-self-center pt-20 pb-16 bg-center`}>
                {props.title}
                <div className=" text-base py-2 pb-4 font-medium">
                    {props.subTitle}    
                </div>
            </h1>
        </header>
    )
}