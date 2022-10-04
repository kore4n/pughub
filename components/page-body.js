

export default function PageBody(props){
    return (
        <div className=' p-4 bg-main-background'>
            <div className='divide-y-4 divide-navbar-background bg-main-background flex flex-col flex-initial min-h-screen'>
                {props.children}
            </div>
        </div>
    )
}