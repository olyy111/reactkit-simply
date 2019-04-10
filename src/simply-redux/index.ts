type Reducer = (state: any, action: object) => any
type Func = () => void | any
interface Action {
  type: string
}
interface Store {
  getState: () => any,
  dispatch: (action: object) => any,
  subscribe: (fn: Func) => void
}

export default function createStore(reducer: Reducer) : Store {
  let currentState: any
  const listeners = []
  const initType = '@@@/a.b.n.c.d'
  function getState() {
    return currentState
  }
  function subscribe(fn: Func) {
    listeners.push(fn)
  }
  function dispatch(action: Action) {
    currentState = reducer(currentState, action)
    listeners.forEach(fn => { fn() })
  }
  dispatch({type: initType})
  return {
    getState,
    dispatch,
    subscribe,
  }
}