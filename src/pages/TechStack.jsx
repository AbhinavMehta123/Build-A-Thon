import React from 'react';
import { Link } from 'react-router-dom';

const TechStack = () => {
  const stack = [
    {
      category: "Frontend",
      tools: ["React / Vite", "Tailwind CSS", "Framer Motion", "Next.js"],
      icon: "bx-code-block"
    },
    {
      category: "Backend & Cloud",
      tools: ["Node.js / Express", "Firebase", "Appwrite", "Supabase"],
      icon: "bx-server"
    },
    {
      category: "Database",
      tools: ["MongoDB", "PostgreSQL", "Redis", "Cloud Firestore"],
      icon: "bx-data"
    },
    {
      category: "AI & Tools",
      tools: ["OpenAI API", "LangChain", "Git / GitHub", "Postman"],
      icon: "bx-chip"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-start min-h-screen px-6 pt-12 pb-20">
      <div data-aos="fade-up" className="max-w-5xl w-full">
        
        {/* Sleek Badge */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#e99b63]"></div>
          <span className="text-[10px] font-black tracking-[0.5em] text-white/80 uppercase">The Arsenal</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#e99b63]"></div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4 uppercase">Approved Tech Stack</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            While we encourage creativity, these are the recommended tools to ensure your build is scalable, modern, and demo-ready.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:border-[#e99b63]/40 transition-all duration-300 group text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center mb-6 border border-white/10 text-[#e99b63] transition-transform group-hover:scale-110">
                <i className={`bx ${item.icon} text-2xl`}></i>
              </div>
              
              <h3 className="text-md font-bold text-white mb-4 tracking-wide uppercase border-b border-white/5 pb-2">
                {item.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {item.tools.map((tool, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] bg-white/[0.05] border border-white/10 text-gray-300 px-3 py-1 rounded-full font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Resource Note */}
        <div className="mt-16 p-8 border border-white/10 bg-white/[0.01] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-white font-bold mb-1 uppercase tracking-tight">Need help with these?</h4>
            <p className="text-gray-500 text-xs">Our mentors are available 24/7 during the hackathon for technical support.</p>
          </div>
          <Link to='/documentation' className="bg-[#e99b63] text-black text-[10px] font-black px-6 py-3 rounded-xl uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 whitespace-nowrap">
            View Documentation
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to='/getstarted' 
            className="inline-block text-[10px] text-gray-400 hover:text-[#e99b63] uppercase tracking-[0.3em] transition-all font-black underline underline-offset-8 decoration-white/20 hover:decoration-[#e99b63]"
          >
             ← Ready to Build?
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechStack;