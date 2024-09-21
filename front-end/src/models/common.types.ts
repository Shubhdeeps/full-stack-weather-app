export type ApparentTemperature = {
  in_c: number;
  in_f: number;
};

export type PrecipitationHours = {
  unit: string;
  has_precipitation: boolean;
  hour_of_day: number;
};

export type Time = {
  format: string;
  unix: number;
  event_in_days: number;
  event_in_hours: number;
  event_in_seconds: number;
};

export type WindSpeed = {
  km_per_h: number;
  m_per_s: number;
};

export type Visibility = {
  distance_in_km: number;
  distance_in_meter: number;
};
