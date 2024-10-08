defmodule WeatherApi.ProcessData do

  def process_current(map) do
    loop_current(Map.keys(map), Map.values(map), %{});
  end

  defp loop_current([], [], map), do: map
  defp loop_current([key | tail], [value | value_tail], map) do
    loop_current(tail, value_tail, Map.put_new(map, key, WeatherApi.FormatVariables.format(key, value)))
  end

  def process(key_values_map) do
    loop([], key_values_map, -1, %{}, [])
  end

  def loop([], key_values_map, count, cache_map, response_list) do
    loop(Map.keys(key_values_map), key_values_map, count + 1, %{}, [cache_map | response_list])
  end

  def loop([key | keys_tail], key_values_map, count, cache_map, response_list) do
    case Map.get(key_values_map, key) |> Enum.at(count) do
      nil ->
        [_head | tail] = Enum.reverse(response_list)
        tail

      value ->
        loop(
          keys_tail,
          key_values_map,
          count,
          Map.put_new(cache_map, key, WeatherApi.FormatVariables.format(key, value)),
          response_list
        )
    end
  end
end
