import React from 'react';
import { Link } from 'react-router-dom';

const Rules = () => {
  const ruleGroups = [
    {
      title: "General Conduct",
      rules: [
        "Be respectful to all participants and mentors.",
        "Maintain a collaborative and inclusive environment.",
        "Plagiarism of existing projects is strictly prohibited."
      ]
    },
    {
      title: "Technical Rules",
      rules: [
        "All code must be written during the 2h 30m window.",
        "Use of open-source libraries is permitted with credit.",
        "Your project must be deployed or demo-ready by the deadline."
      ]
    },
    {
      title: "Submission",
      rules: [
        "Submit your GitHub repository link before the timer ends.",
        "Include a brief README and a 1-minute demo video.",
        "Final presentations are limited to 3 minutes per team."
      ]
    }
  ];

  return (
    <section className="flex flex-col items-center justify-start min-h-screen px-6 pt-12 pb-20">
      <div data-aos="fade-up" className="max-w-4xl w-full">
        
        {/* Sleek Badge */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#e99b63]"></div>
          <span className="text-[10px] font-black tracking-[0.5em] text-white/80 uppercase">The Code of Conduct</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#e99b63]"></div>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4 uppercase">Hackathon Rules</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Please review the guidelines below to ensure a fair and productive competition for everyone involved.
          </p>
        </div>

        {/* Rules Grid - Transparent Backgrounds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ruleGroups.map((group, index) => (
            <div 
              key={index} 
              className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:border-[#e99b63]/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#e99b63]/10 flex items-center justify-center mb-6 border border-[#e99b63]/20 text-[#e99b63] font-black text-sm">
                0{index + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-4 tracking-tight group-hover:text-[#e99b63] transition-colors uppercase">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.rules.map((rule, i) => (
                  <li key={i} className="flex gap-3 text-xs text-gray-300 leading-relaxed items-start">
                    <span className="text-[#e99b63] font-bold">•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Alert Box - Transparent */}
        <div className="mt-12 p-6 border border-dashed border-white/20 rounded-2xl text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">
            Notice: Disqualification will occur if any rules are intentionally bypassed.
          </p>
        </div>

        <div className="mt-12 text-center">
            <Link 
              to='/getstarted' 
              className="inline-block text-[10px] text-gray-400 hover:text-[#e99b63] uppercase tracking-[0.3em] transition-all font-black underline underline-offset-8 decoration-white/20 hover:decoration-[#e99b63]"
            >
               ← Back to Registration
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Rules;