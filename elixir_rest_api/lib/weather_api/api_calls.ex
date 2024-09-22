defmodule WeatherApi.APICalls do
  @weather_params_daily "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max"
  @weather_params_hourly "relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,visibility,uv_index,is_day"
  @base_url "https://api.open-meteo.com/v1/forecast?"

  @spec get_daily(integer(), integer(), integer()) :: list()
  def get_daily(lat, lon, no_of_days) do
    url =  @base_url <>
      "latitude=#{lat}&longitude=#{lon}&forecast_days=#{no_of_days}&daily=" <>
        @weather_params_daily

    WeatherApi.HandleApi.handle(url)
    |> WeatherApi.HandleApi.process_data("daily")
  end

  @spec get_hourly(integer(), integer(), integer(), integer()) :: list()
  def get_hourly(lat, lon, start_unix, end_unix) do
    {:ok, start_date} = DateTime.from_unix(start_unix)
    {:ok, end_date} = DateTime.from_unix(end_unix)
    start_iso = Calendar.strftime(start_date, "%y-%m-%d")
    end_iso = Calendar.strftime(end_date, "%y-%m-%d")

    url =  @base_url <>
      "latitude=#{lat}&longitude=#{lon}&start_date=20#{start_iso}&end_date=20#{end_iso}&hourly=" <>
        @weather_params_hourly

    WeatherApi.HandleApi.handle(url)
    |> WeatherApi.HandleApi.process_data("hourly")
  end

  def get_current_day(lat, lon) do
    url =  @base_url <> "latitude=#{lat}&longitude=#{lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,surface_pressure,wind_speed_10m,wind_direction_10m"
    WeatherApi.HandleApi.handle(url)
    |> Map.get("current")
    |> WeatherApi.HandleApi.json_fy()

  end

  def get_geo_coding(text) do
    url = "https://geocoding-api.open-meteo.com/v1/search?name=#{text}&count=5&language=en&format=json"
    data_map = WeatherApi.HandleApi.handle(url)

    WeatherApi.HandleApi.json_fy(Map.get(data_map, "results"))
  end
end
