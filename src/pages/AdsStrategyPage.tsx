import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TrendingUp, Target, PieChart, ArrowRight } from 'lucide-react';

export default function AdsStrategyPage() {
  return (
    <div className="pt-24 pb-12 bg-brand-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-12"
        >
          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-8 text-brand-onyx">
            High-Performance Ad Strategy for ROI.
          </h1>
          <p className="text-xl text-brand-onyx/70 leading-relaxed">
            I deliver exceptional ROI through data-driven paid media strategies, ranging from achieving a 40x ROAS for premium real estate to scaling lead generation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              icon: <Target className="w-8 h-8" />, 
              title: "Precision Targeting", 
              desc: "Reaching your ideal customer through advanced audience segmentation and retargeting." 
            },
            { 
              icon: <TrendingUp className="w-8 h-8" />, 
              title: "ROI-Focused Scaling", 
              desc: "Optimizing campaigns for maximum return on ad spend (ROAS) and lowest cost per acquisition (CPA)." 
            },
            { 
              icon: <PieChart className="w-8 h-8" />, 
              title: "Full-Funnel Strategy", 
              desc: "Designing multi-channel campaigns that guide users from awareness to final conversion." 
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

        <div className="bg-brand-onyx rounded-[3rem] p-8 md:p-16 text-brand-onyx relative overflow-hidden bg-white shadow-2xl border border-brand-khaki/10">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Greater Vancouver's Top 1% Realtor's story</h2>
            <p className="text-xl text-brand-onyx/60 leading-relaxed">
              How my approach for running ads for a top realtor brought him results worth 40x the amount spend on the ads, ensuring that every dollar spent contributes to the bottom line.
            </p>
          </div>

          {/* Overall Performance Overview */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 block">Overall Performance Overview</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/20 block">Oct 01 – Dec 31, 2023</span>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { label: 'Total Views', value: '87.4K', growth: '+50.6%', trend: [30, 45, 35, 60, 55, 80, 70, 95] },
                { label: 'Interactions', value: '83', growth: '+159.4%', trend: [20, 30, 25, 50, 45, 70, 60, 90] },
                { label: 'Profile Visits', value: '191', growth: '+34.5%', trend: [40, 50, 45, 65, 60, 85, 75, 100] },
                { label: 'Total Reach', value: '21.7K', growth: '+27.2%', trend: [35, 40, 38, 55, 50, 75, 70, 90] }
              ].map((stat, i) => (
                <div key={i} className="bg-brand-parchment/30 rounded-[2rem] p-6 border border-brand-khaki/5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-3 block">{stat.label}</span>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-serif font-bold text-brand-onyx">{stat.value}</span>
                    <span className="text-[10px] font-bold text-[#22C55E]">{stat.growth}↑</span>
                  </div>
                  <div className="h-12 relative">
                    <svg viewBox="0 0 200 50" className="w-full h-full overflow-visible">
                      <path
                        d={`M ${stat.trend.map((h, idx) => `${(idx / (stat.trend.length - 1)) * 200},${50 - (h / 100) * 40}`).join(' L ')}`}
                        fill="none"
                        stroke="#BBA58E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Breakdown */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-8 block">Campaign Breakdown: Top Performing Ads (Feb, 2026 - Mar, 2026)</span>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Burke Mountain Townhome",
                  subtitle: "$60,000 Off Promo",
                  leads: "19",
                  cpl: "$8.80",
                  views: "14.7K",
                  engagement: "5.2K",
                  clicks: "125",
                  ctr: "0.87%",
                  trend: [20, 40, 30, 60, 50, 90, 70, 100]
                },
                {
                  title: "West Coquitlam Luxury",
                  subtitle: "Save Up to $100,000",
                  leads: "12",
                  cpl: "$19.31",
                  views: "15.9K",
                  engagement: "4.9K",
                  clicks: "160",
                  ctr: "1.03%",
                  trend: [30, 50, 40, 70, 60, 85, 75, 95]
                },
                {
                  title: "Mateo Studio Living",
                  subtitle: "Starting from $288K",
                  leads: "11",
                  cpl: "$16.97",
                  views: "11.2K",
                  engagement: "3.1K",
                  clicks: "81",
                  ctr: "0.74%",
                  trend: [25, 35, 45, 55, 65, 75, 85, 100]
                }
              ].map((ad, i) => (
                <div key={i} className="bg-brand-parchment/30 rounded-[2.5rem] p-8 border border-brand-khaki/5 flex flex-col justify-between min-h-[500px]">
                  <div>
                    <div className="mb-8">
                      <h4 className="text-2xl font-serif text-brand-onyx mb-1">{ad.title}</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-onyx/40">{ad.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-1 block">Leads</span>
                        <div className="text-3xl font-serif font-bold text-brand-onyx">{ad.leads}</div>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40 mb-1 block">Cost Per Lead</span>
                        <div className="text-3xl font-serif font-bold text-brand-onyx">{ad.cpl}</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {[
                        { label: 'Views', value: ad.views },
                        { label: 'Engagements', value: ad.engagement },
                        { label: 'Link Clicks', value: ad.clicks },
                        { label: 'CTR', value: ad.ctr }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center border-b border-brand-onyx/5 pb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-onyx/40">{item.label}</span>
                          <span className="text-sm font-bold text-brand-onyx">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-20 relative">
                    <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
                      <path
                        d={`M ${ad.trend.map((h, idx) => `${(idx / (ad.trend.length - 1)) * 300},${100 - (h / 100) * 80}`).join(' L ')}`}
                        fill="none"
                        stroke="#BBA58E"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={`M ${ad.trend.map((h, idx) => `${(idx / (ad.trend.length - 1)) * 300},${100 - (h / 100) * 80}`).join(' L ')} V 100 H 0 Z`}
                        fill="url(#grad-ad)"
                        className="opacity-10"
                      />
                      <defs>
                        <linearGradient id="grad-ad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#BBA58E" />
                          <stop offset="100%" stopColor="#BBA58E" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              ))}
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
