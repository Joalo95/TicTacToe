function History(props) {

    let description = 'Go to game start';

    return (
        <ol>
            {props.history.map((squares, move) => {
                if (move > 0) {
                    description = 'Go to move #' + move;
                } else { description }
                return (
                    <li key={move}>
                        <button onClick={() => props.jumpTo(move)}>{description}</button>
                    </li>
                )
            })
            }
        </ol>
    )
}
export default History