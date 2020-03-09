import React from 'react';

function Joke(joke) {
    console.log(joke);
    return (
        <div>
            <h2 style={{ display: !joke.question && "none" }}>Question: {joke.question}</h2>
            <p>id: {joke.id}</p>
            <h3 style={{ color: !joke.question && "red" }}>Punchline: {joke.punchline}</h3>
        </div>
    )
}

export default Joke;