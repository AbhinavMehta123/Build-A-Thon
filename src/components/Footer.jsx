import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-20 px-6 pb-8 border-t border-white/5 pt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Compact Branding */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#e99b63] rounded-xl flex-shrink-0 overflow-hidden shadow-lg">
            <img 
              src="/WhatsApp Image 2025-12-28 at 9.03.33 PM.jpeg" 
              alt="ALFA" 
              className="w-full h-full object-cover" 
              onError={(e) => { e.target.style.display='none'; }}
            />
          </div>
          <div className="text-left leading-tight">
            <h4 className="text-white font-black text-base uppercase tracking-widest">ALFA</h4>
            <p className="text-[#e99b63] text-[9px] font-bold uppercase tracking-widest">Coding Club</p>
          </div>
        </div>

        {/* Center: Minimal Credit */}
        <div className="flex flex-col items-center">
          <p className="text-[8px] text-gray-500 uppercase tracking-[0.4em] mb-1">Engineered By</p>
          <h3 className="text-white font-black text-sm tracking-[0.2em] uppercase">
            ALFA <span className="text-[#e99b63]">CODING</span> CLUB
          </h3>
        </div>

        {/* Right: Quick Socials & Loc */}
        <div className="flex flex-col md:items-end items-center gap-3">
          <div className="flex gap-4">
            {['github', 'instagram', 'linkedin'].map((icon) => (
              <a key={icon} href="#" className="text-gray-500 hover:text-[#e99b63] transition-colors">
                <i className={`bx bxl-${icon} text-lg`}></i>
              </a>
            ))}
          </div>
          <p className="text-[8px] text-gray-600 font-mono uppercase tracking-widest">
            28.6117° N // 77.2039° E
          </p>
        </div>
      </div>

      {/* Ultra-Short Bottom Line */}
      <div className="max-w-7xl mx-auto mt-10 pt-4 border-t border-white/[0.02] flex justify-between items-center opacity-30">
        <p className="text-[7px] text-white uppercase tracking-[0.4em]">© 2025 BUILD-A-THON</p>
        <p className="text-[7px] text-white uppercase tracking-[0.2em]">All Systems Nominal</p>
      </div>
    </footer>
  );
};

export default Footer;