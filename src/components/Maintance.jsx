export default function Maintance() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="w-[85%] mx-auto">
                <div className="mb-16">
                    <span className="uppercase tracking-widest text-sm font-medium text-gray-500">Our Process</span>
                    <h2 className="text-[48px] font-bold text-black mt-4 max-w-[600px] leading-tight">
                        The process we are working With Our client Worldwide
                    </h2>
                    <p className="text-gray-500 mt-6 max-w-[500px]">
                        Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12">
                    {[
                        { id: '01', title: 'Discover', icon: '/images/Icon Div.svg', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.' },
                        { id: '02', title: 'Designing', icon: '/images/Icon Div (1).svg', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.' },
                        { id: '03', title: 'Development', icon: '/images/Icon Div (2).svg', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.' },
                        { id: '04', title: 'Testing', icon: '/images/Icon Div (3).svg', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.' },
                        { id: '05', title: 'Deployment', icon: '/images/Icon Div (4).svg', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.' },
                        { id: '06', title: 'Maintenance', icon: '/images/Icon Div (5).svg', desc: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.' },
                    ].map((step, index) => (

                        <div key={index} className="relative border border-gray-300 p-8 pt-12   group hover:bg-[#F9F9FF] transition-all overflow-hidden">

                            <div className="absolute top-4 right-6 text-[24px] font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                                {step.id}
                            </div>

                            <div className="w-12 h-12 bg-[#FFE6D2] rounded-full mb-6 flex items-center justify-center">
                                <img src={step.icon} alt={step.title} className="w-6 h-6 object-contain" />
                            </div>

                            <h4 className="text-xl font-bold text-black mb-3">{step.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                {step.desc}
                            </p>

                            {(index === 0 || index === 5) && (
                                <img
                                    src="/images/Shapes 1.svg"
                                    alt="line"
                                    className="absolute bottom-0 left-0 w-full h-[8px] object-cover"
                                />
                            )}
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}
