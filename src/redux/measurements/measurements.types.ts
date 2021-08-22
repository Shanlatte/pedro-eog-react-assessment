import { Measurements, Measurement } from '../../types';
import { SET_MEASUREMENTS, UPDATE_HEARTBEAT, SET_NEW_MEASURE } from './measurements.constants';

// Measurements State
export interface MeasurementState {
  measurements: Measurements[],
  before: number,
  after: number,
  newMeasurements: NewMeasurements,
}

export interface NewMeasurements {
  oilTemp: Measurement,
  casingPressure: Measurement,
  flareTemp: Measurement,
  injValveOpen: Measurement,
  tubingPressure: Measurement,
  waterTemp: Measurement,
}

// Measurements Actions
interface SetMeaurementsAction {
  type: typeof SET_MEASUREMENTS
  payload: Measurements[]
}

interface UpdateHeartbeatAction {
  type: typeof UPDATE_HEARTBEAT
  payload: number
}

interface SetNewMeasureAction {
  type: typeof SET_NEW_MEASURE
  payload: Measurement
}

export type MeasurementsActionTypes = (
  SetMeaurementsAction | UpdateHeartbeatAction | SetNewMeasureAction);
