import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('getting-started');

  const docs = {
    'getting-started': {
      title: "Getting Started",
      content: "Welcome to the Build-a-thon. To begin, ensure your team is registered and you have your table assignment. You will receive your specific project domain 5 minutes before the timer starts.",
      steps: ["Check-in at the main desk", "Setup your local dev environment", "Wait for the System Initiate signal"]
    },
    'apis': {
      title: "Approved APIs",
      content: "We provide rate-limit-exempt keys for the following services during the event. Pick up your keys from the Mentor Station.",
      steps: ["OpenAI (GPT-4o)", "Pinecone Vector DB", "Stripe Connect", "Twilio Messaging"]
    },
    'deployment': {
      title: "Deployment Guide",
      content: "Projects must be live to be judged. We recommend the following platforms for zero-config deployment.",
      steps: ["Vercel (Frontend)", "Railway.app (Backend)", "Supabase (Database/Auth)"]
    }
  };

  return (
    <section className="flex flex-col items-center justify-start min-h-screen px-6 pt-12 pb-20">
      <div data-aos="fade-up" className="max-w-6xl w-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-10">
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#e99b63] animate-pulse"></span>
              <span className="text-[10px] font-black tracking-[0.4em] text-gray-500 uppercase">System Docs v1.0</span>
            </div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tight">Developer Hub</h1>
          </div>
          <Link to="/getstarted" className="text-[10px] bg-white text-black font-black px-6 py-3 rounded-lg uppercase tracking-widest hover:bg-[#e99b63] transition-colors">
            Start Building
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="md:w-64 flex flex-col gap-2">
            {Object.keys(docs).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`text-left px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === key 
                  ? 'bg-[#e99b63]/10 text-[#e99b63] border border-[#e99b63]/20 shadow-[0_0_15px_rgba(233,155,99,0.1)]' 
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
                }`}
              >
                {docs[key].title}
              </button>
            ))}
          </aside>

          {/* Content Area */}
          <main className="flex-1 text-left bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">
              {docs[activeTab].title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              {docs[activeTab].content}
            </p>

            <div className="space-y-4">
              <h3 className="text-[10px] font-black text-[#e99b63] uppercase tracking-[0.2em]">Required Steps</h3>
              {docs[activeTab].steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-xl group hover:border-white/20 transition-colors">
                  <span className="text-[#e99b63] font-mono text-sm font-bold">0{i+1}</span>
                  <span className="text-gray-300 text-sm">{step}</span>
                </div>
              ))}
            </div>

            {/* Code Example Placeholder */}
            <div className="mt-10 rounded-2xl bg-black/40 border border-white/10 p-6 overflow-hidden relative group">
                <div className="absolute top-3 right-4 flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
                <code className="text-xs text-gray-500 font-mono block">
                  <span className="text-[#e99b63]">npm install</span> build-a-thon-sdk <br/>
                  <span className="text-blue-400">const</span> hack = <span className="text-purple-400">require</span>(<span className="text-green-400">'build-a-thon'</span>); <br/>
                  hack.<span className="text-yellow-400">initiate</span>({'{'} teamId: <span className="text-green-400">'table_01'</span> {'}'});
                </code>
            </div>
          </main>
        </div>

        {/* Clean System Footer */}
        <div className="mt-12 p-6 border border-white/10 rounded-2xl flex justify-center items-center">
            <p className="text-[9px] text-gray-600 uppercase tracking-[0.4em] font-bold italic">
               All systems operational // Terminal Active
            </p>
        </div>
      </div>
    </section>
  );
};

export default Documentation;