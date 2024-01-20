export function Counter({c, sC}) {
    function HandleClick(num) {
        sC( c + num )
    } 
    return (
        <div>
            <p>Count is : {c}</p>

            <div>
                <button onClick={() => HandleClick(1)}>Inc</button>
                <button onClick={() => HandleClick(-1)}>Dec</button>
            </div>
        </div>

    )
}