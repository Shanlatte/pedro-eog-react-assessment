import React, { FC, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { RootState } from '../../redux/root-reducer';
import { setLoading, setMeasurements } from '../../redux/measurements/measurements.actions';
import MetricsChart from './MetricsChart.component';
import { MeasurementsDataResponse, MeasurementsDataVariable } from './types';

const measurementQuery = gql`
query ($input: [MeasurementQuery]) {
      getMultipleMeasurements(input: $input) {
      metric,
      measurements{metric, at,value,unit}
      } 
}
`;

const MetricsChartContainer : FC = () => {
  const metrics = useSelector((state: RootState) => state.metrics.metrics) || [];
  const after = useSelector((state: RootState) => state.measurements.after);
  const before = useSelector((state: RootState) => state.measurements.before);
  const dispatch = useDispatch();

  const [getMeasures] = useLazyQuery<MeasurementsDataResponse, MeasurementsDataVariable>(
    measurementQuery, {
      onError: () => toast.error('Error getting measurements!', {
        position: toast.POSITION.TOP_LEFT,
      }),
      onCompleted: (data) => {
        dispatch(setMeasurements(data.getMultipleMeasurements));
      },
    },
  );

  useEffect(() => {
    dispatch(setLoading(true));
    getMeasures({
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
