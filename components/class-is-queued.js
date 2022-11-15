


export default function ClassIsQueued(props){
    return (
        <input type={"checkbox"} checked={props.input} onChange={props.onChangeHandler}></input>
    )
}