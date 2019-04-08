const createStore =  require('./my-redux')
const ADD_LEG = 'ADD_LEG'
const DECREASE_LEG = 'DECREASE_LEG'
function legReducer(state=0, action){
  console.log(state, action.type)
  switch(action.type) {
    case ADD_LEG:
      return state + 1
    case DECREASE_LEG:
      return state - 1
    default:
      return state
  }
}

const store = createStore(legReducer)
// store.subscribe(() => {
//   console.log('订阅函数', `state=${store.getState()}`)
// })
console.log('start', store.getState())
store.subscribe(function () {
  console.log(`订阅函数, store=${store.getState()}`)
})
store.dispatch({type: ADD_LEG})
store.dispatch({type: ADD_LEG})
store.dispatch({type: DECREASE_LEG})
console.log('final', store.getState())