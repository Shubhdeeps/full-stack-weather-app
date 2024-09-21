import CurrentWeatherCard from "./components/Card/CurrentWeatherCard";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <h1 className="text-xl font-extralight text-red-400">Hello</h1>
      <CurrentWeatherCard />
    </Layout>
  );
}

export default App;
