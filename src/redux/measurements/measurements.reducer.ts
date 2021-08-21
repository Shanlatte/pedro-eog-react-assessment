import {
  MeasurementState,
  MetricsActionTypes,
} from './measurements.types';
import { SET_MEASUREMENTS, UPDATE_HEARTBEAT } from './measurements.constants';

const INITIAL_STATE: MeasurementState = {
  measurements: [],
  before: 0,
  after: 0,
};

const metricsReducer = (state = INITIAL_STATE, action: MetricsActionTypes): MeasurementState => {
  switch (action.type) {
    case SET_MEASUREMENTS:
      return {
        ...state,
        measurements: action.payload,
      };
    case UPDATE_HEARTBEAT:
      return {
        ...state,
        before: action.payload,
        after: (action.payload - 1800000),
      };
    default:
      return state;
  }
};

export default metricsReducer;
