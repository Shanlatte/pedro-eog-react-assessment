import { MetricsActionTypes } from './metrics.types';
import { SET_METRICS } from './metrics.constants';

export const setMetrics = (metrics: string[]): MetricsActionTypes => ({
  type: SET_METRICS,
  payload: metrics,
});
