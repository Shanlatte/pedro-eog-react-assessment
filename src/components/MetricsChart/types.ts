import { Measurements } from '../../types';

export type MeasurementsDataResponse = {
  getMultipleMeasurements: Measurements[];
};

export type MeasurementsDataVariable = {
  input: InputType[];
};

export type InputType = {
  metricName: String,
  before: number,
  after: number
};
