defmodule RestApi.Router do
  use Plug.Router

  plug(Plug.Logger)

  plug(:match)

  plug(Plug.Parsers, parsers: [:json], pass: ["application/json"], json_decoder: Jason)

  plug(:dispatch)

  get "/" do

    send_resp(conn, 200, "OK")
  end

  get "/daily" do
    {:ok, body, _conn} = Plug.Conn.read_body(conn)
    {:ok, resp} = Jason.decode(body)
    response_json = WeatherApi.APICalls.get_daily(Map.get(resp, "lat"), Map.get(resp, "lon"), Map.get(resp, "no_of_days"))
    send_resp(conn, 200, response_json)
  end
  get "/hourly" do
    {:ok, body, _conn} = Plug.Conn.read_body(conn)
    {:ok, resp} = Jason.decode(body)
    response_json = WeatherApi.APICalls.get_hourly(Map.get(resp, "lat"), Map.get(resp, "lon"), Map.get(resp, "start_date"), Map.get(resp, "end_date"))

    send_resp(conn, 200, response_json)
  end

  match _ do
    send_resp(conn, 404, "Not Found")
  end
end
