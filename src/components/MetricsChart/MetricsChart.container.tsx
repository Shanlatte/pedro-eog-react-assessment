import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';

const measurementQuery = gql`
query ($input: [MeasurementQuery]) {
      getMultipleMeasurements(input: $input) {
      metric,
      measurements{at,value,unit}
      } 
}
`;

type MetricsDataResponse = {
  getMultipleMeasurements: ResponseData[];
};

type MetricsDataVariable = {
  input: InputType[];
};

type InputType = {
  metricName: String,
  before: Number,
  after: Number
};
type ResponseData = {
  metric: String,
  measurements : Measurement[]
};
type Measurement = {
  at: Number,
  value: Number,
  unit: String
};
const MetricsChartContainer : FC = () => {
  const metrics = useSelector((state: RootState) => state.metrics.metrics) || [];

  const measurementRes = useQuery<MetricsDataResponse, MetricsDataVariable>(
    measurementQuery,
    {
      variables: {
        input: metrics.map(x => ({
          metricName: x,
          before: 1629512492714,
          after: 1629512477940,
        }) || []),
      },
    },
  );

  const { data } = measurementRes;
  console.log('DATA', data);
  return <div>Hols</div>;
};

export default MetricsChartContainer;
