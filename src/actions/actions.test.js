import * as actions from '.'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: 'ADD_TODO',
      text,
      id: 0
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
  it('should create an action to change the filter', () => {
    const filter = 'COMPLETED'
    const expectedAction = {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
    expect(actions.setVisibilityFilter(filter)).toEqual(expectedAction)
  })

  it('should create an action to toggle todo', () => {
    const id = 0
    const expectedAction = {
      type: 'TOGGLE_TODO',
      id
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })
})
