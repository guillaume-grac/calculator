
function GreatOperationButton(props) {

    return <button onClick={props.handleClick} className="touches btn-secondary" value={props.name}>{props.name}</button>;
}

export default GreatOperationButton;
