import React from 'react';

function TodoItem(props){
    return(
        <div>
            <input type="checkbox" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)} 
            />
            <p className="checkbox">{props.item.text}</p>
        </div>
    );
}

export default TodoItem;