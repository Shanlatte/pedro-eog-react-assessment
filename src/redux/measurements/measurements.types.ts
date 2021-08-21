import { Measurements } from '../../types';
import { SET_MEASUREMENTS } from './measurements.constants';

// Metrics State
export interface MeasurementState {
  measurements: Measurements[],
}

// Metrics Actions
interface SetMeaurementsAction {
  type: typeof SET_MEASUREMENTS
  payload: Measurements[]
}
export type MetricsActionTypes = (
  SetMeaurementsAction);
