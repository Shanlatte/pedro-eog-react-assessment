export type WeatherData = {
  temperatureinCelsius: number;
  description: string;
  locationName: string;
};

export type WeatherDataResponse = {
  getWeatherForLocation: WeatherData;
};

export type WeatherProps = {
  locationName: string,
  description: string,
  temperatureinCelsius: number,
};
