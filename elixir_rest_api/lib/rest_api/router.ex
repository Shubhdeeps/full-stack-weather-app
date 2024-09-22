defmodule RestApi.Router do
  use Plug.Router

  plug(Plug.Logger)

  plug Corsica,
  origins: "*",
  log: [rejected: :error, invalid: :warn, accepted: :debug],
  allow_headers: :all,
  allow_credentials: true

  plug(:match)



  plug(Plug.Parsers, parsers: [:json], pass: ["application/json"], json_decoder: Jason)

  plug(:dispatch)

  post "/" do
    {:ok, _body, conn} = Plug.Conn.read_body(conn)
    {:ok, resp} = Jason.decode(conn.body_params)
    IO.inspect(resp, label: "The data")
    send_resp(conn, 200, "OK")
  end

  post "/daily" do
    {:ok, _body, conn} = Plug.Conn.read_body(conn)
    resp = conn.body_params
    response_json = WeatherApi.APICalls.get_daily(Map.get(resp, "lat"), Map.get(resp, "lon"), Map.get(resp, "no_of_days"))
    send_resp(conn, 200, response_json)
  end

  post "/hourly" do
    {:ok, _body, conn} = Plug.Conn.read_body(conn)
    resp = conn.body_params
    response_json = WeatherApi.APICalls.get_hourly(Map.get(resp, "lat"), Map.get(resp, "lon"), Map.get(resp, "start_date"), Map.get(resp, "end_date"))

    send_resp(conn, 200, response_json)
  end

  post "/current_weather" do
    {:ok, _body, conn} = Plug.Conn.read_body(conn)
    resp = conn.body_params
    response_json = WeatherApi.APICalls.get_current_day(Map.get(resp, "lat"), Map.get(resp, "lon"));

    send_resp(conn, 200, response_json)
  end


  post "/geo-coding" do
    {:ok, _body, conn} = Plug.Conn.read_body(conn)
    resp = conn.body_params
    response_json = WeatherApi.APICalls.get_geo_coding(Map.get(resp, "search-text"))
    send_resp(conn, 200, response_json)
  end

  match _ do
    send_resp(conn, 404, "Not Found")
  end
end
