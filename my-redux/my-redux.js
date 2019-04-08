export default function createStore(reducer) {
  let currentState
  const listeners = []
  const initType = '@@@/a.b.n.c.d'
  function getState() {
    return currentState
  }
  function subscribe(fn) {
    listeners.push(fn)
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    listeners.forEach(fn => { fn() })
  }
  dispatch({type: initType})
  return {
    getState,
    dispatch,
    subscribe
  }
}