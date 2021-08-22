import React, { FC } from 'react';
import { gql, useSubscription } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { Measurement } from '../../types';
import MetricsRealTime from './MetricsRealTime.component';
import { setNewMeasure } from '../../redux/measurements/measurements.actions';
import { RootState } from '../../redux/root-reducer';

const newMeasurementSubscription = gql`
subscription {
  newMeasurement {
    metric
    at
    value
    unit
  }
}
`;

export type NewMeasurementDataResponse = {
  newMeasurement: Measurement;
};

const MetricsRealTimeContainer : FC = () => {
  const dispatch = useDispatch();
  const metrics = useSelector((state: RootState) => state.metrics.metrics) || [];

  useSubscription<NewMeasurementDataResponse>(newMeasurementSubscription, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (metrics.length && subscriptionData.data?.newMeasurement) {
        dispatch(setNewMeasure(subscriptionData.data?.newMeasurement!));
      }
    },
  });

  return <MetricsRealTime />;
};

export default MetricsRealTimeContainer;
