import React from 'react'
import jokesData from './components/jokesData'
import Joke from './components/Joke'

function App2() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} id={joke.id} question={joke.question} punchline={joke.punchline}/>)

    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App2;