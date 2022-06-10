export default function Button(props) {
    return (
        <div className={props.classN}>
            <button>{props.buttonText}</button>
        </div>
    )
}
