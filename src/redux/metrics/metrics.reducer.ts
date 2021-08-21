import {
  MetricsState,
  MetricsActionTypes,
} from './metrics.types';
import { SET_METRICS } from './metrics.constants';

const INITIAL_STATE: MetricsState = {
  metrics: [],
};

const metricsReducer = (state = INITIAL_STATE, action: MetricsActionTypes): MetricsState => {
  switch (action.type) {
    case SET_METRICS:
      return {
        ...state,
        metrics: action.payload,
      };
    default:
      return state;
  }
};

export default metricsReducer;
