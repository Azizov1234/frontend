import React from 'react';

const RecentPosts = () => {
  const posts = [
    {
      id: 1,
      image: "/images/Image (11).svg",
      title: "Today's best design trends for digital products",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
    },
    {
      id: 2,
      image: "/images/Image (12).svg",
      title: "Today's best design trends for digital products",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
    },
    {
      id: 3,
      image: "/images/Image (13).svg",
      title: "Today's best design trends for digital products",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
    },
    {
      id: 4,
      image: "/images/Image (14).svg",
      title: "Today's best design trends for digital products",
      author: "Andrew Jonson",
      date: "Jan 19, 2021",
    },
  ];

  return (
    <section className="w-full py-24 bg-white font-poppins">
      <div className="w-[85%] mx-auto">
        
        <h2 className="text-[48px] font-bold text-[#232536] mb-16 text-left">
          Read Recent Post
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col md:flex-row items-center gap-8 group cursor-pointer">
              
              <div className="w-full md:w-[40%] h-[250px] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

=              <div className="w-full md:w-[60%] flex flex-col justify-center">
                <h3 className="text-[28px] font-bold text-[#232536] leading-tight mb-6 group-hover:text-[#444CFC] transition-colors">
                  {post.title}
                </h3>
                
                <div className="flex items-center gap-3">
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

export default RecentPosts;