import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Users, 
  Trophy, 
  TrendingUp, 
  Calendar, 
  Mail, 
  Phone, 
  Plus, 
  Globe, 
  Menu, 
  X, 
  ChevronRight,
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  ExternalLink,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Content Definitions
const stats = [
  { label: 'PUBLIC REACH', value: '150k+', sub: 'Digital footprint' },
  { label: 'PEAK LIVE', value: '1,420+', sub: 'Real-time impact' },
  { label: 'FOUNDED', value: '2023', sub: 'December 23' },
  { label: 'EVENTS', value: '12+', sub: 'Organized' },
];

const team = [
  { name: 'Akhilur Rahman Tutul', role: 'Founder & Owner', email: 'levelynesports@gmail.com', phone: '+880 1820-302059', tasks: ['Visionary Strategy', 'Asset Management', 'Community Builder'], img: './member-1.jpg' },
  { name: 'Rafiul Islam Talukder', role: 'Chief Executive Officer', email: 'rafiulit6@gmail.com', phone: '+880 1303-356185', tasks: ['Operations Hub', 'Network Expansion', 'Key Partnerships'], img: './member-2.jpg' },
  { name: 'Ahmed Anin', role: 'Director', email: 'zerithofficial7@gmail.com', phone: '+880 1953-275450', tasks: ['Event Directing', 'Production QC', 'Brand Integrity'], img: './member-3.jpg' },
  { name: 'Reyon Khan', role: 'Head of Operations', email: 'khanreyon@gmail.com', phone: '+880 1784-466652', tasks: ['Field Logistics', 'Staff Command', 'Crisis Control'], img: './member-4.jpg' },
];

const events = [
  { 
    n: '01', 
    name: 'MYTHFRACT CLASH', 
    game: 'MLBB', 
    details: '64 Teams | 80k+ Reach | 1,400+ Peak Viewers', 
    prize: '5,000 BDT',
    status: 'Completed', 
    img: './event-1.jpg' 
  },
  { 
    n: '02', 
    name: 'RISE OF LIEGE', 
    game: 'MLBB', 
    details: 'Sponsored by MLBB Official Bangladesh | 32 Teams', 
    prize: '34,000 Diamonds',
    status: 'Official Partner', 
    img: './event-2.jpg' 
  },
  { 
    n: '03', 
    name: 'SOULS CUP', 
    game: 'eFOOTBALL', 
    details: '24 Elite Players | 20,000+ Total Reach', 
    prize: '1,000 BDT',
    status: 'Elite', 
    img: './event-3.jpg' 
  },
  { 
    n: '04', 
    name: 'ARISE CHAMPIONS', 
    game: 'MLBB', 
    details: '5v5 Competitive Circuit | Organized by Operators VI', 
    prize: 'Pro Circuit',
    status: 'Operational', 
    img: './event-4.jpg' 
  },
];

const creativeEvents = [
  { name: 'Art Contest', platform: 'Discord', detail: 'Voting-based event with 1,800 BDT Prize Pool' },
  { name: 'MLBB Highlight', platform: 'Socials', detail: 'Community content creation for FB/YT' },
  { name: 'Magic Chess', platform: 'Discord', detail: '16-player bracket streamed live' },
];

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/levelynesports' },
  { name: 'YouTube', url: 'https://youtube.com/@levelynesports' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@levelynesports' },
  { name: 'Instagram', url: 'https://www.instagram.com/levelynesports' },
  { name: 'X', url: 'https://x.com/levelynesports' },
];

const partners = [
  { name: 'MLBB Official', role: 'Strategy Partner', type: 'DEVELOPER' },
  { name: 'LVE Strategists', role: 'Insight Hub', type: 'ANALYTICS' },
  { name: 'Elite Strikers', role: 'Talent Pool', type: 'ROSTER' },
  { name: 'Zerith Official', role: 'Creative Core', type: 'PRODUCTION' },
];

const roster = [
  { n: '01', name: 'LEVELYN ORIGIN', team: 'MLBB', role: 'ACTIVE' },
  { n: '02', name: 'DIVISION ALPHA', team: 'MLBB', role: 'DEVELOPING' },
  { n: '03', name: 'STRIKE SQUAD', team: 'eFOOTBALL', role: 'COMPETING' },
];

const navLinks = [
  { name: 'Identity', href: '#about' },
  { name: 'The Grid', href: '#team' },
  { name: 'Legacy', href: '#events' },
  { name: 'Roster', href: '#roster' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[800] h-[72px] flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          <img src="./logo.png" alt="LVE" className="h-6 w-auto" />
          <span className="font-bold text-[13px] tracking-[0.1em] text-white uppercase hidden sm:block">LEVELYN ESPORTS</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-semibold text-[11px] tracking-[0.15em] uppercase text-g5 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden sm:inline-flex px-5 py-2 bg-white text-black text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-g7 transition-all rounded-sm">
            Contact
          </a>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[799] flex flex-col items-center justify-center p-12"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-3xl font-bold text-white uppercase tracking-tighter">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <header className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="section-w pt-20 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="flex flex-col gap-6">
              <div className="label-caps px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit">
                ESTABLISHED 2023
              </div>
              
              <h1 className="heading-hero">
                Shaping the <br /> 
                <span className="text-brand-purple italic">Next Evolution.</span>
              </h1>

              <p className="text-[17px] md:text-[20px] font-normal text-g5 leading-relaxed max-w-2xl">
                Levelyn Esports is a visionary organization dedicated to elevating competitive gaming in Bangladesh with elite management and professional infrastructure.
              </p>

              <div className="flex gap-4 mt-4">
                <button className="px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-g7 transition-all">Get Started</button>
                <button className="px-8 py-3 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:border-white transition-all">Who we are</button>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="py-20 border-y border-white/5">
        <div className="section-w grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-extrabold text-white tracking-tighter">{stat.value}</div>
              <div className="text-[10px] font-bold text-g5 uppercase tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Concept Placeholder */}
      <section id="about" className="py-32 section-w">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-g2 border border-white/5 relative group overflow-hidden">
             <div className="absolute inset-0 bg-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[100px]" />
             <div className="flex items-center justify-center h-full text-g4 font-mono text-xs italic tracking-widest">
                [ VISUAL CORE_IDENTITY ]
             </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="label-caps">OUR CORE</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight uppercase">Strategic <br/> Infrastructure.</h2>
            <p className="text-g5 leading-relaxed text-lg">Levelyn Esports is a premier visionary organization dedicated to shaping the future of competitive gaming through professional management and regional talent fostering.</p>
            <div className="grid grid-cols-2 gap-8 mt-4 border-t border-white/5 pt-8">
              {creativeEvents.map(ev => (
                <div key={ev.name}>
                  <div className="text-[10px] font-bold text-brand-purple uppercase tracking-widest mb-1">{ev.name}</div>
                  <div className="text-sm font-medium text-white">{ev.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Minimal */}
      <section id="team" className="py-32 bg-g1">
        <div className="section-w">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter uppercase">Board.</h2>
            <p className="text-g5 max-w-sm mb-2 text-sm leading-relaxed">The strategic council driving our operational integrity and national expansion.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.map((member) => (
              <div key={member.name} className="card-clean hover:-translate-y-2 group">
                <div className="aspect-[4/5] bg-g2 mb-6 transition-all duration-500 flex items-center justify-center overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                </div>
                <div className="text-[10px] font-bold text-brand-purple uppercase tracking-[0.2em] mb-2">{member.role}</div>
                <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
                <div className="text-[10px] text-g5 font-mono mb-4">{member.email}</div>
                <ul className="space-y-1">
                  {member.tasks.slice(0, 2).map(t => (
                    <li key={t} className="text-xs text-g5 shrink-0">• {t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy / Events */}
      <section id="events" className="py-32 border-b border-white/5">
        <div className="section-w">
          <div className="flex flex-col gap-4 mb-20 max-w-2xl">
            <div className="label-caps">PORTFOLIO</div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter uppercase">Tournament <br /> History.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((ev) => (
              <div key={ev.name} className="p-10 bg-g1 border border-white/5 flex flex-col gap-8 hover:border-white/20 transition-all group">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-g4">{ev.n}</span>
                  <span className="text-[10px] font-bold py-1 px-3 bg-white/5 text-brand-purple uppercase tracking-widest">{ev.status}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors uppercase tracking-tight">{ev.name}</h3>
                  <div className="text-[10px] font-bold text-g5 uppercase tracking-widest">{ev.game} Division</div>
                </div>
                <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-6">
                  <div>
                    <div className="text-[10px] text-g5 uppercase mb-1">Metrics</div>
                    <div className="text-xs text-white leading-relaxed">{ev.details}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-g5 uppercase mb-1">Prize Pool</div>
                    <div className="text-xs text-white">{ev.prize}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roster Showcase */}
      <section id="roster" className="py-32 section-w">
         <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 gap-4">
            <div className="label-caps">DIVISIONS</div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter uppercase">Elite Roster</h2>
            <p className="text-g5">Selective recruitment focusing on behavioral alignment and technical superiority.</p>
         </div>

         <div className="space-y-4">
           {roster.map(r => (
             <div key={r.name} className="flex items-center justify-between p-8 border border-white/5 hover:bg-white/[0.02] transition-colors group">
               <div className="flex items-center gap-8">
                 <span className="font-mono text-g4 text-sm">{r.n}</span>
                 <div>
                   <h4 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors uppercase">{r.name}</h4>
                   <span className="text-[10px] font-bold text-g5 uppercase tracking-widest">{r.team}</span>
                 </div>
               </div>
               <div className="px-4 py-1 border border-white/10 text-[10px] font-bold text-g6 uppercase tracking-widest">
                 {r.role}
               </div>
             </div>
           ))}
         </div>
      </section>

      {/* Footer Minimal */}
      <footer id="contact" className="py-32 border-t border-white/5">
        <div className="section-w">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-extrabold text-white tracking-tighter uppercase">Partner with us.</h2>
              <p className="text-g5 max-w-sm mb-4">Level Up With Levelyn. Join our network of strategic collaborators and gaming enthusiasts.</p>
              <div className="flex gap-4">
                 {socialLinks.map((social) => {
                   const name = social.name.toLowerCase();
                   let Icon = Globe;
                   if (name === 'facebook') Icon = Facebook;
                   if (name === 'youtube') Icon = Youtube;
                   if (name === 'instagram') Icon = Instagram;
                   if (name === 'twitter' || name === 'x') Icon = Twitter;

                   return (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <Icon className="w-4 h-4" />
                    </a>
                   );
                 })}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <div className="text-[10px] font-bold text-g5 uppercase tracking-[0.2em] mb-4">Official Hotline</div>
                <div className="text-xl font-bold text-white">+880 1820-302059</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-g5 uppercase tracking-[0.2em] mb-4">Data Center</div>
                <div className="text-xl font-bold text-white underline decoration-brand-purple underline-offset-4">levelynesports@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-6">
            <div className="flex items-center gap-4">
              <img src="./logo.png" className="h-4 opacity-40" />
              <span className="text-[10px] font-bold text-g5 uppercase tracking-widest">© {new Date().getFullYear()} LEVELYN ESPORTS — DHAKA</span>
            </div>
            <div className="text-[10px] font-bold text-g5 uppercase tracking-widest">
              LVL UP WITH LVL-YN // EST. DEC 2023
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
