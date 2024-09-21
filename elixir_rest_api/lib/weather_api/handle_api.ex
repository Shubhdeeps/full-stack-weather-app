defmodule WeatherApi.HandleApi do
  def handle(url, type) do
    resp_body =
      case WeatherApi.ApiWrapper.get(url) do
        {:ok, response} -> Jason.decode(response.body)
        {:error, _response} -> []
      end

    {:ok, body} = resp_body

    processed = WeatherApi.ProcessData.process(Map.get(body, type))

    {:ok, json} = Jason.encode(processed)
    json
  end
end
