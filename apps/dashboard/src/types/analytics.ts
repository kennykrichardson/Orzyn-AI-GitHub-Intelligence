export interface AnalyticsData {
  productivity_score: number;

  velocity_score: number;

  bus_factor: number;

  risk_score: number;

  health_score: number;
}

export interface Snapshot {
  id: number;

  repository_id: number;

  productivity_score: number;

  velocity_score: number;

  bus_factor: number;

  risk_score: number;

  health_score: number;

  recorded_at: string;
}

export interface InsightData {
  summary: string;

  recommendations: string[];

  risks: string[];
}