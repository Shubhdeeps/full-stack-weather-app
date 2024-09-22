import { useEffect } from "react";
import { mockCurrent, MockDataDaily, MockDataHourly } from "./assets/mock";
import CurrentWeatherCard from "./components/Card/CurrentWeatherCard";
import GeoCodedCard from "./components/Card/GeoCodedCard";
import ForecastContainer from "./components/Containers/ForecastContainer";
import HighlightsContainer from "./components/Containers/HighlightsContainer";
import Layout from "./components/Layout/Layout";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [setGeoCode] = useFetch();

  useEffect(() => {
    setTimeout(() => {
      console.log("start fetchibg,,,");
      setGeoCode({
        admin1_id: 2950157,
        country: "Germany",
        country_code: "DE",
        country_id: 2921044,
        elevation: 74.0,
        feature_code: "PPLC",
        id: 2950159,
        latitude: 52.52437,
        longitude: 13.41053,
        name: "Berlin",
        timezone: "Europe/Berlin",
      });
    }, 5000);
  }, []);
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <CurrentWeatherCard data={mockCurrent} />
          <HighlightsContainer
            currentWeather={mockCurrent}
            hourlyWeather={MockDataHourly}
          />
        </div>
        <div className="text-white font-medium text-lg">7 days Forecast</div>
        <div className="flex gap-6  h-[200px]">
          <ForecastContainer forecastItems={MockDataDaily} />
          <GeoCodedCard />
        </div>
      </div>
    </Layout>
  );
}

export default App;
