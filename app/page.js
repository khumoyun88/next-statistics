
import CovidData from "./comonents/covid/covidStatistics";
import LineChart from "./comonents/graph/LineChart";

export default function Home() {
  return (
    <>
      <div className="h-[400px]">
        <LineChart />
      </div>

      <div>
        <CovidData/>
      </div>
    </>
  );
}
