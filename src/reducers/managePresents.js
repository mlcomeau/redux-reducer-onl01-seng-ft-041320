export function managePresents(state, action){
  switch (action.type) {
    case 'INCREASE':
      return {count: state.numberOfPresents + 1}
    default:
      return state;
  }
}

let state = {numberOfPresents: 0}
