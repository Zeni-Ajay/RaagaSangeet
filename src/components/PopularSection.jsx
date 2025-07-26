const PopularSection = () => {

  const tracks = [
  {
    title: 'Fairy Tales',
    artist: 'Stephen King',
    image: 'https://images.unsplash.com/photo-1518911710364-17ec553bde5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'DIFMO',
    artist: 'PK Sharma',
    image: 'https://images.unsplash.com/photo-1727964600806-b3a2bb8048e6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shivers',
    artist: 'ED Sheeran',
    image: 'https://images.unsplash.com/photo-1708961465136-e24550f3acd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRydW18ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Anti Hero',
    artist: 'Rosa Lin',
    image: 'https://images.unsplash.com/photo-1693162985830-8974b7f05961?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd1aXRhciUyMHBsYXlpbmd8ZW58MHx8MHx8fDA%3D',
  },
]
  return (
    <div className="bg-[#0f0f1a] py-16 px-6 md:px-12 text-white mt-20 rounded-t-3xl">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
          Most Popular At <br />
          <span className="text-yellow-400">The Moment</span>
        </h2>
        <button className="text-sm md:text-base text-yellow-300 hover:underline flex items-center gap-1">
          See All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {tracks.map((track, index) => (
          <div
            key={index}
            className="relative bg-white/10 rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <img
              src={track.image}
              alt={track.title}
              className="w-full h-64 object-cover opacity-90 group-hover:opacity-100 transition duration-300"
            />
            <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-2 rounded-full">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold">{track.title}</h3>
              <p className="text-sm text-gray-300">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  );
};


export default PopularSection;