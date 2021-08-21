import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { Measurements } from '../../types';
import { setMeasurements } from '../../redux/measurements/measurements.actions';
import MetricsChart from './MetricsChart.component';

const measurementQuery = gql`
query ($input: [MeasurementQuery]) {
      getMultipleMeasurements(input: $input) {
      metric,
      measurements{metric, at,value,unit}
      } 
}
`;

type MeasurementsDataResponse = {
  getMultipleMeasurements: Measurements[];
};

type MeasurementsDataVariable = {
  input: InputType[];
};

type InputType = {
  metricName: String,
  before: number,
  after: number
};

const MetricsChartContainer : FC = () => {
  const metrics = useSelector((state: RootState) => state.metrics.metrics) || [];
  const after = useSelector((state: RootState) => state.measurements.after);
  const before = useSelector((state: RootState) => state.measurements.before);
  const dispatch = useDispatch();
  useQuery<MeasurementsDataResponse, MeasurementsDataVariable>(
    measurementQuery,
    {
      variables: {
        input: metrics.map(metric => ({
          metricName: metric,
          before,
          after,
        }) || []),
      },
      onCompleted: (data) => {
        dispatch(setMeasurements(data.getMultipleMeasurements));
      },
    },
  );

  return <MetricsChart />;
};

export default MetricsChartContainer;
