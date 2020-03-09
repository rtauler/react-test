import React, {Component} from 'react'
import todosData from './components/TodosData'
import TodoItem from './components/TodoItem'

function App4(){
    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return(
        <div>
            {todoItems}
        </div>
    )
}

export default App4;
