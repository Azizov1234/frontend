import CareerHero from "../components/CareerHero";
import OpenPositions from "../components/CareerMain1";
import WorkCulture from "../components/CareerMain2";
import Footer from "../components/Footer";

export default function Career() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center bg-[#232536] px-6 text-white">
      <CareerHero />
      <OpenPositions />
      <WorkCulture />
      <Footer />
    </div>
  )
}