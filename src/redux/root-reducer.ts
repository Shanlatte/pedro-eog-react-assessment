import { combineReducers } from 'redux';
import metricsReducer from './metrics/metrics.reducer';

const rootReducer = combineReducers({
  metrics: metricsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
