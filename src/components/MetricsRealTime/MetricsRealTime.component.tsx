import { Avatar } from '@material-ui/core';
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
      {metrics.map((metric, index) => (
        <Avatar
          key={metric}
          className={classes.orange}
          style={{ backgroundColor: metricColors[index] }}
        > {newMeasurement[metric as MetricsLiteral].value}
        </Avatar>
      ))}
    </div>
  );
};
export default MetricsRealTime;
