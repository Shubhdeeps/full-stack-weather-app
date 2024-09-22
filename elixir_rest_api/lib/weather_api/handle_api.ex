defmodule WeatherApi.HandleApi do
  def handle(url) do
    resp_body =
      case WeatherApi.ApiWrapper.get(url) do
        {:ok, response} -> Jason.decode(response.body)
        {:error, _response} -> []
      end

    {:ok, body} = resp_body
    body
  end

  def process_data(body, type) do
    IO.inspect(body)
    processed = WeatherApi.ProcessData.process(Map.get(body, type))

    json_fy(processed)
  end

  def json_fy(data) do
    {:ok, json} = Jason.encode(data)
    json
  end
end
