import React from 'react';
import { useNavigate } from 'react-router-dom'; // Navigatsiya uchun

const teamMembers = [
    { id: 1, name: 'Javena Melo', role: 'Support Assist', img: '/images/Team 1.svg' },
    { id: 2, name: 'Cody Fisher', role: 'CEO', img: '/images/Team 2.svg' },
    { id: 3, name: 'Guy Hawkins', role: 'CTO', img: '/images/Team 3.svg' },
    { id: 4, name: 'Robert Fox', role: 'Designer', img: '/images/Team 4.svg' },
    { id: 5, name: 'Esther Howard', role: 'Developer', img: '/images/Team 6.svg' },
    { id: 6, name: 'Dianne Russell', role: 'Manager', img: '/images/Team 6.svg' },
    { id: 7, name: 'Ronald Richards', role: 'Analyst', img: '/images/Team 7.svg' },
    { id: 8, name: 'Bessie Cooper', role: 'Marketing', img: '/images/Team 8.svg' },
];

const MeetOurTeam = () => {
    const navigate = useNavigate(); // Hookni chaqiramiz

    return (
        <section className="w-full py-24 bg-white font-poppins">
            <div className="w-[85%] mx-auto">

                <div className="mb-16">
                    <span className="uppercase tracking-[0.2em] text-sm font-semibold text-[#232536] opacity-70">
                        Meet Our Team
                    </span>
                    <h2 className="text-[48px] font-bold text-[#232536] leading-tight mt-4 max-w-[500px]">
                        Teamwork is the only way we work
                    </h2>
                    <p className="text-gray-500 mt-6 max-w-[450px]">
                        Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member) => (
                        <div 
                            key={member.id} 
                            // Rasm yoki hover bloki bosilganda author sahifasiga o'tadi
                            onClick={() => navigate(`/author/${member.id}`)}
                            className="relative group overflow-hidden aspect-square cursor-pointer"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-[#232536] bg-opacity-90 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-white text-xl font-bold">{member.name}</h4>
                                <p className="text-gray-400 text-sm mb-4">{member.role}</p>

                                <div className="flex gap-4 text-white text-lg" onClick={(e) => e.stopPropagation()}>
                                    {/* e.stopPropagation() ijtimoiy tarmoqni bossa authorga o'tib ketmasligi uchun */}
                                    <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
                                    <a href="#" className="hover:text-blue-600"><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default MeetOurTeam;