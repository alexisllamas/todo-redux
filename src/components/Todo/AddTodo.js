import React from 'react';

const AddTodo = ({task, onChange, addTask}) => (
  <form>
    <input type="text" value={task} onChange={onChange} />
    <button onClick={addTask}>Add Task!</button>
  </form>
);

export default AddTodo;
