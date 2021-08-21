/* eslint-disable no-underscore-dangle */
import { createStore, compose } from 'redux';
import rootReducer from './root-reducer';

export const store = createStore(rootReducer, compose(
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
));

export default { store };
