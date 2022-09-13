import PlayerJoined from "./player-joined";


export default function ClassQueue(props){
    return (
        <div className=" flex-1 flex flex-col bg-navbar-background m-1  ">
            {props.children}
            <PlayerJoined>
                PlayerName
            </PlayerJoined>
            <PlayerJoined>
                PlayerName
            </PlayerJoined>
            <PlayerJoined>
                PlayerName
            </PlayerJoined>
        </div>
    )
}