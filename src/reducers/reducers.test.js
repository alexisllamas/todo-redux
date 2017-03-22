import reducer from '.';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      {
        filter: 'all',
        todos: [],
      }
    )
  })

   it('should handle ADD_TODO', () => {
    const firstTodo =  {
      id: 0,
      task: 'Run the tests',
      completed: false
    }
    const secondTodo =  {
      id: 1,
      task: 'Make testing great again',
      completed: false
    }
    expect(
      reducer(undefined, {
        type: 'ADD_TODO',
        text: firstTodo.task,
        id: firstTodo.id
      })
    ).toEqual(
      {
        filter: 'all',
        todos: [
          firstTodo
        ],
      }
    )
    expect(
      reducer({
        filter: 'all',
        todos: [
          firstTodo
        ]
      }, {
        type: 'ADD_TODO',
        text: secondTodo.task,
        id: secondTodo.id
      })
    ).toEqual(
      {
        filter: 'all',
        todos: [
          firstTodo,
          secondTodo
        ]
      }
    )
   })

   it('toggle a todo', () => {
     const state = reducer({todos:[{id:0,task:'new',completed:false}],filter:'all'}, {type:'TOGGLE_TODO',id:0})
     expect(state).toEqual({todos:[{id:0,task:'new',completed:true}],filter:'all'})

   })
})

describe('filter reducer', () => {
  it('change visibility filter', () => {
    const state = reducer({filter: 'all', todos: []}, {type: 'SET_VISIBILITY_FILTER', filter: 'completed'})
    expect(state).toEqual({todos:[], filter: 'completed'})
  })
})
