import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight,
  TrendingUp,
  Target,
  Users,
  Award,
  ExternalLink,
  Search,
  Edit3,
  PieChart
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PROJECTS = [
  {
    title: "SEO Portfolio",
    category: "Organic Search",
    description: "Grew enzodesignbuild.com to 38,000+ annual sessions and 31,600+ users in under 12 months with zero ad spend.",
    image: "/SEO%20cover.jpg",
    tags: ["GROWTH", "Backlinks", "GEO"],
    path: "/seo"
  },
  {
    title: "Content Portfolio",
    category: "Strategic Consulting",
    description: "Achieved 13% sales growth and 42% increase in qualified leads within 3 months of taking on strategic leadership.",
    image: "/contentport.jpg",
    tags: ["Views", "Reach", "Storytelling"],
    path: "/content"
  },
  {
    title: "Ads Strategy",
    category: "Technical SEO",
    description: "Scaled organic clicks by 736% and impressions by 787% in less than 12 months through technical SEO alone.",
    image: "/ads%20dashboard.jpg",
    tags: ["PAID MEDIA", "ROAS", "PPC"],
    path: "/ads"
  }
];

const DASHBOARD_METRICS = [
  { label: 'Keywords Ranked in top 100', value: '300+', trend: 'Canada Market' },
  { label: 'Top-3 in SERP', value: '70+', trend: 'Across 300+ Keywords' },
  { label: 'Paid media ROAS', value: '40x', trend: 'Premium Real Estate' },
  { label: 'Vancouver\'s 1% Club', value: 'Member', trend: 'Strategic Excellence' },
  { label: 'Organic Sessions', value: '38k+', trend: 'Enzo Design Build' },
  { label: 'Lead Growth', value: '42%', trend: 'In 3 Months' },
];

export default function HomePage({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-khaki rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-jet rounded-full blur-[120px] opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-khaki/20 text-brand-jet text-xs font-bold tracking-widest uppercase mb-6">
              Marketing Manager & SEO Specialist
            </span>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-brand-onyx">
              Ritwik <span className="italic">Yadav</span>
            </h1>
            <p className="text-lg text-brand-onyx/70 mb-10 max-w-lg leading-relaxed">
              Strategic marketing professional with 6+ years of experience in building high-performance organic growth engines that prioritize technical SEO and content authority.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollTo('projects')}
                className="px-8 py-4 bg-brand-onyx text-brand-parchment rounded-full font-medium flex items-center gap-2 hover:bg-brand-jet transition-all group shadow-xl shadow-brand-onyx/20"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('about')}
                className="px-8 py-4 border border-brand-onyx/20 text-brand-onyx rounded-full font-medium hover:bg-brand-onyx/5 transition-all"
              >
                About Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Ritwik Yadav Portrait" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-khaki rounded-full -z-10 blur-2xl opacity-40" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-jet/30 rounded-full -z-10 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Career Snapshot Dashboard */}
      <section className="py-12 bg-brand-onyx text-brand-parchment">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-2">Career Snapshot</h2>
            <p className="text-brand-khaki text-sm uppercase tracking-widest font-medium">Key Performance Indicators</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {DASHBOARD_METRICS.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 bg-white/5 border-white/10 text-center flex flex-col justify-center"
              >
                <div className="text-3xl font-serif font-bold text-brand-khaki mb-1">{metric.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-parchment/80 mb-2">{metric.label}</div>
                <div className="text-[10px] text-brand-parchment/40 italic">{metric.trend}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-brand-parchment border-t border-brand-khaki/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif mb-8 text-brand-onyx">
                Bridging the gap between <span className="italic text-brand-khaki">Traditional SEO</span> and the future of search.
              </h2>
              <p className="text-lg text-brand-onyx/70 mb-6 leading-relaxed">
                I specialize in building high-performance organic growth engines that prioritize technical SEO, content authority, and strategic partnerships.
              </p>
              <p className="text-lg text-brand-onyx/70 mb-10 leading-relaxed">
                I’ve consistently delivered exceptional ROI ranging from achieving a 40x ROAS for premium realtor account to driving 38,000+ annual sessions through organic search alone in less than 8 months time. 
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {[
                  { icon: <Target className="w-5 h-5" />, title: 'GROWTH', desc: 'Backlinks & GEO', path: '/seo' },
                  { icon: <Users className="w-5 h-5" />, title: 'STORYTELLING', desc: 'Views & Reach', path: '/content' },
                  { icon: <TrendingUp className="w-5 h-5" />, title: 'PAID MEDIA', desc: 'ROAS & PPC', path: '/ads' },
                  { icon: <Award className="w-5 h-5" />, title: 'STRATEGY', desc: 'Performance Driven', path: '/ads' },
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex gap-4 group items-start"
                  >
                    <div className="text-brand-khaki transition-transform group-hover:scale-110 mt-1 flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-bold text-brand-onyx group-hover:text-brand-khaki transition-colors leading-tight mb-1">{item.title}</div>
                      <div className="text-sm text-brand-onyx/50 leading-relaxed">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400" 
                    alt="Strategic Planning" 
                    className="rounded-2xl w-full aspect-square object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <Link 
                    to="/seo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="block bg-brand-khaki p-8 rounded-2xl text-brand-onyx hover:bg-brand-khaki/90 transition-colors group"
                  >
                    <div className="text-3xl font-serif mb-2 flex items-center justify-between">
                      SEO
                      <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm opacity-80">Securing visibility within AI platforms and LLMs.</p>
                  </Link>
                </div>
                <div className="space-y-4 pt-12">
                  <Link 
                    to="/ads"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="block bg-brand-jet p-8 rounded-2xl text-brand-parchment hover:bg-brand-jet/90 transition-colors group"
                  >
                    <div className="text-3xl font-serif mb-2 flex items-center justify-between">
                      Growth
                      <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-sm opacity-80">Scaling brands in high-competition sectors.</p>
                  </Link>
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400" 
                    alt="Data Driven Marketing" 
                    className="rounded-2xl w-full aspect-square object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-brand-parchment border-t border-brand-khaki/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <h2 className="text-5xl font-serif mb-4">Portfolio</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <Link
                key={i}
                to={project.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group cursor-pointer block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3] bg-brand-onyx">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brand-onyx/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 bg-brand-parchment rounded-full flex items-center justify-center text-brand-onyx shadow-xl">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-brand-khaki/20 rounded-full text-brand-onyx/60 whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-serif mb-2 group-hover:text-brand-khaki transition-colors">{project.title}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
