import { SET_METRICS } from './metrics.constants';

// Metrics State
export interface MetricsState {
  metrics: string[] | null,
}

// Metrics Actions
interface SetMetricsAction {
  type: typeof SET_METRICS
  payload: string[]
}
export type MetricsActionTypes = (
  SetMetricsAction);
