export default function rating(state = [], action) {
  console.log(action);

  switch(action.type) {
    case 'ADD_RATING':
      return [ ...state, action.rating ];
    default:
      return state;
  }
}
