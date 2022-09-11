

export default function PageBody(props){
    return (
        <div className='divide-y-2 divide-dashed divide-navbar-background bg-main-background flex flex-col flex-initial min-h-screen'>
            {props.children}
        </div>
    )
}