import ForecastWidget from '@/components/widgets/ForecastWidget';
import Topbar from '../components/Topbar';
import WeatherOverviewWidget from '../components/widgets/WeatherOverviewWidget';
import OtherCities from '@/components/widgets/OtherCities';

export default function Home() {
  return (
    <main className="w-screen bg-black min-h-[100vw]">
      <div id="main-container" className="mx-auto max-w-[1200px]">
        <Topbar />

        <div className="flex flex-col md:flex-row w-full space-x-10 ">
          {/* Overview Card */}
          <WeatherOverviewWidget
            temperature={40}
            condition={'rainy storm clouds'}
            location={'Houston,  TX'}
            date={'12/24/22'}
          />

          <div className=" w-2/3 ">
            <ForecastWidget />

            <div className="flex flex-row w-full space-x-10 border border-blue-500">
              <OtherCities />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
