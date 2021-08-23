import React, { FC } from 'react';
import { gql, useSubscription } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import MetricsRealTime from './MetricsRealTime.component';
import { setNewMeasure } from '../../redux/measurements/measurements.actions';
import { RootState } from '../../redux/root-reducer';
import { NewMeasurementDataResponse } from './types';

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

const MetricsRealTimeContainer : FC = () => {
  const measurements = useSelector((state: RootState) => state.measurements.measurements) || [];
  const dispatch = useDispatch();

  useSubscription<NewMeasurementDataResponse>(newMeasurementSubscription, {
    onSubscriptionData: ({ subscriptionData }) => {
      if (measurements.length && subscriptionData.data?.newMeasurement) {
        dispatch(setNewMeasure(subscriptionData.data?.newMeasurement!));
      }
    },
  });

  return <MetricsRealTime />;
};

export default MetricsRealTimeContainer;
