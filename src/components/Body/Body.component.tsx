import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import MetricsSelectorContainer from '../MetricsSelector/MetricsSelector.container';
import MetricsChartContainer from '../MetricsChart/MetricsChart.container';
import { RootState } from '../../redux/root-reducer';
import useStyles from './styles';
import MetricsRealTimeContainer from '../MetricsRealTime/MetricsRealTime.container';

const Body : FC = () => {
  const metrics = useSelector((state: RootState) => state.metrics.metrics);
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={8}>
        <MetricsRealTimeContainer />
      </Grid>
      <Grid item xs={4}>
        <MetricsSelectorContainer />
      </Grid>
      {metrics?.length && (
        <Grid className={classes.chart} item xs={12}>
          <MetricsChartContainer />
        </Grid>
      )}
    </Grid>
  );
};

export default Body;
