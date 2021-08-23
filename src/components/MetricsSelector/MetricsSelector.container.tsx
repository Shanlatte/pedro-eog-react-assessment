import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import { toast } from 'react-toastify';
import MetricsSelector from './MetricsSelector.component';
import { MetricsDataResponse } from './types';

const query = gql`
  query {
    getMetrics 
  }
`;

const MetricsSelectorContainer : FC = () => {
  const { data, error } = useQuery<MetricsDataResponse>(query);

  if (error) {
    toast.error('Error getting metrics!', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: false,
    });
  }
  return <MetricsSelector metrics={data?.getMetrics || []} />;
};

export default MetricsSelectorContainer;
