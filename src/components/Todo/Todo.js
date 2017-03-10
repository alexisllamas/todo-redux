import React from 'react';
import { connect } from 'react-redux'
import AddTodo from './AddTodo';
import Task from './Task';
import Filter from './Filter';
import { toggleTodo, setVisibilityFilter } from '../../actions'

const filterTodos = (todos, filter) => {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter(task => task.completed === (filter === 'completed'))
}

const mapStateToProps = (state) => {
  return {
    todos: filterTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
    changeFilter: (filter) => {
      dispatch(setVisibilityFilter(filter));
    }
  }
}

const Todo = ({todos, filter, onTodoClick, changeFilter}) => {
  const tasks = todos.map(({task, completed, id}) => (
    <Task key={id} task={task} completed={completed} toggleComplete={() => onTodoClick(id)}/>
  ));
  return (
    <div>
      <AddTodo />
      <ul>
        {tasks}
      </ul>

      <Filter
        active={filter}
        filterAll={() => changeFilter('all')}
        filterActive={() => changeFilter('active')}
        filterCompleted={() => changeFilter('completed')}
      />
    </div>
  );
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default VisibleTodoList;
