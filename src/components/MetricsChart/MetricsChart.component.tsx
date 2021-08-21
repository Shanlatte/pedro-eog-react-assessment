import React, { FC, Key } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { RootState } from '../../redux/root-reducer';
import { Measurements } from '../../types';

const metricColors = ['green', 'blue', 'purple', 'red', 'teal', 'black'];
const MetricsChart : FC = () => {
  // eslint-disable-next-line max-len
  const measurements : Measurements[] = useSelector((state: RootState) => state.measurements.measurements);

  const CustomTooltip = ({ active, payload, label } :any) => {
    console.log(active, payload, label);
    const labelFormated = moment(label).format('MMMM Do YYYY, h:mm:ss a');
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: 'white' }}>
          <p className="label">{`${labelFormated}`}</p>
          {payload.map((metric :any) => (
            <p className="label">{`${metric.name} : ${metric.value}${metric.payload.unit}`}</p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="90%">
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
          tickFormatter={(val) => moment(val).format(' h:mm a')}
          interval={235}
        />
        <YAxis
          yAxisId='PSI'
          dataKey="value"
          label={{ value: 'PSI', angle: -90, position: 'insideTopLeft' }}
        />
        <YAxis
          yAxisId='%'
          dataKey="value"
          label={{ value: '%', angle: -90, position: 'insideTopLeft' }}
        />
        <YAxis
          yAxisId='F'
          dataKey="value"
          label={{ value: 'F', angle: -90, position: 'insideTopLeft' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {measurements.map((measure, index) => (
          <Line
            yAxisId={measure.measurements[0].unit}
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
