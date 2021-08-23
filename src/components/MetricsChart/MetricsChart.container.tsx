import React, { FC, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import { Measurements } from '../../types';
import { setLoading, setMeasurements } from '../../redux/measurements/measurements.actions';
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

  const [get] = useLazyQuery<MeasurementsDataResponse, MeasurementsDataVariable>(
    measurementQuery, {
      onError: () => <div>errir</div>,
      onCompleted: (data) => {
        dispatch(setMeasurements(data.getMultipleMeasurements));
      },
    },
  );

  useEffect(() => {
    dispatch(setLoading(true));
    get({
      variables: {
        input: metrics.map(metric => ({
          metricName: metric,
          before,
          after,
        }) || []),
      },

    });
  }, [metrics]);

  return <MetricsChart />;
};

export default MetricsChartContainer;
