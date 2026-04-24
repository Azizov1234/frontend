import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogHero = () => {
    // useNavigate hookini komponentning ICHIGA kiritamiz
    const navigate = useNavigate();

    const sidebarPosts = [
        {
            id: 1,
            title: "Great design expectations prejudice in digital products in Next Year",
            author: "Andrew Jonson",
            date: "Jan 19, 2021",
            avatar: "/images/Image (8).svg"
        },
        {
            id: 2,
            title: "How to patches performance of your NestJS backend applications",
            author: "Mathew Jasele",
            date: "Feb 05, 2021",
            avatar: "/images/Image (8).svg"
        },
        {
            id: 3,
            title: "The role of the software architect in a modern agile environment",
            author: "Hussen Abakas",
            date: "Mar 12, 2021",
            avatar: "/images/Image (8).svg"
        }
    ];

    return (
        <section className="w-full py-20 bg-white font-poppins">
            <div className="w-[85%] mx-auto flex flex-col lg:flex-row gap-12">

                <div className="lg:w-2/3">
                    <div className="flex flex-col items-start">
                        <div className="w-6 h-6 bg-[#FFE6D2] mb-6"></div>
                        <span className="uppercase tracking-[0.3em] text-sm font-semibold text-[#232536] opacity-70">
                            Trending
                        </span>
                        <h1 className="text-[40px] md:text-[48px] font-bold text-[#232536] leading-tight mt-4 mb-6">
                            Breaking the code How did we build our Figma plugin
                        </h1>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-[600px]">
                            It is a long established fact that a reader will be distracted by the readable content of a page zaman looking at its layout.
                        </p>

                        <button
                            onClick={() => navigate('/blog-details')}
                            className="text-[#444CFC] font-bold flex items-center gap-2 mb-8"
                        >
                            Read More <span>→</span>
                        </button>

                        <div className="flex items-center gap-4 mb-12">
                            <img src="/images/Image (8).svg" alt="Andrew" className="w-12 h-12 rounded-full object-cover" />
                            <div className="flex items-center gap-2 text-sm text-[#232536]">
                                <span className="font-bold">Andrew Jonson</span>
                                <span className="opacity-50">|</span>
                                <span className="opacity-50">Posted on 27th Jan 2021</span>
                            </div>
                        </div>

                        <div className="w-full h-[450px] relative">
                            <img src="/images/Image (9).svg" alt="Office" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/3 bg-[#FFE6D2] p-10 md:p-14 relative">
                    <div className="absolute top-0 right-0 p-4">
                        <img src="/images/shapes-blog.svg" alt="" className="w-8 h-8" />
                    </div>

                    <div className="space-y-12">
                        {sidebarPosts.map((post) => (
                            <div key={post.id} className="flex flex-col gap-4">
                                <h3 className="text-[24px] font-bold text-[#232536] leading-tight hover:text-[#444CFC] cursor-pointer transition-colors">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
                                    <div className="text-sm">
                                        <p className="font-bold text-[#232536]">{post.author}</p>
                                        <p className="text-gray-500">{post.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlogHero;