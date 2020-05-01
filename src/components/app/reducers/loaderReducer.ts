import { Action } from '../../../common';
import { LOADER_START, LOADER_STOP } from '../actions/loaderAction';

export function loaderReducer(state = {}, action: Action): any {
  switch (action.type) {
    case LOADER_START:
      return Object.assign({}, state, {
        loading: true,
        message: action.response,
      });
    case LOADER_STOP:
      return Object.assign({}, state, {
        loading: false,
        message: null,
      });
  }
  return state;
}
