base url: https://api.open-meteo.com/v1/forecast
Lottie: https://lottiefiles.com/d264bhmrid6j0w1s
loader: https://lottiefiles.com/free-animation/weather-wind-UlIP3IeK47
Base
https://api.open-meteo.com/v1/forecast

Lat and Longitude
?latitude=52.52&longitude=13.41

for future number of days
&forecast_days=14

for current day and future 7 days
&current=

for past days
&past_days=3

Options
temperature_2m,
wind_speed_10m&hourly=temperature_2m,
relative_humidity_2m,
wind_speed_10m

for Historical day
https://archive-api.open-meteo.com/v1/era5?latitude=52.52&longitude=13.41&start_date=2021-01-01&end_date=2021-12-31&hourly=temperature_2m

hourly based on day
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,weather_code,visibility,uv_index,is_day&forecast_days=1

daily
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&forecast_days=7

hourly for: specific future day
https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weather_code,visibility,uv_index,is_day&start_date=2024-09-21&end_date=2024-09-21
