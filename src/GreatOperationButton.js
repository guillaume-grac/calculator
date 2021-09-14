
function GreatOperationButton() {

    const operator = ['+', '-', 'x', '/']

    return operator.map((operator) =>

        <button className="touches">{operator}</button>
    )
}

export default GreatOperationButton;
