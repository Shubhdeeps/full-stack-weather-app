defmodule WeatherApi.ApiWrapper do
  use HTTPoison.Base
  @base_url "https://api.open-meteo.com/v1/forecast?"

  def process_request_url(url) do
    @base_url <> url <> "&timeformat=unixtime"
   end
end
