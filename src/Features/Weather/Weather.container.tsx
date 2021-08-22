import React, { FC } from 'react';
import {
  useQuery,
  gql,
} from '@apollo/client';
import { useGeolocation } from 'react-use';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from '@material-ui/core';
import Chip from '../../components/Chip/Chip.component';
import Weather from './Weather.component';

const query = gql`
  query ($latLong: WeatherQuery!) {
    getWeatherForLocation(latLong: $latLong) {
      description
      locationName
      temperatureinCelsius
    }
  }
`;

type WeatherData = {
  temperatureinCelsius: number;
  description: string;
  locationName: string;
};
type WeatherDataResponse = {
  getWeatherForLocation: WeatherData;
};

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
  if (error) return <Typography color="error">{error}</Typography>;
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
