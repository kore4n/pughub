


export default function ClassQueue(props){
    const thePlayersQueued = props.playersQueued;
    const listPlayersQueued = thePlayersQueued?.map((player) => // ? to check for list https://stackoverflow.com/questions/69080597/%C3%97-typeerror-cannot-read-properties-of-undefined-reading-map
        <li key={player.toString()}>
            {player}
        </li>
    );

    return (
        <div className="flex-1 flex flex-col  m-1">
            {props.children}
            <ul className=" pl-10 bg-navbar-background">{listPlayersQueued}</ul>
        </div>
    )
}