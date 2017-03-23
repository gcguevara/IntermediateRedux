import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
switch (action.type) {
  case FETCH_WEATHER:
    // don't mutate state! you should use concat because it creates a new array
    return state.concat([action.payload.data]);
  }
  return state;
}
