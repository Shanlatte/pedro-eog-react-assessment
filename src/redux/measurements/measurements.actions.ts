import { MeasurementsActionTypes } from './measurements.types';
import { Measurement, Measurements } from '../../types';
import {
  SET_MEASUREMENTS,
  UPDATE_HEARTBEAT,
  SET_NEW_MEASURE,
  SET_LOADING,
} from './measurements.constants';

export const setMeasurements = (measurements: Measurements[]): MeasurementsActionTypes => ({
  type: SET_MEASUREMENTS,
  payload: measurements,
});

export const updateHeartBeat = (newTime: number): MeasurementsActionTypes => ({
  type: UPDATE_HEARTBEAT,
  payload: newTime,
});

export const setNewMeasure = (newMeasure: Measurement): MeasurementsActionTypes => ({
  type: SET_NEW_MEASURE,
  payload: newMeasure,
});

export const setLoading = (loading: boolean): MeasurementsActionTypes => ({
  type: SET_LOADING,
  payload: loading,
});
