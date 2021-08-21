export type Measurement = {
  metric:String,
  at: Number,
  value: Number,
  unit: String
};

export type Measurements = {
  metric: string,
  measurements : Measurement[]
};
