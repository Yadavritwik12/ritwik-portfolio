import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, BarChart, Zap, ArrowRight, TrendingUp } from 'lucide-react';

export default function SEOPage() {
  return (
    <div className="pt-24 pb-12 bg-brand-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-8 text-brand-onyx">
            Dominating <span className="italic text-brand-khaki">Search</span> in the AI Era.
          </h1>
          <p className="text-xl text-brand-onyx/70 leading-relaxed">
            I build high-performance organic brand growth that prioritize technical SEO, content authority, and strategic partnerships over traditional ad spend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              icon: <Search className="w-8 h-8" />, 
              title: "Technical SEO", 
              desc: "Optimizing site architecture, Core Web Vitals, and schema markup for maximum crawlability." 
            },
            { 
              icon: <Zap className="w-8 h-8" />, 
              title: "AI-Search Ready", 
              desc: "Securing visibility within LLMs and AI-driven search platforms like Perplexity and Gemini." 
            },
            { 
              icon: <BarChart className="w-8 h-8" />, 
              title: "Data-Driven Growth", 
              desc: "Scaling organic traffic through rigorous keyword research and competitor gap analysis." 
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-brand-khaki/10"
            >
              <div className="text-brand-khaki mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
              <p className="text-brand-onyx/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Enzo Design Build Snapshot */}
        <div className="mb-12">
          <div className="bg-brand-onyx rounded-[3rem] p-8 md:p-16 text-brand-onyx relative overflow-hidden bg-white shadow-2xl border border-brand-khaki/10">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="space-y-12">
                <div>
                  <h3 className="text-7xl md:text-8xl font-serif leading-[0.85] mb-8">
                    Enzo Design Build Inc.<br/>
                  </h3>
                  <p className="text-lg text-brand-onyx/60 leading-relaxed max-w-sm">
                    Strategic SEO overhaul for Vancouver's premier design-build firm, focusing on high-intent transactional and commercial keywords and technical authority.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-7xl font-serif text-[#22C55E] font-bold leading-none">
                    223%<span className="text-4xl align-top ml-1">+</span>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-onyx/40">
                    Growth in traffic and user acquisition
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-parchment/30 rounded-[2rem] p-8 flex flex-col justify-between min-h-[320px] border border-brand-khaki/5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-4 block">Engagements</span>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-4xl font-serif font-bold text-brand-onyx">+157.6%</span>
                      <TrendingUp className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-xs text-brand-onyx/60">281K total tracked events</p>
                  </div>
                  <div className="flex items-end gap-1.5 h-32 mt-8">
                    {[40, 55, 45, 70, 60, 85, 75, 95, 80, 100, 90, 110].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-full ${i < 8 ? 'bg-brand-khaki' : 'bg-brand-onyx/10'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-brand-onyx/30 uppercase tracking-widest">
                    <span>Q1 2025</span>
                    <span>Q1 2026</span>
                  </div>
                </div>

                <div className="bg-brand-parchment/30 rounded-[2rem] p-8 flex flex-col justify-between min-h-[320px] border border-brand-khaki/5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-4 block">Active Users</span>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-4xl font-serif font-bold text-brand-onyx">+223.1%</span>
                      <TrendingUp className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-xs text-brand-onyx/60">48K users YTD</p>
                  </div>
                  <div className="h-32 mt-8 relative">
                    <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                      <path
                        d="M0,80 L20,75 L40,82 L60,70 L80,10 L100,60 L120,55 L140,65 L160,50 L180,58 L200,52 L220,60 L240,45 L260,55 L280,48 L300,52 L320,40 L340,45 L360,35 L380,42 L400,38"
                        fill="none"
                        stroke="#BBA58E"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0,80 L20,75 L40,82 L60,70 L80,10 L100,60 L120,55 L140,65 L160,50 L180,58 L200,52 L220,60 L240,45 L260,55 L280,48 L300,52 L320,40 L340,45 L360,35 L380,42 L400,38 V100 H0 Z"
                        fill="url(#gradient-enzo)"
                        className="opacity-20"
                      />
                      <defs>
                        <linearGradient id="gradient-enzo" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#BBA58E" />
                          <stop offset="100%" stopColor="#BBA58E" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-brand-onyx/30 uppercase tracking-widest">
                    <span>Jan 2025</span>
                    <span>Mar 2026</span>
                  </div>
                </div>

                <div className="bg-brand-parchment/30 rounded-[2rem] p-8 flex flex-col justify-between min-h-[320px] border border-brand-khaki/5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-4 block">New Users</span>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-4xl font-serif font-bold text-brand-onyx">+223.0%</span>
                      <TrendingUp className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-xs text-brand-onyx/60">47K newly acquired users</p>
                  </div>
                  <div className="flex items-end gap-3 h-32 mt-8">
                    {[30, 45, 60, 55, 75, 65, 85, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-2xl ${i === 7 ? 'bg-brand-khaki' : 'bg-brand-khaki/20'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-brand-onyx/30 uppercase tracking-widest">
                    <span>Q1 2025</span>
                    <span>Q1 2026</span>
                  </div>
                </div>

                <div className="bg-brand-parchment/30 rounded-[2rem] p-8 flex flex-col min-h-[320px] border border-brand-khaki/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-8 block">Channel Breakdown</span>
                  <div className="space-y-8">
                    {[
                      { label: 'Organic Search', value: '41.8K', growth: '+214.9%' },
                      { label: 'Direct Traffic', value: '12.3K', growth: '+339.0%' },
                      { label: 'Referral', value: '1.6K', growth: '+225.4%' },
                    ].map((channel, i) => (
                      <div key={i} className="flex items-end justify-between border-b border-brand-onyx/10 pb-2">
                        <div className="text-3xl font-serif font-bold text-brand-onyx">{channel.value}</div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-[#22C55E] mb-1 uppercase tracking-wider">{channel.growth}↑</div>
                          <div className="text-[10px] font-bold text-brand-onyx/40 uppercase tracking-widest">{channel.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Master Estimators Snapshot */}
        <div className="mb-12">
          <div className="bg-brand-onyx rounded-[3rem] p-8 md:p-16 text-brand-onyx relative overflow-hidden bg-white shadow-2xl border border-brand-khaki/10">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
              <div className="space-y-12">
                <div>
                  <h3 className="text-7xl md:text-8xl font-serif leading-[0.85] mb-8">
                    Master Estimators <br />
                  </h3>
                  <p className="text-lg text-brand-onyx/60 leading-relaxed max-w-sm">
                    Scaling technical B2B services through precision targeting and authority-driven content strategies.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-7xl font-serif text-[#22C55E] font-bold leading-none">
                    210%<span className="text-4xl align-top ml-1">+</span>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-onyx/40">
                    Growth in active user base
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-brand-parchment/30 rounded-[2rem] p-8 flex flex-col justify-between min-h-[320px] border border-brand-khaki/5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-4 block">Engagement</span>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-4xl font-serif font-bold text-brand-onyx">+154.7%</span>
                      <TrendingUp className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-xs text-brand-onyx/60">57K total tracked events</p>
                  </div>
                  <div className="flex items-end gap-1.5 h-32 mt-8">
                    {[30, 40, 35, 60, 50, 75, 65, 85, 70, 90, 80, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-full ${i < 8 ? 'bg-brand-khaki' : 'bg-brand-onyx/10'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-brand-onyx/30 uppercase tracking-widest">
                    <span>Q1 2025</span>
                    <span>Q1 2026</span>
                  </div>
                </div>

                <div className="bg-brand-parchment/30 rounded-[2rem] p-8 flex flex-col justify-between min-h-[320px] border border-brand-khaki/5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-4 block">Active Users</span>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-4xl font-serif font-bold text-brand-onyx">+210.3%</span>
                      <TrendingUp className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-xs text-brand-onyx/60">11K active users YTD</p>
                  </div>
                  <div className="h-32 mt-8 relative">
                    <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
                      <path
                        d="M0,90 L20,85 L40,88 L60,82 L80,75 L100,78 L120,70 L140,72 L160,65 L180,68 L200,60 L220,62 L240,55 L260,58 L280,50 L300,52 L320,45 L340,48 L360,40 L380,42 L400,35"
                        fill="none"
                        stroke="#BBA58E"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0,90 L20,85 L40,88 L60,82 L80,75 L100,78 L120,70 L140,72 L160,65 L180,68 L200,60 L220,62 L240,55 L260,58 L280,50 L300,52 L320,45 L340,48 L360,40 L380,42 L400,35 V100 H0 Z"
                        fill="url(#gradient-masters)"
                        className="opacity-20"
                      />
                      <defs>
                        <linearGradient id="gradient-masters" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#BBA58E" />
                          <stop offset="100%" stopColor="#BBA58E" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-brand-onyx/30 uppercase tracking-widest">
                    <span>Jan 2025</span>
                    <span>Mar 2026</span>
                  </div>
                </div>

                <div className="bg-brand-parchment/30 rounded-[2rem] p-8 flex flex-col justify-between min-h-[320px] border border-brand-khaki/5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-4 block">New Users</span>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-4xl font-serif font-bold text-brand-onyx">+208.9%</span>
                      <TrendingUp className="w-6 h-6 text-[#22C55E]" />
                    </div>
                    <p className="text-xs text-brand-onyx/60">11K newly acquired users</p>
                  </div>
                  <div className="flex items-end gap-3 h-32 mt-8">
                    {[25, 35, 50, 45, 65, 55, 75, 100].map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 rounded-2xl ${i === 7 ? 'bg-brand-khaki' : 'bg-brand-khaki/20'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-[10px] font-bold text-brand-onyx/30 uppercase tracking-widest">
                    <span>Q1 2025</span>
                    <span>Q1 2026</span>
                  </div>
                </div>

                <div className="bg-brand-parchment/30 rounded-[2rem] p-8 flex flex-col min-h-[320px] border border-brand-khaki/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-8 block">Channel Breakdown</span>
                  <div className="space-y-8">
                    {[
                      { label: 'Organic Search', value: '10.5K', growth: '+386.4%' },
                      { label: 'Direct Traffic', value: '2.9K', growth: '+232.7%' },
                      { label: 'Referral', value: '0.2K', growth: '+75.6%' },
                    ].map((channel, i) => (
                      <div key={i} className="flex items-end justify-between border-b border-brand-onyx/10 pb-2">
                        <div className="text-3xl font-serif font-bold text-brand-onyx">{channel.value}</div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-[#22C55E] mb-1 uppercase tracking-wider">{channel.growth}↑</div>
                          <div className="text-[10px] font-bold text-brand-onyx/40 uppercase tracking-widest">{channel.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-brand-onyx/40 hover:text-brand-khaki transition-colors font-bold uppercase tracking-widest text-xs"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
