export default function favorite(state = [], action) {
  // console.log(state)
  switch(action.type) {
    case 'ADD_FAVORITE':
      return [ ...state, action.favorite ];
    default:
      return state;
  }
}
