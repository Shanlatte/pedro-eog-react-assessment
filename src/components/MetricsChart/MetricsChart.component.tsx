import React, { FC, Key } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import moment from 'moment';
import {
  Box, Paper, Typography, CircularProgress,
} from '@material-ui/core';
import { RootState } from '../../redux/root-reducer';
import useStyles from './styles';

const MetricsChart : FC = () => {
  const metricColors = ['green', 'blue', 'purple', 'red', 'teal', 'black'];
  const measurements = useSelector((state: RootState) => state.measurements.measurements);
  const isLoading = useSelector((state: RootState) => state.measurements.loading);
  const classes = useStyles();

  const unitValidation = (unit : string) => (
    !measurements.some(measurement => measurement.measurements[0].unit === unit));

  const CustomTooltip = ({ active, payload, label } :any) => {
    const timeFormated = moment(label).format('MMMM Do YYYY, h:mm:ss a');

    if (active && payload && payload.length) {
      return (
        <div>
          <Paper className={classes.tooltipPaper}>
            <Box p={1}>
              <Typography variant="body2" className={classes.datetTitle}>
                {`${timeFormated}`}
              </Typography>
              {payload.map((metric :any) => (
                <Typography key={metric.name} variant="body2" className={classes.title}>
                  - {`${metric.name} : ${metric.value} ${metric.payload.unit}`}
                </Typography>
              ))}
            </Box>
          </Paper>
        </div>
      );
    }
    return null;
  };
  return (
    <Box className={classes.root}>
      {isLoading ? <CircularProgress className={classes.loading} disableShrink /> : (
        <ResponsiveContainer>
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
            {['PSI', '%', 'F'].map(unit => (
              <YAxis
                yAxisId={unit}
                dataKey="value"
                key={unit}
                label={{ value: unit, angle: -90, position: 'insideTopLeft' }}
                hide={unitValidation(unit)}
              />
            ))}
            <Tooltip content={<CustomTooltip />} />
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
      )}
    </Box>
  );
};
export default MetricsChart;
