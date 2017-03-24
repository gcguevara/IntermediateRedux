import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
switch (action.type) {
  case FETCH_WEATHER:
    // don't mutate state! you should use concat because it creates a new array
    // return state.concat([action.payload.data]);
    // this statement with ...state is similar to concat, but uses ES6 syntax
    return [ action.payload.data, ...state ];
  }
  return state;
}
