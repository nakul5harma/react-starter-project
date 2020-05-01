import { combineReducers } from 'redux';

import { helloReducer } from '../components/hello/reducers';
import { loaderReducer } from '../components/app/reducers/loaderReducer';
import { StateInterface } from './store';

export default combineReducers<StateInterface>({
  loader: loaderReducer,
  hello: helloReducer,
});
