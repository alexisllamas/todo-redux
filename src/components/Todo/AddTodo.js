import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

let input;

const AddTodo = ({dispatch}) => (
  <form>
    <input type="text" ref={node => {input = node}} />
    <button onClick={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>Add Task!</button>
  </form>
);


export default connect()(AddTodo);
