type Reducer = (state: any, action: object) => any
interface Store {
  getState: () => any,
  dispatch: (action: object) => any,
  subscribe: (fn) => void
}
export default function createStore(reducer: Reducer) : Store {
  let currentState
  const listeners = []
  const initType = '@@@/a.b.n.c.d'
  function getState() {
    return currentState
  }
  function subscribe(fn: any) {
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