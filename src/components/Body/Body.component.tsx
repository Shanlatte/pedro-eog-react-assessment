import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import MetricsSelectorContainer from '../MetricsSelector/MetricsSelector.container';
import MetricsChartContainer from '../MetricsChart/MetricsChart.container';
import { RootState } from '../../redux/root-reducer';
import useStyles from './styles';
import MetricsRealTimeContainer from '../MetricsRealTime/MetricsRealTime.container';

const Body : FC = () => {
  const metrics = useSelector((state: RootState) => state.metrics.metrics) || [];
  const isLoading = useSelector((state: RootState) => state.measurements.loading);
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <MetricsSelectorContainer />
      </Grid>
      {(metrics.length !== 0) ? (
        <Grid className={classes.chart} item xs={10}>
          <MetricsChartContainer />
        </Grid>
      ) : null }
      {!isLoading
        ? (
          <Grid hidden={metrics.length === 0} item xs={2}>
            <MetricsRealTimeContainer />
          </Grid>
        ) : null}
    </Grid>
  );
};

export default Body;
