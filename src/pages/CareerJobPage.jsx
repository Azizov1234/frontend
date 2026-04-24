import ApplyForm from "../components/ApplyForm";
import JobDetails from "../components/CareerPage";
import Footer from "../components/Footer";

export default function CareerJobPage() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center bg-[#232536] px-6 text-white">

    <JobDetails/>
    <ApplyForm/>
    <Footer />
    </div>
  )
}