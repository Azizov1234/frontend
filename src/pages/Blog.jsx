import AllPosts from "../components/BlogAllPosts";
import BlogHero from "../components/BlogHero";
import RecentPosts from "../components/BlogRecentPosts";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center bg-[#232536] px-6 text-white">
      <BlogHero />
      <RecentPosts />
     <AllPosts />
      <Footer />
    </div>
  )
}