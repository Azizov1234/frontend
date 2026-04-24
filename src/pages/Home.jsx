import Footer from "../components/Footer";
import Maintance from "../components/Maintance";

export default function Home() {
    return (
        <div>
            <header>
                <section className="flex items-center justify-between w-[80%] mx-auto mt-[80px] bg-[#232536]">

                    <div className="flex flex-col gap-6 max-w-[500px] text-white">
                        <h1 className="text-5xl font-bold leading-tight">
                            Transform Your Idea Into Reality with Finsweet
                        </h1>

                        <p className="text-[#9e9e9e]">
                            The entire Finsweet team knows what's good with Webflow and you can too with 1 week and a good
                            attitude.
                        </p>

                        <button
                            className="relative h-[70px] w-[210px] bg-[#444CFF] text-white px-6 flex items-center justify-center gap-2 group">
                            <div className="absolute -top-0 -left-0 w-7 h-7">
                                <img src="/images/Shapes.svg" alt="" className="w-full h-full" />
                            </div>

                            <span>Request Quote</span>

                            <img src="/images/Icon (6).png" alt="" className="ml-2" />
                        </button>
                    </div>

                    <img src="/images/Header Image.png" alt="" />
                </section>
            </header>
            <main className="bg-[#fdfdff] text-white flex flex-col items-center justify-center ">


                <section className="w-[85%]  mt-[100px] h-[848px] flex flex-col items-center justify-between border-2">
                    <div className="w-full h-[210px] border-2 flex items-center justify-beetween">
                        <h1 className="text-5xl font-bold text-[48px] w-[640px] text-black">
                            The company leads entire webdesign process from concept to delivery.
                        </h1>
                        <div className="w-[547px]   flex flex-col items-start justify-center gap-6">
                            <h3 className=" text-[36px] text-black">
                                The Era Of Technology.
                            </h3>
                            <p className="text-[#9e9e9e] text-[18px]">
                                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[590px] border-2 flex flex-col items-center justify-beetween gap-8">
                        <div className="w-full h-[446px]  flex items-center justify-center gap-6">
                            <img src="/images/Image 1.svg" alt="" />
                            <img src="/images/Image 2.svg" alt="" />
                            <img src="/images/Image 3.svg" alt="" />
                        </div>
                        <div className="w-full h-[144px] flex items-center justify-beetween  gap-[460px]">
                            <div className=" h-[96px]  flex items-center justify-beetween gap-[80px]">
                                <img src="/images/Number 1.svg" alt="" />
                                <img src="/images/Number 2.svg" alt="" />
                                <img src="/images/Number 3.svg" alt="" />
                                <img src="/images/Number 4.svg" alt="" />

                            </div>
                            <button className=" text-[#444CFC] flex items-center justify-center gap-6">Read about us <img src="/images/Icon.svg" alt="" /></button>
                        </div>

                    </div>
                </section>
                <section className="w-[100%] bg-[#ECF8F9]  mt-[100px] h-[660px]  flex items-center justify-around gap-6">
                    <div className="w-[624px] h-[364px] border-2 flex flex-col  items-start justify-center gap-6">
                        <h3 className="text-black">OUR EXPERTISE</h3>

                        <h1 className="text-black font-bold text-[48px] leading-[58px] fond-">
                            We want to get local
                            identification in every
                            corner of the world in this
                            era of global citizenship
                        </h1>

                        <p className="text-gray-500 ">
                            Through True Rich Attended does no end it
                            his mother since real had half every him
                            case in packages enquire we up ecstatic
                            unsatiable saw his giving Remain
                            expense you position concluded.
                        </p>
                    </div>
                    <div className="w-[512px] h-[468px] border-2 flex flex-col items-center justify-center gap-9">

                        <div className=" w-[366px] h-[76px] flex   justify-start gap-4">
                            <img src="/images/Group 1749.svg" alt="" className="w-[47px] h-[47px]" />
                            <div className="w-[303px] h-[76px] flex flex-col  gap-4">
                                <h6 className="text-black font-bold">On Time Delivery</h6>
                                <p className="text-gray-500 text-[14px]">
                                    Through True Rich Attended
                                    does no end it his mother
                                    since real had half every him.
                                </p>
                            </div>
                        </div>
                        <div className=" w-[366px] h-[76px] flex   justify-start gap-4">
                            <img src="/images/Group 1755.svg" alt="" className="w-[47px] h-[47px]" />
                            <div className="w-[303px]  border-2 h-[76px] flex flex-col  gap-4">
                                <h6 className="text-black font-bold">On Time Delivery</h6>
                                <p className="text-gray-500 text-[14px]">
                                    Through True Rich Attended
                                    does no end it his mother
                                    since real had half every him.
                                </p>
                            </div>
                        </div>
                        <div className=" w-[366px] h-[76px] flex   justify-start gap-4">
                            <img src="/images/Group 1855.svg" alt="" className="w-[47px] h-[47px]" />
                            <div className="w-[303px] h-[76px] flex flex-col   gap-4">
                                <h6 className="text-black font-bold">On Time Delivery</h6>
                                <p className="text-gray-500 text-[14px]">
                                    Through True Rich Attended
                                    does no end it his mother
                                    since real had half every him.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full bg-[#FFE6D2] py-[100px] flex flex-col items-center">
                    <div className="w-[85%] mx-auto">
                        <div className="max-w-[777px] mb-12">
                            <span className="text-black uppercase tracking-widest text-sm font-medium">
                                Our Services
                            </span>
                            <h2 className="text-black text-[48px] font-bold leading-[58px] mt-4 mb-8">
                                We build software solutions that solve client's business challenges
                            </h2>
                            <button className="bg-[#444CFC] text-white px-8 py-4 flex items-center gap-3 hover:bg-blue-700 transition-all">
                                Start a Project <img src="/images/Icon.svg" alt="" className="w-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                            <div className="bg-white p-12 flex flex-col items-start gap-4 shadow-sm">
                                <img src="/images/Icon Div (6).svg" alt="" className="w-12 h-12" />
                                <h4 className="text-black text-2xl font-bold mt-4">Technical support</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
                                </p>
                                <a href="#" className="text-black font-semibold flex items-center gap-2 mt-4 group">
                                    Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>

                            <div className="bg-white p-12 flex flex-col items-start gap-4 shadow-sm">
                                <img src="/images/Icon Div (7).svg" alt="" className="w-12 h-12" />
                                <h4 className="text-black text-2xl font-bold mt-4">Testing Management</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
                                </p>
                                <a href="#" className="text-black font-semibold flex items-center gap-2 mt-4 group">
                                    Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>

                            <div className="bg-white p-12 flex flex-col items-start gap-4 shadow-sm">
                                <img src="/images/Icon Div (8).svg" alt="" className="w-12 h-12" />
                                <h4 className="text-black text-2xl font-bold mt-4">Development</h4>
                                <p className="text-gray-600 leading-relaxed">
                                    We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service
                                </p>
                                <a href="#" className="text-black font-semibold flex items-center gap-2 mt-4 group">
                                    Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Maintance />
                <section className="w-full py-20 bg-[#F9F9FF]">
                    <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center gap-20">

                        <div className="md:w-1/2">
                            <div className="w-6 h-6 bg-blue-600 mb-6"></div>
                            <h2 className="text-[48px] font-bold text-black leading-tight mb-6">
                                Our customers love what we do
                            </h2>
                            <h4 className="text-xl font-semibold text-black mb-4">
                                Transform your idea into reality with finsweet
                            </h4>
                            <p className="text-gray-500 mb-8">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    <img className="w-12 h-12 rounded-full border-2 border-white" src="/images/Image 3 (2).svg" alt="user" />
                                    <img className="w-12 h-12 rounded-full border-2 border-white" src="/images/Image 2 (1).svg" alt="user" />
                                    <img className="w-12 h-12 rounded-full border-2 border-white" src="/images/Image 1 (1).svg" alt="user" />
                                </div>
                                <span className="font-bold text-black">30+ Customer Reviews</span>
                            </div>
                        </div>

                        <div className="md:w-1/2 bg-white p-12 relative shadow-lg">
                            <div className="absolute top-8 right-12 text-4xl text-black font-serif">"</div>

                            <h3 className="text-2xl font-bold text-black mb-8 leading-snug">
                                Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!
                            </h3>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <img className="w-12 h-12 rounded-full" src="/images/Image 3 (2).svg" alt="Johnny Andro" />
                                    <div>
                                        <p className="font-bold text-black">Johnny Andro</p>
                                        <p className="text-gray-500 text-sm">Director, Company</p>
                                    </div>
                                </div>
                                <div className="text-gray-400 font-bold italic text-xl">Logoipsum</div>
                            </div>

                            <div className="absolute left-0 top-0 h-full w-2 flex flex-col">
                                <div className="h-1/2 bg-orange-400"></div>
                                <div className="h-1/2 bg-blue-600"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-12">
                        <div className="w-2 h-2 rounded-full bg-black"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </section>
                <section className="w-full py-24 bg-[#ECF8F9]">
                    <div className="w-[85%] mx-auto">
                        <div className="mb-12 text-left">
                            <div className="w-6 h-6 bg-[#5D5FEF] mb-6"></div>
                            <h2 className="text-[48px] font-bold text-[#232536] leading-tight font-poppins">
                                Read our latest blogs & news
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            <div className="flex bg-white shadow-sm h-[300px]">
                                <div className="w-1/2">
                                    <img src="/images/Image.svg" alt="Blog" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-1/2 p-8 flex flex-col justify-center items-start">
                                    <p className="text-gray-400 text-sm mb-3 font-medium">Jan 19, 2021</p>
                                    <h3 className="text-[22px] font-bold text-[#232536] leading-snug mb-6 font-poppins">
                                        Today’s best design trends for digital products
                                    </h3>
                                    <a href="#" className="text-[#5D5FEF] font-semibold flex items-center gap-2 group text-sm">
                                        Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>

                            <div className="flex bg-white shadow-sm h-[300px]">
                                <div className="w-1/2">
                                    <img src="/images/Image (1).svg" alt="Blog" className="w-full h-full object-cover" />
                                </div>
                                <div className="w-1/2 p-8 flex flex-col justify-center items-start text-left">
                                    <p className="text-gray-400 text-sm mb-3 font-medium">Jan 19, 2021</p>
                                    <h3 className="text-[22px] font-bold text-[#232536] leading-snug mb-6 font-poppins">
                                        A practical guide to building a brand strategy
                                    </h3>
                                    <a href="#" className="text-[#5D5FEF] font-semibold flex items-center gap-2 group text-sm">
                                        Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
