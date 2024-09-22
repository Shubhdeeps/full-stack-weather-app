export interface GeoCodeModel {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id?: number;
  timezone: string;
  country_id: number;
  country: string;
}
