import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ durationInSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const intervalId = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="text-[10px] text-[#e99b63] tracking-[0.3em] uppercase mb-3 font-black">Hack Timer Active</div>
      <div className="text-5xl font-mono font-bold text-white tabular-nums tracking-tight">
        {formatTime(timeLeft)}
      </div>
      <div className="w-full max-w-[240px] h-[3px] bg-white/5 mt-5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#656565] to-[#e99b63] transition-all duration-1000 shadow-[0_0_10px_rgba(233,155,99,0.5)]" 
          style={{ width: `${(timeLeft / durationInSeconds) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

const GetStarted = () => {
  const [formData, setFormData] = useState({ name: '', tableNumber: '', domain: '' });
  const [assignedTopic, setAssignedTopic] = useState(null);

  const topics = {
    "AI/ML": ["Generative Art Engine", "Predictive Traffic Flow", "Health-Bot AI", "Neural Style Transfer Tool"],
    "Web3": ["NFT Loyalty Wallet", "DAO Voting Tool", "DeFi Yield Tracker", "Decentralized Identity Manager"],
    "FullStack": ["SaaS Starter Kit", "Real-time Event Map", "Peer-to-Peer Marketplace", "Collaborative Code Editor"],
    "IoT": ["Smart Plant Monitor", "Home Security Node", "Energy Usage Tracker", "Warehouse Automation Bot"]
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const domainTopics = topics[formData.domain];
    const randomTopic = domainTopics[Math.floor(Math.random() * domainTopics.length)];
    setAssignedTopic(randomTopic);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(90vh-6rem)] px-6 pt-4">
      <div data-aos="fade-up" className="max-w-md w-full">
        
        {/* Badge - Positioned higher with small margin */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#e99b63]"></div>
          <span className="text-[10px] font-black tracking-[0.5em] text-white/80 uppercase">Build-A-Thon</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#e99b63]"></div>
        </div>

        <div className="bg-[#0c0c0c] border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8 md:p-10 relative">
          
          {!assignedTopic ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-white tracking-tight">Initiate Build</h2>
                <p className="text-gray-500 text-sm mt-2">Enter details to unlock your challenge</p>
              </div>

              <div className="space-y-5">
                <div className="text-left">
                  <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider ml-1">Team Lead Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full mt-2 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e99b63] focus:bg-white/[0.05] transition-all"
                    placeholder="Enter name" />
                </div>

                <div className="text-left">
                  <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider ml-1">Station / Table</label>
                  <input type="number" name="tableNumber" required value={formData.tableNumber} onChange={handleChange}
                    className="w-full mt-2 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e99b63] focus:bg-white/[0.05] transition-all"
                    placeholder="00" />
                </div>

                <div className="text-left">
                  <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider ml-1">Project Track</label>
                  <div className="relative">
                    <select name="domain" required value={formData.domain} onChange={handleChange}
                      className="w-full mt-2 bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#e99b63] focus:bg-white/[0.05] transition-all appearance-none cursor-pointer">
                      <option value="" disabled className="bg-[#0c0c0c]">SELECT DOMAIN</option>
                      {Object.keys(topics).map(d => <option key={d} value={d} className="bg-[#0c0c0c]">{d}</option>)}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-[-2px] pointer-events-none text-gray-500">
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C2.185 5.355 2.403 5 2.808 5h9.384c.405 0 .623.355.357.658l-4.796 5.482a.502.502 0 0 1-.703 0z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full bg-[#e99b63] text-black font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(233,155,99,0.3)] active:scale-[0.98] transition-all uppercase tracking-widest text-xs mt-6">
                START BUILDING
              </button>
            </form>
          ) : (
            <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-500">
              <CountdownTimer durationInSeconds={2 * 3600 + 30 * 60} />
              
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 mb-8 mt-2 shadow-inner">
                <p className="text-[10px] font-bold text-[#e99b63] uppercase tracking-[0.2em] mb-3">Target Project</p>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {assignedTopic}
                </h3>
              </div>

              <div className="flex items-center justify-around bg-white/[0.03] rounded-lg py-3 px-4 border border-white/[0.05]">
                <div className="text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Station</p>
                    <p className="text-white text-sm font-mono">#{formData.tableNumber}</p>
                </div>
                <div className="h-8 w-[1px] bg-white/10"></div>
                <div className="text-center">
                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-widest">Track</p>
                    <p className="text-white text-sm font-mono">{formData.domain}</p>
                </div>
              </div>

              <button onClick={() => setAssignedTopic(null)} className="mt-10 text-[10px] text-gray-500 hover:text-[#e99b63] uppercase tracking-[0.2em] transition-colors font-bold">
                ← BACK TO FORM
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;