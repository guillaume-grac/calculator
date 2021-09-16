
function MagnificientEqualButton(props) {

    return (
            <button className="equal btn-secondary" onClick={props.handleClick} value={props.name}>{props.name}</button>
    );
}

export default MagnificientEqualButton;
