import React, { FC } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useGeolocation } from 'react-use';
import LinearProgress from '@material-ui/core/LinearProgress';
import { toast } from 'react-toastify';
import Chip from '../../components/Chip/Chip.component';
import Weather from './Weather.component';
import { WeatherDataResponse } from './types';

const query = gql`
  query ($latLong: WeatherQuery!) {
    getWeatherForLocation(latLong: $latLong) {
      description
      locationName
      temperatureinCelsius
    }
  }
`;

const WeatherContainer: FC = () => {
  const getLocation = useGeolocation();
  // Default to houston
  const latLong = {
    latitude: getLocation.latitude || 29.7604,
    longitude: getLocation.longitude || -95.3698,
  };
  const { loading, error, data } = useQuery<WeatherDataResponse>(query, {
    variables: {
      latLong,
    },
  });

  if (loading) return <LinearProgress />;
  if (error) {
    toast.error('Error getting weather!', {
      position: toast.POSITION.TOP_LEFT,
    });
  }
  if (!data) return <Chip label="Weather not found" />;
  const { locationName, description, temperatureinCelsius } = data.getWeatherForLocation;

  return (
    <Weather
      locationName={locationName}
      description={description}
      temperatureinCelsius={temperatureinCelsius}
    />
  );
};

export default WeatherContainer;
