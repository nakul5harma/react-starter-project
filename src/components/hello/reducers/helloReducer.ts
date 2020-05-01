import { Action } from '../../../common/interfaces';
import { GET_HELLO } from '../actions/helloAction';

export function helloReducer(state = {}, action: Action): any {
  switch (action.type) {
    case GET_HELLO:
      return Object.assign({}, state, {
        loading: true,
        message: action.response,
      });
  }
  return state;
}
