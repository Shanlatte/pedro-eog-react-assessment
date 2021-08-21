export type Measurement = {
  metric:String,
  at: Number,
  value: Number,
  unit: string
};

export type Measurements = {
  metric: string,
  measurements : Measurement[]
};
