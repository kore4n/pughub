

export default function PageHeading(props){
    return (
        <section className='text-white font-serif text-2xl text-center p-24 pb-6 bg-main-background flex-1'>
            <h1 className=' p-8 '>
                {props.title}
            </h1>
            {props.content}
        </section>
    )
}