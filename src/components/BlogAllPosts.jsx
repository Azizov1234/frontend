import React from 'react';

const AllPosts = () => {
  // Postlar ro'yxati (Buni keyinchalik Backend'dan olib kelasan)
  const allPosts = [
    { id: 1, image: "/images/Image (15).svg", title: "We aim to attain the greatest satisfaction for our clients", author: "Andrew Jonson", date: "Jan 19, 2021" },
    { id: 2, image: "/images/Image (16).svg", title: "We aim to attain the greatest satisfaction for our clients", author: "Andrew Jonson", date: "Jan 19, 2021" },
    { id: 3, image: "/images/Image (17).svg", title: "We aim to attain the greatest satisfaction for our clients", author: "Andrew Jonson", date: "Jan 19, 2021" },
    { id: 4, image: "/images/Image (18).svg", title: "We aim to attain the greatest satisfaction for our clients", author: "Andrew Jonson", date: "Jan 19, 2021" },
    { id: 5, image: "/images/Image (19).svg", title: "We aim to attain the greatest satisfaction for our clients", author: "Andrew Jonson", date: "Jan 19, 2021" },
    { id: 6, image: "/images/Image (20).svg", title: "We aim to attain the greatest satisfaction for our clients", author: "Andrew Jonson", date: "Jan 19, 2021" },
  ];

  return (
    <section className="w-full py-24 bg-white font-poppins">
      <div className="w-[85%] mx-auto">
        
        <h2 className="text-[48px] font-bold text-[#232536] mb-16">All posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {allPosts.map((post) => (
            <div key={post.id} className="flex flex-col group cursor-pointer">
              
              <div className="w-full h-[300px] overflow-hidden mb-8">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-[28px] font-bold text-[#232536] leading-tight mb-4 group-hover:text-[#444CFC] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-8">
                  It is a long established fact that a reader will be distracted by the readable content of a page.
                </p>

                <div className="flex items-center gap-3 mt-auto">
                  <img src="/images/Image (8).svg" alt="Andrew" className="w-10 h-10 rounded-full object-cover" />
                  <div className="text-sm">
                    <p className="font-bold text-[#232536]">{post.author}</p>
                    <p className="text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllPosts;