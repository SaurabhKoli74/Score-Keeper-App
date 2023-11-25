var score = 0;
var wicket = 0;
var ballwiseResult = [];
var hit = 0;
var inputRef = React.createRef();
const addScore = (num) => {
    hit = num;
    rootElement.render(<App />)
}
const addWicket = () => {
    hit = "W";
    rootElement.render(<App />);
}

const Result = () => {
    return (

        ballwiseResult.map((res, index) => {

            return (<>
                {index % 6 === 0 ? <br /> : null}
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
function handleSubmit(event) {
    event.preventDefault();
    ballwiseResult.unshift(
        // <span>{hit},{inputRef.current.value}</span>
        <span >{`${hit}, ${inputRef.current.value}`}</span>
    );
    console.log(inputRef.current);
    rootElement.render(<App />);
}
const Form = () => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={hit} />
                <input ref= {inputRef} placeholder="Enter comment" />
                <button>Submit</button>
            </form>
        </>

    )
}
const ShowResult = () => {
    return (
        <>
            {ballwiseResult.map((res, index) => {

                return (

                    <p key={index}>{res}</p>
                );

            })}
        </>
    );
}
const App = () => {
    return <>
        <hr />
        <h1>SCORE KEEPER</h1>
        <h2>SCORE: {score}/{wicket}</h2>
        <ScoreButtons />
        {/* <Result /> */}
        <br />
        <Form />
        <hr />
        <ShowResult />

    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);