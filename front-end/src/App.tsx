import CurrentWeatherCard from "./components/Card/CurrentWeatherCard";
import HighlightsCard from "./components/Card/HighlightsCard";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="flex gap-6">
        <CurrentWeatherCard />
        <HighlightsCard />
      </div>
    </Layout>
  );
}

export default App;
