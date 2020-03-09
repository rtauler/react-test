import React from 'react'
import TodoItem from './components/TodoItem'
import TodosData from './components/TodosData'

class App5 extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: TodosData
        }
    }

    render() {
        const todoItems = this.state.todos.map(
            item => <TodoItem key={item.id} item={item} />
        )

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App5