import CurrentWeatherCard from "./components/Card/CurrentWeatherCard";
import GeoCodedCard from "./components/Card/GeoCodedCard";
import ForecastContainer from "./components/Containers/ForecastContainer";
import HighlightsContainer from "./components/Containers/HighlightsContainer";
import Layout from "./components/Layout/Layout";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { currentWeather, dailyWeather, hourlyWeather, geoCode } = useFetch();
  console.log({ currentWeather, dailyWeather, hourlyWeather });

  if (!currentWeather || dailyWeather.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="flex flex-col gap-6 my-20">
        <div className="text-white font-medium text-lg">Weather</div>

        <div className="flex gap-6">
          <CurrentWeatherCard
            city={geoCode!.name}
            country={geoCode!.country}
            data={currentWeather}
          />
          <HighlightsContainer
            currentWeather={currentWeather}
            hourlyWeather={hourlyWeather}
            sunrise={dailyWeather[0].sunrise}
            sunset={dailyWeather[0].sunset}
          />
        </div>
        <div className="text-white font-medium text-lg">7 days Forecast</div>
        <div className="flex gap-6  h-[200px]">
          <ForecastContainer forecastItems={dailyWeather} />
          <GeoCodedCard />
        </div>
      </div>
    </Layout>
  );
}

export default App;
