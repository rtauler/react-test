import React from 'react';

function handleChecked(){
    console.log("CHECKED/UNCHECKED!")
}

function TodoItem(props){
    return(
        <div>
            <input type="checkbox" onChange={handleChecked} name="" id=""/>
            <p className="checkbox">{props.item.text}</p>
        </div>
    );
}

export default TodoItem;