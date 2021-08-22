import React, { FC } from 'react';
import Chip from '../../components/Chip/Chip.component';

const toF = (c: number) => (c * 9) / 5 + 32;

type WeatherProps = {
  locationName: string,
  description: string,
  temperatureinCelsius: number,
};

const Weather: FC<WeatherProps> = ({ locationName, description, temperatureinCelsius }) => (
  <Chip
    label={`Weather in ${locationName}: ${description} and ${Math.round(toF(temperatureinCelsius))}°`}
  />
);

export default Weather;
