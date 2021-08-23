import { SET_METRICS } from './metrics.constants';

// Metrics State
export interface MetricsState {
  metrics: string[],
}

// Metrics Actions
interface SetMetricsAction {
  type: typeof SET_METRICS
  payload: string[]
}
export type MetricsActionTypes = (
  SetMetricsAction);
