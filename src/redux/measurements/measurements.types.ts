import { Measurements } from '../../types';
import { SET_MEASUREMENTS, UPDATE_HEARTBEAT } from './measurements.constants';

// Metrics State
export interface MeasurementState {
  measurements: Measurements[],
  before: number,
  after: number
}

// Metrics Actions
interface SetMeaurementsAction {
  type: typeof SET_MEASUREMENTS
  payload: Measurements[]
}

interface UpdateHeartbeatAction {
  type: typeof UPDATE_HEARTBEAT
  payload: number
}

export type MetricsActionTypes = (
  SetMeaurementsAction | UpdateHeartbeatAction);
