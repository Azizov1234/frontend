import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthorDetails = () => {
    // Bu ma'lumotlar aslida tanlangan muallifga qarab o'zgarishi kerak
    const posts = [
        {
            id: 1,
            image: "/images/Image (22).svg",
            date: "Jan 19, 2021",
            title: "Today's best design trends for digital products"
        },
        {
            id: 2,
            image: "/images/Image (23).svg",
            date: "Jan 19, 2021",
            title: "A practical guide to building a brand strategy"
        }
    ];

    return (
        <div className="w-full font-poppins bg-white">

            {/* 1. MUALLIF PROFILI (TEPADAGI QISM) */}
            <section className="py-20 bg-[#F9F9FF]">
                <div className="w-[85%] mx-auto flex flex-col items-center text-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
                        <img src="/images/Image (21).svg" alt="Javena Melo" className="w-full h-full object-cover" />
                    </div>
                    <h1 className="text-[48px] font-bold text-[#232536] mb-2">Javena Melo</h1>
                    <p className="text-gray-400 font-medium mb-6 uppercase tracking-widest text-sm">CEO</p>
                    <p className="max-w-[600px] text-gray-500 leading-relaxed mb-8">
                        Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-6 text-xl text-[#232536]">
                        <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-facebook"></i></a>

                        <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-twitter"></i></a>

                        <a href="#" className="hover:scale-110 transition-transform"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </section>

            {/* 2. MUALLIF POSTLARI (BLOG POSTS FROM JAVENA) */}
            <section className="py-24 bg-white">
                <div className="w-[85%] mx-auto">
                    <div className="flex flex-col mb-16">
                        <div className="w-6 h-6 bg-[#444CFC] mb-6"></div>
                        <h2 className="text-[48px] font-bold text-[#232536]">Blog posts from Javena</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {posts.map((post) => (
                            <div key={post.id} className="flex flex-col md:flex-row items-center bg-[#F9F9FF] group cursor-pointer overflow-hidden">
                                <div className="w-full md:w-1/2 h-[280px]">
                                    <img src={post.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                                    <span className="text-sm text-gray-400 mb-4">{post.date}</span>
                                    <h3 className="text-2xl font-bold text-[#232536] mb-6 leading-tight group-hover:text-[#444CFC] transition-colors">
                                        {post.title}
                                    </h3>
                                    <Link to="/blog-details" className="text-[#444CFC] font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Read More <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        <Footer/>
        </div>
    );
};

export default AuthorDetails;