export type Measurement = {
  metric:string,
  at: Number,
  value: Number,
  unit: string
};

export type Measurements = {
  metric: string,
  measurements : Measurement[]
};

export type NewMetricsType = {
  oilTemp: Measurement;
  tubingPressure: Measurement;
  casingPressure: Measurement;
  waterTemp: Measurement;
  injValveOpen: Measurement;
  flareTemp: Measurement;
};
export type MetricsLiteral = keyof NewMetricsType;
