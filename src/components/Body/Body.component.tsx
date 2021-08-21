import React, { FC } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import MetricsSelector from '../MetricsSelector/MetricsSelector.container';
import MetricsChartContainer from '../MetricsChart/MetricsChart.container';
import { RootState } from '../../redux/root-reducer';
import useStyles from './styles';

const Body : FC = () => {
  const metrics = useSelector((state: RootState) => state.metrics.metrics);
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={6}>
        <Paper>xs12</Paper>
      </Grid>
      <Grid item xs={6}>
        <MetricsSelector />
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
