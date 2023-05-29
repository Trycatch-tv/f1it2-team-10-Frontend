import { createStore, combineReducers } from 'redux';
import { AppReducer } from './reducers/AppReducer';

const rootReducer = combineReducers({
  app: AppReducer,
});

const store = createStore(rootReducer);

export default store;


  