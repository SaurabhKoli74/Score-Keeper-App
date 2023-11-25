var score = 0;
var wicket = 0;
var ballwiseResult = [];
const addScore = (num) => {
    if (wicket == 10) {
        return;
    }
    ballwiseResult.push(num);
    console.log(ballwiseResult);
    score += num;
    rootElement.render(<App />)
}
const addWicket = () => {
    if (wicket < 10) {
        wicket += 1;
        ballwiseResult.push("W");
        console.log(ballwiseResult);
        rootElement.render(<App />);
    }
}

const Result = () => {
    return (
        
            ballwiseResult.map((res, index) => {

                return (<>
                    {index % 6 === 0?<br />:null}
                    <span>{res === 0 ? <strong>.</strong> : res}</span>
                    &nbsp;&nbsp;&nbsp;
                </>)
            })

    )
}
const ScoreButtons = () => {
    return (<div>
        <button onClick={() => addScore(0)}>0</button>
        <button onClick={() => addScore(1)}>1</button>
        <button onClick={() => addScore(2)}>2</button>
        <button onClick={() => addScore(3)}>3</button>
        <button onClick={() => addScore(4)}>4</button>
        <button onClick={() => addScore(5)}>5</button>
        <button onClick={() => addScore(6)}>6</button>
        <button onClick={() => addWicket(1)}>wicket</button>
    </div>
    );
}
const App = () => {
    return <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE: {score}/{wicket}</h2>
        <ScoreButtons />
        <Result />

    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);