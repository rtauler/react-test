import React from 'react'

function handleClick(){
    console.log("CLICKED!")
}

function handleHover(){
    console.log("HOVER!")
}

function handleLoad(){
    console.log("LOAD!")
}

function App6() {
    return (
        <div>
            <img onLoad={handleLoad} onMouseOver={handleHover} src="https://i.picsum.photos/id/264/200/300.jpg" alt="" />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App6