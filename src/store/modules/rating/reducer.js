export default function rating(state = [], action) {
  // console.log(state);

  switch(action.type) {
    case 'ADD_RATING':
      return [ ...state, action.rating ];
    default:
      return state;
  }
}
