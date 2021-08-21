/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, Key } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { RootState } from '../../redux/root-reducer';

const metricColors = ['green', 'blue', 'purple', 'red', 'teal', 'black'];
const MetricsChart : FC = () => {
  const measurements = useSelector((state: RootState) => state.measurements.measurements);

  const timestamptoDateFormatter = (date: any, value?: boolean): string => {
    if (value) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return moment(date).format(' h:mm a');
  };

  return (
    <ResponsiveContainer width="95%" height="100%" minHeight='0' minWidth='0'>
      <LineChart
        width={100}
        height={100}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          allowDuplicatedCategory={false}
          dataKey="at"
          tickFormatter={(val) => timestamptoDateFormatter(val)}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        {measurements.map((measure, index) => (
          <Line
            key={measure.metric as Key}
            name={measure.metric}
            data={measure.measurements || []}
            type="monotone"
            dataKey="value"
            stroke={metricColors[index]}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
export default MetricsChart;
