import React, { FC } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { setMetrics } from '../../redux/metrics/metrics.actions';
import useStyles from './styles';
import { MetricsSelectorProps } from './types';

const MetricsSelector : FC<MetricsSelectorProps> = ({ metrics }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (metricsArray : string[]) => {
    dispatch(setMetrics(metricsArray));
  };

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={metrics || []}
        getOptionLabel={(option) => option}
        onChange={(event, value) => handleChange(value)}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...params}
            variant="standard"
            label="Metrics"
            placeholder=""
          />
        )}
      />
    </div>
  );
};

export default MetricsSelector;
