import { combineReducers } from 'redux';
import metricsReducer from './metrics/metrics.reducer';
import measurementsReducer from './measurements/measurements.reducer';

const rootReducer = combineReducers({
  metrics: metricsReducer,
  measurements: measurementsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
