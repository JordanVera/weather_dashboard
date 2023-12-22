import Topbar from '../components/Topbar';
import WeatherOverviewWidget from '../components/widgets/WeatherOverviewWidget';

export default function Home() {
  return (
    <main className="w-screen bg-black min-h-[100vw]">
      <div id="main-container" className="mx-auto max-w-[1200px]">
        <Topbar />

        <div className="flex flex-row w-full space-x-10 h-[300px]">
          {/* Overview Card */}
          <WeatherOverviewWidget
            temperature={40}
            condition={'rainy storm clouds'}
            location={'Houston,  TX'}
            date={'12/24/22'}
          />

          <div className="border border-red-500 w-2/3 ">world</div>
        </div>
      </div>
    </main>
  );
}
