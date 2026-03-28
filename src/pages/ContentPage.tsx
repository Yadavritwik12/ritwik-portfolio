import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Edit3, Users, Share2, BookOpen, ArrowRight, Volume2, VolumeX, Play, Pause, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

// Sample video data - using reliable sample MP4 links for the carousel
// Note: Instagram Reel links cannot be played directly in a <video> tag.
// These sample videos demonstrate the carousel effect, while the "Go to Reel" 
// button links to the actual Instagram content.
const REELS_DATA = [
  {
    id: 1,
    videoUrl: "https://www.dropbox.com/scl/fi/78nyvts2gl123db34eeod/Melville.mp4?rlkey=pm0aq3bdjdd9idj9edxk7ewol&st=dwccgvu9&raw=1",
    originalUrl: "https://www.instagram.com/reel/DQrdTSaDxoN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Project Melville",
    description: "A strategic storytelling piece demonstrating how digital project management and radical transparency can bridge the geographic gap in the renovation industry. This Reel highlights the shift toward 'Remote Reno' services, positioning the brand as a leader in seamless, tech-enabled client experiences."
  },
  {
    id: 2,
    videoUrl: "https://www.dropbox.com/scl/fi/eyn246392fu8jrlx7ckn9/Jt-reel.mp4?rlkey=lyiddz649pept4fg87jz5zo6l&st=ykogrds2&raw=1",
    originalUrl: "https://www.instagram.com/reel/DTtuAjxkYD1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Enzo X Jobtread",
    description: "Orchestrated a high-impact collaboration series between Enzo Design Build and JobTread (SaaS). This strategic partnership resulted in a suite of performance-driven video assets adopted by JobTread for their national Meta advertising campaigns, showcasing our project workflows as the industry gold standard."
  },
  {
    id: 3,
    videoUrl: "https://www.dropbox.com/scl/fi/dfvq5zdexgfo0bx5gmots/guess-the-reno.mp4?rlkey=659b33t7tw7jz4wc33aworp6k&st=d32w611j&raw=1",
    originalUrl: "https://www.instagram.com/reel/DQuo6gQkgsA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    title: "Active Lifestyle",
    description: "Summer Vibes"
  },
  {
    id: 4,
    videoUrl: "https://www.dropbox.com/scl/fi/9g2fg6njntrli87vbg36b/IDS-2025.mp4?rlkey=3mmrupk7c00ydaiwlm9qpetf7&st=y5quji4x&raw=1",
    originalUrl: "https://www.instagram.com/reel/DPMZgesCWhc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    
  },
  {
    id: 5,
    videoUrl: "https://www.dropbox.com/scl/fi/6ra5oskblcx49fzbysdxh/enzo.design.build_reel.mp4?rlkey=kxeed6kwy6151ill6htqg1hem&st=idrh1g45&raw=1",
    originalUrl: "https://www.instagram.com/reel/DVfG1KhgVx1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 6,
    videoUrl: "https://www.dropbox.com/scl/fi/uik4asmhxckgcy6vr2mln/Jobtread-podacst.mp4?rlkey=oeny0qaq6zkax0fqd0fq5z1g7&st=skd1ds4l&raw=1",
    originalUrl: "https://www.instagram.com/reel/DURP0N6EvPI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    
  },
  {
    id: 7,
    videoUrl: "https://www.dropbox.com/scl/fi/y4k9ro5k24nil2f65fpan/Jt-insta360.mp4?rlkey=qholxe20wztemuddfuv6m12sx&st=iokvwovn&raw=1",
    originalUrl: "https://www.instagram.com/reel/DURP0N6EvPI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    
  },
  {
    id: 8,
    videoUrl: "https://www.dropbox.com/scl/fi/2o95ryrlc6bt5jmf44p7q/site-walk.mp4?rlkey=veoa7hkdkqyw630qd8xmfvj57&st=xjfk330a&raw=1",
    originalUrl: "https://www.instagram.com/reel/DObspkRkueE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 9,
    videoUrl: "https://www.dropbox.com/scl/fi/yt9i6mgod60w0sfd0p84o/W5th-walkthorugh-part-1.mp4?rlkey=1jx66yvov0yzcnx1nxcm38ah7&st=mo580elf&raw=1",
    originalUrl: "https://www.instagram.com/reel/DUE1I4ZjxF3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 10,
    videoUrl: "https://www.dropbox.com/scl/fi/wtidi8ghixbtkrxn6583c/W5th-walkthough-part-2.mp4?rlkey=z2kzi096r6gz10pqey1kydu3n&st=rgqh2onk&raw=1",
    originalUrl: "https://www.instagram.com/reel/DUZOteWEgw_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  }
];

function ReelsCarousel() {
  const containerRef = useRef(null);
  const isSectionInView = useInView(containerRef, { amount: 0.3 });
  const N = REELS_DATA.length;
  const INFINITE_DATA = [...REELS_DATA, ...REELS_DATA, ...REELS_DATA];
  const [activeIndex, setActiveIndex] = useState(N + 2);
  const [hasInteracted, setHasInteracted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ITEM_WIDTH = 280 + 64; // 280px width + 64px gap (gap-16)

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, offsetWidth } = scrollRef.current;
    
    const centerOffset = scrollLeft + (offsetWidth / 2);
    const index = Math.round((centerOffset - (offsetWidth / 2)) / ITEM_WIDTH);
    
    if (index !== activeIndex && index >= 0 && index < INFINITE_DATA.length) {
      setActiveIndex(index);
    }

    // Infinite loop jump logic
    // If we scroll too far left, jump to the middle set
    if (scrollLeft < (N * ITEM_WIDTH) / 2) {
      scrollRef.current.scrollLeft += N * ITEM_WIDTH;
    } 
    // If we scroll too far right, jump to the middle set
    else if (scrollLeft > (N * 1.5) * ITEM_WIDTH) {
      scrollRef.current.scrollLeft -= N * ITEM_WIDTH;
    }
  };

  const scrollToReel = (index: number) => {
    if (!scrollRef.current) return;
    const targetScroll = (index * ITEM_WIDTH);
    
    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
    setActiveIndex(index);
    setHasInteracted(true);
  };

  const nextReel = () => {
    scrollToReel(activeIndex + 1);
  };

  const prevReel = () => {
    scrollToReel(activeIndex - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        const initialScroll = ((N + 2) * ITEM_WIDTH);
        scrollRef.current.scrollLeft = initialScroll;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [ITEM_WIDTH, N]);

  return (
    <div ref={containerRef} className="mb-8 relative group min-h-[700px] flex items-center overflow-hidden">
      {/* Static Phone Frame Overlay */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[304px] h-[524px] z-20 pointer-events-none">
        <div className="absolute inset-0 border-[12px] border-brand-onyx rounded-[3.5rem] shadow-[0_0_50px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] bg-transparent">
          {/* Inner Seam Mask - ensures no gaps between video and frame */}
          <div className="absolute inset-[-1px] rounded-[2.75rem] shadow-[inset_0_0_0_3px_#141414] z-10" />
          
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-brand-onyx rounded-full flex items-center justify-center gap-2 z-30">
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-8 h-1 rounded-full bg-white/10" />
          </div>
          
          {/* Side Buttons */}
          <div className="absolute top-24 -left-[14px] w-[3px] h-10 bg-brand-onyx rounded-r-sm" />
          <div className="absolute top-40 -left-[14px] w-[3px] h-14 bg-brand-onyx rounded-r-sm" />
          <div className="absolute top-58 -left-[14px] w-[3px] h-14 bg-brand-onyx rounded-r-sm" />
          <div className="absolute top-36 -right-[14px] w-[3px] h-24 bg-brand-onyx rounded-l-sm" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevReel}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-brand-onyx transition-all hover:bg-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextReel}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-brand-onyx transition-all hover:bg-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="w-full flex gap-16 overflow-x-auto py-10 px-[calc(50%-140px)] snap-x snap-mandatory cursor-grab active:cursor-grabbing no-scrollbar"
      >
        {INFINITE_DATA.map((reel, index) => (
          <ReelItem 
            key={index} 
            reel={reel} 
            isActive={index === activeIndex} 
            hasInteracted={hasInteracted}
            isSectionInView={isSectionInView}
            onSelect={() => scrollToReel(index)}
            onInteraction={() => setHasInteracted(true)}
          />
        ))}
      </div>

      {!hasInteracted && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
          <button 
            onClick={() => setHasInteracted(true)}
            className="flex items-center gap-2 px-6 py-3 bg-brand-khaki text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl animate-pulse hover:bg-brand-onyx transition-colors"
          >
            <Volume2 className="w-4 h-4" />
            Enable Sound & Controls
          </button>
        </div>
      )}
    </div>
  );
}

function ReelItem({ reel, isActive, hasInteracted, isSectionInView, onSelect, onInteraction }: { reel: any, isActive: boolean, hasInteracted: boolean, isSectionInView: boolean, onSelect: () => void, onInteraction: () => void, key?: any }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLocalMuted, setIsLocalMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isActive || !hasInteracted || isLocalMuted || !isSectionInView;
      
      if (isActive && isSectionInView) {
        if (isPlaying) {
          videoRef.current.play().catch((err) => {
            console.warn("Playback failed:", err);
          });
        } else {
          videoRef.current.pause();
        }
      } else {
        // Pause non-active or out-of-view videos to save resources
        videoRef.current.pause();
      }
    }
  }, [isActive, hasInteracted, isPlaying, isLocalMuted, isSectionInView]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
    onInteraction();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoaded(true);
      setHasError(false);
    }
  };

  const handleError = () => {
    console.error("Video failed to load:", reel.videoUrl);
    setHasError(true);
    setIsLoaded(true); // Stop showing the spinner
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLocalMuted(!isLocalMuted);
    onInteraction();
  };

  return (
    <motion.div 
      onClick={onSelect}
      animate={{ 
        scale: isActive ? 1 : 0.8,
        opacity: 1,
        zIndex: isActive ? 10 : 1,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="relative flex-shrink-0 w-[280px] h-[500px] snap-center cursor-pointer"
    >
      <div className="w-full h-full rounded-[2.75rem] overflow-hidden bg-brand-khaki relative flex items-center justify-center">
        <span className="absolute top-10 left-1/2 -translate-x-1/2 text-white/20 font-bold text-6xl z-0">{reel.id}</span>
        
        {hasError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-onyx/80 p-6 text-center z-20">
            <VolumeX className="w-12 h-12 text-brand-khaki mb-4" />
            <p className="text-white text-sm font-serif mb-2">Video Unavailable</p>
            <p className="text-white/60 text-[10px] leading-relaxed">
              Google Drive links often fail to stream directly. Please use a direct .mp4 link from a host like Cloudinary or Dropbox.
            </p>
          </div>
        ) : (
          <video 
            ref={videoRef}
            src={reel.videoUrl}
            loop
            playsInline
            autoPlay
            preload="auto"
            muted={!isActive || !hasInteracted || isLocalMuted || !isSectionInView}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onError={handleError}
            onCanPlay={() => setIsLoaded(true)}
            className="w-full h-full object-cover relative z-10"
          />
        )}
        
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-brand-onyx/20 backdrop-blur-sm z-20">
            <div className="w-8 h-8 border-4 border-brand-khaki border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 flex flex-col justify-end">
          <div className="mb-4">
            <h3 className="text-white font-serif text-xl mb-1">{reel.title}</h3>
            <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold">{reel.description}</p>
          </div>

          {/* Video Controls for Active Reel */}
          {isActive && hasInteracted && (
            <div className="flex flex-col gap-4 z-30" onClick={(e) => e.stopPropagation()}>
              {/* Progress Bar */}
              <input 
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-khaki"
              />
              
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <button onClick={togglePlay} className="hover:text-brand-khaki transition-colors">
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button onClick={toggleMute} className="hover:text-brand-khaki transition-colors">
                    {isLocalMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
                
                <a 
                  href={reel.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all border border-white/10"
                >
                  <ExternalLink className="w-3 h-3" />
                  Go to Reel
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Muted Indicator for Adjacent Reels */}
        {!isActive && (
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/60">
            <VolumeX className="w-4 h-4" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ContentPage() {
  return (
    <div className="pt-24 pb-12 bg-brand-parchment min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-onyx">Short Form Content</h2>
          <div className="w-24 h-1 bg-brand-khaki mx-auto mt-4 rounded-full" />
        </div>
        
        <ReelsCarousel />

        {/* Re-Design Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-brand-onyx mb-4">Re-Design</h2>
            <div className="w-24 h-1 bg-brand-khaki mx-auto rounded-full" />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-start mb-20"
          >
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-brand-khaki/20 text-brand-jet text-xs font-bold tracking-widest uppercase mb-6">
                Brand Identity
              </span>
              <h3 className="text-4xl md:text-5xl font-serif text-brand-onyx mb-8">Creativa Cafe</h3>
              <p className="text-lg text-brand-onyx/70 leading-relaxed mb-8">
                Creativa Coffee is a design project that I conceptualized and brought to life from the ground up. Every element of this brand, from the inception of the name and tagline to the creation of its visual identity, reflects a meticulous creative process. I crafted the color palette, designed the logo, and developed the overall aesthetic, ensuring that every detail aligned with the brand's essence.
              </p>
              <p className="text-lg text-brand-onyx/70 leading-relaxed">
                This project allowed me to fully leverage my skills in Adobe Photoshop and Illustrator, bringing together strategy, creativity, and technical expertise. Creativa Coffee is more than a design—it’s a testament to my ability to transform an idea into a cohesive and compelling brand identity.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/Creativa%20coffee/Logo%20idea.jpeg" 
                  alt="Creativa Cafe Logo Idea 1" 
                  className="rounded-2xl w-full aspect-square object-contain bg-white/50 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="/Creativa%20coffee/Logo-idea.jpeg" 
                  alt="Creativa Cafe Logo Idea 2" 
                  className="rounded-2xl w-full aspect-square object-contain bg-white/50 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="/Creativa%20coffee/Coffee_Bag_v02.jpg" 
                  alt="Creativa Cafe Coffee Bag" 
                  className="rounded-2xl w-full aspect-square object-contain bg-white/50 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="/Creativa%20coffee/board.png" 
                  alt="Creativa Cafe Board" 
                  className="rounded-2xl w-full aspect-square object-contain bg-white/50 shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-brand-khaki/20" />
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-khaki">Social media posts</h4>
                  <div className="h-px flex-1 bg-brand-khaki/20" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "/Creativa%20coffee/Post%201.jpg",
                    "/Creativa%20coffee/Post%202.jpg",
                    "/Creativa%20coffee/Post%203.jpg"
                  ].map((img, i) => (
                    <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-sm">
                      <img 
                        src={img} 
                        alt={`Brand Kit ${i + 1}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {[
            { 
              icon: <BookOpen className="w-8 h-8" />, 
              title: "Authority Building", 
              desc: "Architecting high-performance content clusters that dominate search rankings and secure long-term topical authority." 
            },
            { 
              icon: <Edit3 className="w-8 h-8" />, 
              title: "High-Intent Copy", 
              desc: "Optimizing the customer journey through persuasive, multi-channel copy designed to eliminate friction and accelerate the sales cycle." 
            },
            { 
              icon: <Share2 className="w-8 h-8" />, 
              title: "Strategic Distribution", 
              desc: "Orchestrating integrated multi-channel distribution frameworks that amplify reach and ensure consistent brand messaging across the entire digital ecosystem." 
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

        <div className="bg-brand-onyx rounded-[3rem] p-12 md:p-20 text-brand-parchment relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The Content Authority Loop</h2>
            <p className="text-xl text-brand-parchment/70 mb-12 leading-relaxed">
              My strategy doesn't just end with a published post. By creating High-Equity Assets that earn backlinks, we increase the overall Domain Authority, which makes the next Topic Cluster rank faster and with less effort. It’s a self-sustaining cycle of organic growth.
            </p>
            <ul className="space-y-8">
              {[
                {
                  title: "Pillar Architecture",
                  desc: "Mapping comprehensive topic silos to capture 100% of a niche’s search footprint."
                },
                {
                  title: "Intent Engineering",
                  desc: "Aligning content format (video, long-form, tools) with the specific psychological needs of the user."
                },
                {
                  title: "Authority Compounding",
                  desc: "Developing \"moat-building\" content—assets so valuable that competitors are forced to cite them."
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-brand-khaki/20 flex items-center justify-center text-brand-khaki">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                    <p className="text-brand-parchment/60 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
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
