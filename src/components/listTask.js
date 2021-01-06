import React from 'react'
import { connect } from 'react-redux'
import { _ } from 'underscore'
import { FILTER_ALL,FILTER_ISDONE } from './components/actionTypes'
import { toggleTodo } from './components/actions'


const Todo = ({ todo, id, toggleTodo }) => (
    <li className={todo.completed ? 'isDone' : ''} onClick={() => toggleTodo(id)}>{todo.content}</li>
)

function listTask({ todos, toggleTodo }) {
    return (
        _.keys(todos).map((id) => (
            <Todo key={id} id={id} toggleTodo={toggleTodo} todo={todos[id]} />
        ))
    )
}

const mapState = (state) => {
    if (state.visibilityFilter.activeFilter === FILTER_ALL) {
        return { todos: state.todos.data }
    } else if (state.visibilityFilter.activeFilter === FILTER_ISDONE) {
        return ({
            todos: _.pick(state.todos.data, (todo) => todo.isDone)
        })
    } else {
        return ({
            todos: _.pick(state.todos.data, (todo) => !todo.isDone)
        })
    }
}

export default connect(mapState, { toggleTodo })(listTask);