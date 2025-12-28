import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: "Hours of Building", value: "2.5" },
    { label: "Max Table Count", value: "50+" },
    { label: "Prize Pool", value: "TBA" },
    { label: "Participants", value: "200+" },
  ];

  const highlights = [
    {
      title: "Innovation First",
      desc: "We prioritize unique ideas that solve real-world problems using modern tech stacks.",
      icon: "bx-rocket",
      type: "innovation"
    },
    {
      title: "Rapid Prototyping",
      desc: "2.5 hours to turn a concept into a working demo. Speed meets execution.",
      icon: "bx-bolt",
      type: "prototype"
    },
    {
      title: "Community Driven",
      desc: "Connect with developers, designers, and innovators in an intense building arena.",
      icon: "bx-group",
      type: "community"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-start min-h-screen px-6 pt-12 pb-20">
      <div data-aos="fade-up" className="max-w-5xl w-full">
        
        {/* Sleek Badge */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#e99b63]"></div>
          <span className="text-[10px] font-black tracking-[0.5em] text-white/80 uppercase">The Mission</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#e99b63]"></div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase leading-tight">
            Build the <span className="text-[#e99b63]">Future</span> <br /> in 150 Minutes.
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Build-a-thon is a high-pressure, rapid-execution hackathon designed to test your technical skills, creativity, and speed. No fluff, just pure building.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-[#e99b63]/30 transition-colors">
              <p className="text-2xl md:text-3xl font-black text-[#e99b63] mb-1">{stat.value}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#e99b63]/30 transition-all duration-500 flex flex-col justify-between min-h-[340px]">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#e99b63]/10 flex items-center justify-center mb-6 text-[#e99b63] border border-[#e99b63]/20 group-hover:bg-[#e99b63] group-hover:text-black transition-all duration-500">
                  <i className={`bx ${item.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:text-[#e99b63] transition-colors uppercase">
                    {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>

              {/* Dynamic Icon Footers */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity">
                
                {item.type === "innovation" && (
                  <div className="flex gap-3 text-xl text-[#e99b63]">
                    <i className='bx bx-chip'></i>
                    <i className='bx bx-brain'></i>
                    <i className='bx bx-data'></i>
                  </div>
                )}

                {item.type === "prototype" && (
                  <div className="flex gap-2 text-xl">
                    <i className='bx bxl-react text-cyan-400'></i>
                    <i className='bx bxl-tailwind-css text-sky-400'></i>
                    <i className='bx bxl-nodejs text-green-500'></i>
                  </div>
                )}

                {item.type === "community" && (
                  <div className="flex gap-3 text-xl text-[#e99b63]">
                    <i className='bx bx-network-chart'></i>
                    <i className='bx bx-conversation'></i>
                    <i className='bx bx-globe'></i>
                  </div>
                )}

                <span className="text-[9px] font-black text-gray-500 ml-auto uppercase tracking-tighter">
                  {item.type === "prototype" ? "Tools Ready" : "Verified"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="relative p-10 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.01]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e99b63]/5 blur-[80px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 text-left">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-white mb-4 tracking-tight uppercase">Why Build-a-thon?</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We believe that the best products are built under constraints. Our 2.5-hour format forces teams to focus on the core value proposition of their ideas, stripping away unnecessary features to deliver something that actually works.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you are an AI enthusiast, a Web3 pioneer, or a Full-Stack master, Build-a-thon is the ultimate proving ground.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
               <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center relative group cursor-pointer">
                 <div className="absolute inset-0 bg-[#e99b63]/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                 <i className='bx bx-play-circle text-6xl text-white/20 group-hover:text-[#e99b63] transition-all transform group-hover:scale-110'></i>
                 <span className="absolute bottom-4 text-white/10 font-black tracking-widest uppercase italic text-xs">Hackathon Trailer</span>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="mt-16 text-center">
            <Link 
              to='/getstarted' 
              className="inline-block bg-[#e99b63] text-black text-xs font-black px-10 py-4 rounded-full uppercase tracking-[0.2em] hover:brightness-110 hover:shadow-[0_0_30px_rgba(233,155,99,0.4)] transition-all duration-500"
            >
               Secure Your Table Now
            </Link>
            <div className="mt-8">
              <Link to='/rules' className="text-[10px] text-gray-500 hover:text-white uppercase tracking-widest font-bold underline underline-offset-8 transition-colors">
                View Event Rules
              </Link>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;