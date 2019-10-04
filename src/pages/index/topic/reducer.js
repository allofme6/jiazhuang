import { LOAD_DATA } from './actionTypes'
import { Map } from 'immutable'

const defaultState = Map({
  list: [1]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case LOAD_DATA:
        console.log(1)
      return state.set('list', action.data)
    default:
      return state
  }
}