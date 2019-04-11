type Reducer = (state: any, action: object) => any
type Function = () => void | any
interface Action {
  type: string
}
interface Store {
  getState: () => any,
  dispatch: (state: any, action: Action) => any,
  subscribe: (fn: Function) => void
}

export default function createStore(reducer: Reducer) : Store {
  let currentState: any
  const listeners: Function[] = []
  const initType = '@@@/a.b.n.c.d'
  function getState() {
    return currentState
  }
  function subscribe(fn: any) {
    listeners.push(fn)
  }
  function dispatch(action: any) {
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