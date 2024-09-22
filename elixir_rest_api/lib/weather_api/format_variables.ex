defmodule WeatherApi.FormatVariables do

  def format(key, value) do
    case key do
      "time" -> format_time(value)
      "weather_code" -> wmo_code_decoder(value)
      "temperature_2m_max" -> format_temperature(value)
      "temperature_2m_min" -> format_temperature(value)
      "apparent_temperature_max" -> format_temperature(value)
      "apparent_temperature_min" -> format_temperature(value)
      "apparent_temperature" -> format_temperature(value)
      "sunrise" -> format_time(value)
      "sunset" -> format_time(value)
      "daylight_duration" -> format_duration(value)
      "sunshine_duration" -> format_duration(value)
      "precipitation_sum" -> format_sum(value)
      "rain_sum" -> format_sum(value)
      "showers_sum" -> format_sum(value)
      "snowfall_sum" -> format_sum(value)
      "precipitation_hours" -> format_upcoming_hours(value)
      "precipitation_probability_max" -> format_percentage(value)
      "precipitation_probability" -> format_percentage(value)
      "wind_speed_10m_max" -> format_speed(value)
      "wind_gusts_10m_max" -> format_speed(value)
      "relative_humidity_2m" -> format_percentage(value)
      "precipitation" -> format_sum(value)
      "visibility" -> format_distance(value)
      "is_day" -> format_number_to_boolean(value)
      _ -> value
    end
  end
  defp format_time(unix) do
    current = DateTime.utc_now(:second)
    diff = unix - DateTime.to_unix(current)
    IO.inspect("Now #{DateTime.to_unix(current)}, unix: #{unix}")

    hours = Float.ceil(diff / 3600)

    %{
      event_in_days: Float.ceil(hours / 24),
      event_in_hours: hours,
      event_in_seconds: diff,
      unix: unix,
      format: "unix"
    }
  end

  defp format_number_to_boolean(value) do
    case value do
      0 -> false
      1 -> true
    end
  end
  defp format_distance(value) do
    %{
      distance_in_meter: value,
      distance_in_km: Float.round(value / 1000, 2),
    }
  end
  defp format_percentage(value) do
     value
  end
  defp format_upcoming_hours(value) do

    %{
      has_precipitation: value != 0,
      hour_of_day: value,
      unit: case value < 12 do
        true -> "AM"
        _ -> "PM"
      end
    }
  end

  # rain in mm
  defp format_sum(value) do
    value
  end

  defp wmo_code_decoder(wmo) do
    map = %{
      0 => "Clear Sky",
      1 => "Mainly Clear",
      2 => "Partly Cloudy",
      3 => "Overcast",
      45 => "Fog",
      48 => "Rime Fog",
      51 => "Light Drizzle",
      53 => "Moderate Drizzle",
      55 => "Dense Drizzle",
      56 => "Freezing Drizzle",
      57 => "Dense Freezing Drizzle",
      61 => "Slight Rain",
      63 => "Moderate Rain",
      65 => "Heavy Rain",
      66 => "Freezing Rain",
      67 => "Heavy Freezing Rain",
      71 => "Slight Snow fall",
      73 => "Moderate Snow fall",
      75 => "Heavy Snow fall",
      77 => "Snow grains",
      80 => "Slight Rain shower",
      81 => "Moderate Rain shower",
      82 => "Violent Rain shower",
      85 => "Slight Snow shower",
      86 => "Heavy Snow shower",
      95 => "Thunderstorm",
      96 => "Slight Thunderstorm",
      99 => "Heavy Hail"
    }

    %{
      code: wmo,
      name:  map[wmo] || "unknown"
    }

  end

  defp format_temperature(temp) do
    %{
      in_c: temp,
      in_f: Float.round(9 / 5 * temp + 32, 1)
    }
  end

  defp format_duration(seconds) do
    rounded_seconds = round(seconds)

    "#{div(rounded_seconds, 3600)}:#{rem(rounded_seconds, 3600) |> div(60)}:#{rem(rounded_seconds, 3600) |> rem(60)}"
  end

  defp format_speed(speed) do
    %{
      km_per_h: speed,
      m_per_s: Float.round(speed / 3.6, 2)
    }
  end
end
