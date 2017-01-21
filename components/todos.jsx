import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo } from '../actions'
import {Button} from 'react-materialize';



const Todos = ({todos, dispatch}) => (
  <div class="card white center">
    <div class="card-content black-text center">

      <h1>Todos</h1>


      <NewTodo onChange={e => {
        if(e.keyCode == 13){
          dispatch(addTodo(e.target.value))
          e.target.value = ''
        }
      }}/>
      {todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
        dispatch(deleteTodo(index))
      }}>X</button></p>)}

    </div>
  </div>


)

function mapStateToProps(todos) {
  return {
    todos
  }
}

export default connect(mapStateToProps)(Todos)
