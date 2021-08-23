import { MeasurementState, MeasurementsActionTypes } from './measurements.types';
import {
  SET_MEASUREMENTS,
  UPDATE_HEARTBEAT,
  SET_NEW_MEASURE,
  SET_LOADING,
} from './measurements.constants';

const INITIAL_STATE: MeasurementState = {
  measurements: [],
  before: 0,
  after: 0,
  loading: false,
  newMeasurements: {
    oilTemp: {
      unit: '',
      metric: '',
      at: 0,
      value: 0,
    },
    casingPressure: {
      unit: '',
      metric: '',
      at: 0,
      value: 0,
    },
    flareTemp: {
      unit: '',
      metric: '',
      at: 0,
      value: 0,
    },
    injValveOpen: {
      unit: '',
      metric: '',
      at: 0,
      value: 0,
    },
    tubingPressure: {
      unit: '',
      metric: '',
      at: 0,
      value: 0,
    },
    waterTemp: {
      unit: '',
      metric: '',
      at: 0,
      value: 0,
    },
  },
};

const metricsReducer = (state = INITIAL_STATE, action: MeasurementsActionTypes):
MeasurementState => {
  switch (action.type) {
    case SET_MEASUREMENTS:
      return {
        ...state,
        loading: false,
        measurements: action.payload,
      };
    case UPDATE_HEARTBEAT:
      return {
        ...state,
        before: action.payload,
        after: (action.payload - 1800000),
      };
    case SET_NEW_MEASURE:
      return {
        ...state,
        newMeasurements: {
          ...state.newMeasurements,
          [action.payload.metric]: action.payload,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default metricsReducer;
