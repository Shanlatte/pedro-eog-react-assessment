import { MetricsActionTypes } from './measurements.types';
import { SET_MEASUREMENTS } from './measurements.constants';
import { Measurements } from '../../types';

export const setMeasurements = (measurements: Measurements[]): MetricsActionTypes => ({
  type: SET_MEASUREMENTS,
  payload: measurements,
});
