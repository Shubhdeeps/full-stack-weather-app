defmodule WeatherApi.ApiWrapper do
  use HTTPoison.Base


  def process_request_url(url) do
   url <> "&timeformat=unixtime"
   end
end
