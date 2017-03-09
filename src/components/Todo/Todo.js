import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Task from './Task';
import Filter from './Filter';

const filterTodos = function(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter(task => task.completed === (filter === 'completed'))
}

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTask: '',
      filter: 'all'
    }
  }

  addTask(ev) {
    if (ev) ev.preventDefault();
    const {todos, newTask} = this.state;
    const newTodos = [...todos, {
      task: newTask,
      completed: false
    }];
    this.setState({
      todos: newTodos,
      newTask: ''
    });
  }

  toggleComplete(index) {
    return () => {
      const {todos} = this.state;
      const newTodos = [...todos.slice(0, index), {
        ...todos[index],
        completed: !todos[index].completed
      }, ...todos.slice(index + 1)];
      this.setState({
        todos: newTodos
      });
    }
  }

  changeFilter(filter) {
    return () => {
      this.setState({
        filter: filter
      });
    }
  }

  render() {
    const { todos, filter, newTask } = this.state;
    const filteredTodos = filterTodos(todos, filter);
    const tasks = filteredTodos.map(({task, completed}, index) => (
      <Task key={index} task={task} completed={completed} toggleComplete={this.toggleComplete(index)}/>
    ));
    return (
      <div>
        <AddTodo
          onChange={({target}) => {this.setState({newTask: target.value})}}
          task={newTask}
          addTask={(e) => this.addTask(e)}
        />
        <ul>
          {tasks}
        </ul>
        {todos.length > 0 && (
          <Filter
            active={filter}
            filterActive={this.changeFilter('active')}
            filterAll={this.changeFilter('all')}
            filterCompleted={this.changeFilter('completed')}
          />
        )}
      </div>
    );
  }
}

export default Todo;
