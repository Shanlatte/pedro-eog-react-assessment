import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import MetricsSelector from './MetricsSelector.component';
import { MetricsDataResponse } from './types';

const query = gql`
  query {
    getMetrics 
  }
`;

const MetricsSelectorContainer : FC = () => {
  const { data } = useQuery<MetricsDataResponse>(query);

  return <MetricsSelector metrics={data?.getMetrics || []} />;
};

export default MetricsSelectorContainer;
