import { Chip, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';
import useStyles from './styles';
import { MetricsLiteral } from '../../types/index';

const MetricsRealTime : FC = () => {
  const metricColors = ['green', 'blue', 'purple', 'red', 'teal', 'black'];
  const metrics = useSelector((state: RootState) => state.metrics.metrics) || [];
  const newMeasurement = useSelector((state: RootState) => state.measurements.newMeasurements);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h6" component="h2" gutterBottom>
        Real Time Measures
      </Typography>
      {metrics.map((metric, index) => (
        <Chip
          key={metric}
          variant="outlined"
          className={classes.orange}
          style={{ backgroundColor: metricColors[index] }}
          label={`${metric}: ${newMeasurement[metric as MetricsLiteral].value}`}
        />
      ))}
    </div>
  );
};
export default MetricsRealTime;
