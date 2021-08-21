import { MetricsActionTypes } from './measurements.types';
import { SET_MEASUREMENTS, UPDATE_HEARTBEAT } from './measurements.constants';
import { Measurements } from '../../types';

export const setMeasurements = (measurements: Measurements[]): MetricsActionTypes => ({
  type: SET_MEASUREMENTS,
  payload: measurements,
});

export const updateHeartBeat = (newTime: number): MetricsActionTypes => ({
  type: UPDATE_HEARTBEAT,
  payload: newTime,
});
