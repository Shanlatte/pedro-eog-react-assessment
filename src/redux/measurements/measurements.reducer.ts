import {
  MeasurementState,
  MetricsActionTypes,
} from './measurements.types';
import { SET_MEASUREMENTS } from './measurements.constants';

const INITIAL_STATE: MeasurementState = {
  measurements: [],
};

const metricsReducer = (state = INITIAL_STATE, action: MetricsActionTypes): MeasurementState => {
  switch (action.type) {
    case SET_MEASUREMENTS:
      return {
        ...state,
        measurements: action.payload,
      };
    default:
      return state;
  }
};

export default metricsReducer;
