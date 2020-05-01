import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { enableBatching } from 'redux-batched-actions';

import { HelloModel } from '../components/hello/models';
import api from '../middlewares/api';
import rootReducer from './rootReducer';

export interface StateInterface {
  loader: any;
  hello: HelloModel;
}

export default function configureStore(initialState = {}) {
  return applyMiddleware(thunk, api)(createStore)(
    enableBatching(rootReducer),
    initialState,
  );
}
