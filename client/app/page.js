import Contents from "./components/LandingSection/Contents";
import HeroImage from "./components/LandingSection/HeroImage";

export default function Home() {
  return (
    <main className="min-h-[100dvh] grid grid-rows-2 landscape:grid-rows-1 landscape:grid-cols-2 p-4 gap-8">
      <HeroImage />
      <Contents />
    </main>
  );
}
