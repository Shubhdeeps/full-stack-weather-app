import { mockCurrent, MockDataDaily, MockDataHourly } from "./assets/mock";
import CurrentWeatherCard from "./components/Card/CurrentWeatherCard";
import GeoCodedCard from "./components/Card/GeoCodedCard";
import ForecastContainer from "./components/Containers/ForecastContainer";
import HighlightsContainer from "./components/Containers/HighlightsContainer";
import Layout from "./components/Layout/Layout";

function App() {
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
