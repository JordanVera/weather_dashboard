import { useContext } from 'react';
import Topbar from '../components/Topbar';
import ForecastWidget from '@/components/widgets/ForecastWidget';
import WeatherOverviewWidget from '../components/widgets/WeatherOverviewWidget';
import OtherCities from '@/components/widgets/OtherCities';
import MoonPhaseWidget from '@/components/widgets/MoonPhaseWidget';
import NewsletterSignup from '@/components/widgets/NewsletterSignup';
import { WeatherContext } from '@/context/WeatherContext';
import { Loader } from '@/components/Loader';

export default function Home() {
  const { isLoading } = useContext(WeatherContext);

  // if (isLoading) return <Loader />;

  return (
    <main className="w-screen bg-black min-h-[100vw]">
      <div id="main-container" className="mx-auto max-w-[1200px]">
        <Topbar />

        <div className="flex flex-col md:flex-row w-full space-x-10 justify-center">
          {/* Overview Card */}
          <WeatherOverviewWidget />

          <div className="w-full md:w-2/3 flex-grow">
            <ForecastWidget />

            <div className="flex flex-row w-full space-x-5 items-stretch">
              <OtherCities />

              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
