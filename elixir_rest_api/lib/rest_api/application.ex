defmodule RestApi.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Starts a worker by calling: RestApi.Worker.start_link(arg)
      # {RestApi.Worker, arg}
      {Plug.Cowboy,
       scheme: :http, plug: RestApi.Router, options: [port: Application.get_env(:rest_api, :port)]}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: RestApi.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
