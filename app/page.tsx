"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

const LINKEDIN_URL = "https://www.linkedin.com/company/qubeats";
const X_URL = "https://x.com/QuBeatsTech";

const navItems = [
  { id: "about", label: "About" },
  { id: "why", label: "Why QuBeats" },
  { id: "capabilities", label: "Capabilities" },
  { id: "products", label: "Products" },
  { id: "applications", label: "Applications" },
  { id: "technology", label: "Technology" },
  { id: "partners", label: "Network" },
  { id: "news", label: "News" },
];

const partnersData = [
  { id: "iitm", name: "IIT Madras" },
  { id: "kanpur", name: "IIT Kanpur" },
  { id: "bombay", name: "IIT Bombay" },
  { id: "delhi", name: "IIT Delhi" },
  { id: "iisc", name: "IISc Bangalore" },
  { id: "drdo", name: "DRDO" },
  { id: "isro", name: "ISRO" },
  { id: "nasa", name: "NASA" },
  { id: "tifr", name: "TIFR" },
  { id: "npl", name: "NPL India" },
  { id: "idex", name: "iDEX" },
  { id: "ade", name: "ADE Bangalore" },
  { id: "csir", name: "CSIR-NPL" },
];

const heroTelemetry = [
  { label: "Clock lock", value: "Optical reference stable" },
  { label: "RF mode", value: "Rydberg passive sensing" },
  { label: "Mission layer", value: "Timing + spectrum fusion" },
];

// UPDATED: Added images
const aboutCards = [
  {
    image: "/about1.jpg",
    title: "Hyderabad Quantum Roots",
    text: "QuBeats builds on a full-stack quantum sensing platform developed around atomic precision, field systems, and strategic applications.",
  },
  {
    image: "/about2.jpg",
    title: "US Space Focus",
    text: "The US Aerospace & Defense branch narrows the mission around optical clocks, Rydberg RF sensing, and space-system autonomy.",
  },
  {
    image: "/about3.jpg",
    title: "Physics To Deployment",
    text: "The site positions QuBeats as a team moving quantum sensing from lab-grade physics toward deployable aerospace workflows.",
  },
];

// UPDATED: Added images
const whyItems = [
  {
    image: "/why1.jpg",
    title: "Full-Stack Quantum Sensing",
    text: "Hardware, optical physics, electronics, software, and analytics are treated as one mission system instead of disconnected components.",
  },
  {
    image: "/why2.jpg",
    title: "Built For Strategic Domains",
    text: "The product language is shaped around defense, space, resilient timing, spectrum awareness, and GNSS-denied operations.",
  },
  {
    image: "/why3.jpg",
    title: "Atomic Precision",
    text: "The brand promise stays close to QuBeats' core identity: quantum sensors with atomic precision and field-oriented engineering.",
  },
  {
    image: "/why4.jpg",
    title: "Space-Ready Direction",
    text: "The US branch theme is focused on clocks and Rydberg RF sensing in space, not a generic deep-tech portfolio.",
  },
  {
    image: "/why5.jpg",
    title: "Research Network",
    text: "The partner ecosystem and academic associations create credibility for a frontier quantum sensing company.",
  },
  {
    image: "/why6.jpg",
    title: "Mission Integration",
    text: "The architecture highlights timing, RF awareness, sensor fusion, and mission APIs as the pathway from physics to operations.",
  },
];

// UPDATED: Added images
const capabilities = [
  {
    code: "TIME",
    image: "/cap1.jpg",
    title: "Resilient Space Timing",
    text: "Optical atomic clock architectures for holdover, synchronization, and spacecraft autonomy when ground or GNSS references degrade.",
  },
  {
    code: "RF",
    image: "/cap2.jpg",
    title: "Passive Spectrum Awareness",
    text: "Rydberg atom RF sensing for wideband detection, electric-field readout, and orbital spectrum intelligence.",
  },
  {
    code: "PNT",
    image: "/cap3.jpg",
    title: "Navigation Without Dependence",
    text: "Mission systems designed around precise timing, sensor fusion, and operations in GNSS-denied or contested environments.",
  },
];

const products = [
  {
    eyebrow: "QB-OptiTime Space",
    title: "Optical Atomic Clock Payloads",
    image: "/core1.png",
    text: "Warm-vapor optical clock systems engineered for stable timing references across spacecraft, constellations, and deep-space mission concepts.",
    tags: ["Timing holdover", "Clock sync", "Autonomy"],
    specs: [
      ["Primary role", "Resilient timing"],
      ["Mission fit", "Spacecraft and constellations"],
      ["Integration", "Timing payload + API"],
    ],
  },
  {
    eyebrow: "QB-Spectrum Orbital",
    title: "Rydberg RF Receivers",
    image: "/core2.png",
    text: "Atom-based RF sensing modules for passive spectrum monitoring, secure communications research, and antenna-light RF intelligence.",
    tags: ["Wideband RF", "Passive sensing", "Satcom"],
    specs: [
      ["Primary role", "RF field sensing"],
      ["Mission fit", "Spectrum awareness"],
      ["Integration", "Optical readout module"],
    ],
  },
  {
    eyebrow: "QB-Fusion Mission Layer",
    title: "Timing + RF Intelligence",
    image: "/obj4.png",
    text: "A mission software layer that connects timing, RF, and navigation signals into deployable aerospace and defense workflows.",
    tags: ["Sensor fusion", "Edge analytics", "Mission API"],
    specs: [
      ["Primary role", "Mission intelligence"],
      ["Mission fit", "Autonomy and PNT"],
      ["Integration", "Edge fusion stack"],
    ],
  },
];

const applications = [
  {
    num: "01",
    image: "/app1.png",
    title: "GNSS-Denied PNT",
    text: "Timing-first navigation support for platforms operating where GPS is unavailable, jammed, or intentionally degraded.",
  },
  {
    num: "02",
    image: "/app2.png",
    title: "Direct-to-Satellite RF",
    text: "Rydberg RF sensing concepts for robust, wideband, and spectrum-aware satellite communications.",
  },
  {
    num: "03",
    image: "/app3.png",
    title: "Space Domain Awareness",
    text: "Precision sensing for constellation protection, environmental awareness, and orbital monitoring workflows.",
  },
  {
    num: "04",
    image: "/obj1.png",
    title: "Autonomous Spacecraft",
    text: "Clock-led autonomy for spacecraft that need stronger onboard timing and reduced dependence on continuous ground updates.",
  },
  {
    num: "05",
    image: "/obj2.png",
    title: "Orbital Spectrum Intel",
    text: "Passive RF awareness for identifying, characterizing, and tracking signals across complex orbital environments.",
  },
  {
    num: "06",
    image: "/obj3.png",
    title: "Secure Mission Networks",
    text: "Quantum sensing building blocks for resilient timing and communications across strategic mission architectures.",
  },
];

const techTabs = [
  {
    id: "clock",
    label: "Atomic Clock",
    title: "Optical Timing From Atomic References",
    text: "The clock stack uses atomic transitions as a stable timing reference, creating a pathway toward compact, high-stability timing systems for aerospace missions.",
    flow: ["Vapor Cell", "Optical Lock", "Frequency Reference", "Mission Timing"],
    specs: ["Warm-vapor architecture", "GPS-independent holdover", "Constellation synchronization"],
  },
  {
    id: "rf",
    label: "Rydberg RF",
    title: "Atoms As RF Field Sensors",
    text: "Rydberg atoms respond strongly to electric fields, enabling passive RF sensing with optical readout and wide-frequency mission awareness.",
    flow: ["RF Field", "Rydberg State", "Optical Readout", "Spectrum Intel"],
    specs: ["Antenna-light sensing", "Passive detection", "Wideband RF coverage"],
  },
  {
    id: "fusion",
    label: "Mission Fusion",
    title: "Timing, RF, And Navigation In One Layer",
    text: "The mission layer connects clock stability, RF awareness, and sensor fusion into interfaces aerospace teams can evaluate and integrate.",
    flow: ["Clock", "RF Sensor", "Fusion Engine", "Autonomy"],
    specs: ["Edge analytics", "Mission APIs", "Deployment pathway"],
  },
];

const newsItems = [
  {
    type: "Press",
    date: "June 2025",
    source: "ThePrint",
    title: "QuBeats wins Rs 25 crore government grant to build GPS-free navigation for the Indian Navy.",
    link: "https://theprint.in/defence/quantum-startup-qubeats-wins-rs-25-crore-govt-grant-to-build-gps-free-navigation-for-indian-navy/2652032/",
  },
  {
    type: "Defense Innovation",
    date: "June 2025",
    source: "RNA Media",
    title: "QuBeats named ADITI 2.0 Defence Challenge winner to develop an indigenous Quantum Positioning System.",
    link: "https://www.rnamedia.in/defence-industry/defence-industry-indigenous-quantum-positioning-system-qubeats/5516",
  },
  {
    type: "Company",
    date: "Updates",
    source: "LinkedIn",
    title: "Follow QuBeats for company updates, lab visits, strategic programs, and quantum sensing milestones.",
    link: LINKEDIN_URL,
  },
];

const founders = [
  {
    photo: "/mallikarjun.webp",
    name: "Mallikarjun Karra",
    role: "Director",
    edu: ["PhD (Molecular Physics) - Fritz Haber Institute of the Max Planck Society", "Int MSc (Physics) - IIT Kharagpur"],
    bio: "Entrepreneur and published theoretical physicist with deep experience in molecular physics and quantum control. His research at the Fritz Haber Institute of the Max Planck Society focused on cold and ultracold polar molecules, including trapped polar paramagnetic molecule architectures for quantum computing and optically controlled quantum gate schemes.",
    logos: "/logos_mallikarjun.png",
    linkedin: "https://www.linkedin.com/in/mallikarjun-k-628ab417/",
  },
  {
    photo: "/rajat.webp",
    name: "Rajat Sethi",
    role: "Chief Executive Officer",
    edu: ["MPA - Harvard Kennedy School", "MBA - MIT Sloan School of Management", "M.Tech & B.Tech (CSE) - IIT Kharagpur"],
    bio: "Technology strategist focused on translating frontier quantum and laser-based sensing technologies into operational defense and government capabilities. He brings systems architecture, strategic technology integration, and public-sector execution experience, with academic training across Harvard Kennedy School, MIT Sloan, and IIT Kharagpur.",
    logos: "/logos_rajat.png",
    linkedin: "https://www.linkedin.com/in/sethirajat/",
  },
  {
    photo: "/shouvik.webp",
    name: "Dr. Shouvik Mukherjee",
    role: "Chief Scientist",
    edu: ["Research - Joint Quantum Institute", "PhD & MS - University of Pittsburgh", "BS & MS (Physics) - IIT Kharagpur"],
    bio: "Quantum device physicist with expertise across solid-state quantum platforms, atomic vapor systems, electronics, optics, and nanofabrication. A former postdoctoral scholar at the Joint Quantum Institute associated with NIST and the University of Maryland, he helps bridge lab-grade device physics with dependable field-operable quantum sensors.",
    logos: "/logos_shouvik.png",
    linkedin: "https://www.linkedin.com/in/shouvik-mukherjee-b35b3919/",
  },
  {
    photo: "/madhu.webp",
    name: "Dr. Madhu Talluri",
    role: "Chief Technology Officer",
    edu: ["Research - Lawrence Berkeley National Lab", "PhD (Molecular Physics) - Vrije Universiteit", "M. Phil & MS (Physics)"],
    bio: "Experimental physicist specializing in precision quantum measurements, ultrafast laser spectroscopy, and advanced light-matter interactions. His research experience includes UC Berkeley and Lawrence Berkeley National Lab, while his doctoral work at Vrije Universiteit Amsterdam contributed to stringent tests of quantum electrodynamics.",
    logos: "/logos_madhu.png",
    linkedin: "https://www.linkedin.com/in/madhuttalluri/",
  },
];

const advisors = [
  {
  photo: "/karambir.webp",
  name: "Adm Karambir Singh (Retd)",
  role: "Former Chief of Naval Staff, PVSM, AVSM, ADC",
  quote: "Resilient navigation in GNSS-denied environments is no longer optional: it is a fleet survival problem. QuBeats is pursuing the right intersection of atomic physics, low-SWaP engineering, and field discipline to make quantum-class sensing deployable where it matters."
},
  {
  photo: "/shekhar.webp",
  name: "Vice Admiral Shekhar Sinha (Retd)",
  role: "PVSM, AVSM, NM & Bar, ADC",
  quote: "The best deep-tech programs pair scientific ambition with operational humility. QuBeats' roadmap — passive sensing, fusion-first architectures, and integration paths for real platforms — is how serious PNT capability gets built, not slideware."
},
  {
  photo: "/surendra.webp",
  name: "R Adm Surendra Ahuja (Retd)",
  role: "Navy test pilot & ex-MD, Boeing Defense India",
  quote: "What wins in aerospace is what you can validate repeatedly under stress: interfaces, EMI discipline, and clear test evidence. QuBeats is thinking like an integrator, which is exactly what quantum sensing needs to graduate from lab curiosity to mission hardware."
},
  {
  photo: "/krishnamurthy.webp",
  name: "Prof. M Krishnamurthy",
  role: "Director, TIFR Hyderabad",
  quote: "Quantum sensors become transformative when measurement science meets manufacturable architectures. QuBeats is translating frontier magnetometry into systems thinking that research institutions and industry can both trust."
},
  {
  photo: "/rajalakshmi.webp",
  name: "Dr. G Rajalakshmi",
  role: "Senior Scientist, TIFR Hyderabad",
  quote: "The gap between a beautiful physics result and a dependable field sensor is often metrology and control loops. QuBeats is asking the right questions about stability, drift, and validation: the unglamorous work that turns a breakthrough into a product."
},
  {
  photo: "/rahul.webp",
  name: "Rahul Bhasin",
  role: "Managing Partner, Barings PE India",
  quote: "Category-defining companies pair a hard technical wedge with capital efficiency and credible milestones. QuBeats is building a defensible sensing stack with clear OEM and program pathways, the kind of deep-tech foundation institutional investors look for."
},
];

function RevealSection({ id, className, children }: { id?: string; className?: string; children: ReactNode }) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) section.classList.add("section-visible");
      },
      { threshold: 0.16 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={`reveal-section ${className || ""}`}>
      {children}
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 max-w-4xl ${center ? "mx-auto text-center" : "text-left"}`}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">{eyebrow}</p>
      <h2 className="text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">{title}</h2>
      {text && <p className="mt-6 max-w-2xl text-sm font-light leading-7 text-gray-400 md:text-base">{text}</p>}
    </div>
  );
}

function LinkedInMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm bg-[#0A66C2] font-black normal-case text-white ${className}`}
      aria-hidden="true"
    >
      in
    </span>
  );
}

function XMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-sm bg-black font-black normal-case text-white border border-white/20 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[60%] w-[60%]">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.066H5.059z" />
      </svg>
    </span>
  );
}

export default function HomePage() {
  const [teamMenuOpen, setTeamMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTech, setActiveTech] = useState("clock");
  const selectedTech = techTabs.find((tab) => tab.id === activeTech) || techTabs[0];

  const goToSection = (id: string) => {
    setTeamMenuOpen(false);
    setMobileMenuOpen(false);

    const section = document.getElementById(id);
    if (!section) return;

    section.classList.remove("section-visible", "section-focus");
    section.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      section.classList.add("section-visible", "section-focus");
    }, 560);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500 selection:text-black scroll-smooth">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            @keyframes heroBgReveal {
              0% { opacity: .18; transform: scale(1.22); filter: saturate(.55) blur(10px); }
              100% { opacity: .95; transform: scale(1.06); filter: saturate(1.1) blur(0); }
            }
            @keyframes fadeUpReveal {
              0% { opacity: 0; transform: translateY(58px) scale(.97); filter: blur(16px); }
              55% { opacity: .72; filter: blur(5px); }
              100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
            }
            @keyframes tabReveal {
              0% { opacity: 0; transform: translateY(16px); filter: blur(8px); }
              100% { opacity: 1; transform: translateY(0); filter: blur(0); }
            }
            @keyframes softGlow {
              0%, 100% { text-shadow: 0 6px 10px rgba(0,0,0,1), 0 0 26px rgba(0,210,255,.24); }
              50% { text-shadow: 0 8px 16px rgba(0,0,0,1), 0 0 58px rgba(0,210,255,.42); }
            }
            @keyframes orbitRotate { to { transform: rotate(360deg); } }
            @keyframes targetPulse {
              0%, 100% { transform: translate(-50%, -50%) scale(.92); opacity: .45; }
              50% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
            }
            @keyframes sweep {
              0% { transform: translateX(-110%) skewX(-16deg); opacity: 0; }
              18% { opacity: .65; }
              100% { transform: translateX(180%) skewX(-16deg); opacity: 0; }
            }
            @keyframes telemetryReveal {
              0% { opacity: 0; transform: translateX(20px); }
              100% { opacity: 1; transform: translateX(0); }
            }
            @keyframes sectionFocusGlow {
              0% { box-shadow: inset 0 0 0 rgba(0,210,255,0); }
              42% { box-shadow: inset 0 0 90px rgba(0,210,255,.08); }
              100% { box-shadow: inset 0 0 0 rgba(0,210,255,0); }
            }
            .animate-scroll { display: flex; width: max-content; animation: scroll 60s linear infinite; }
            .animate-scroll:hover { animation-play-state: paused; }
            .hero-bg-image { animation: heroBgReveal 3200ms cubic-bezier(.16,1,.3,1) both; }
            .hero-badge { animation: fadeUpReveal 1600ms cubic-bezier(.16,1,.3,1) 350ms both; }
            .hero-title { animation: fadeUpReveal 2400ms cubic-bezier(.16,1,.3,1) 800ms both, softGlow 5600ms ease-in-out 3200ms infinite; }
            .hero-copy { animation: fadeUpReveal 1800ms cubic-bezier(.16,1,.3,1) 1450ms both; }
            .hero-actions { animation: fadeUpReveal 1600ms cubic-bezier(.16,1,.3,1) 1850ms both; }
            .hero-telemetry { animation: fadeUpReveal 1500ms cubic-bezier(.16,1,.3,1) 2150ms both; }
            .hero-gradient-text { filter: drop-shadow(0 7px 5px rgba(0,0,0,1)) drop-shadow(0 0 30px rgba(0,210,255,.34)); }
            .space-grid {
              background-image:
                linear-gradient(rgba(34,211,238,.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,.08) 1px, transparent 1px);
              background-size: 72px 72px;
              mask-image: radial-gradient(circle at center, black, transparent 72%);
            }
            .orbit-ring { animation: orbitRotate 28s linear infinite; }
            .target-core { animation: targetPulse 2800ms ease-in-out infinite; }
            .scan-sweep::after {
              content: "";
              position: absolute;
              inset: 0;
              background: linear-gradient(90deg, transparent, rgba(34,211,238,.22), transparent);
              animation: sweep 4600ms ease-in-out infinite;
              pointer-events: none;
            }
            .telemetry-line {
              opacity: 0;
              animation: telemetryReveal 900ms cubic-bezier(.16,1,.3,1) forwards;
            }
            .tech-panel { animation: tabReveal 520ms cubic-bezier(.16,1,.3,1) both; }
            .reveal-section {
              opacity: 0;
              transform: translateY(52px);
              filter: blur(10px);
              transition: opacity 1200ms cubic-bezier(.16,1,.3,1), transform 1200ms cubic-bezier(.16,1,.3,1), filter 1200ms cubic-bezier(.16,1,.3,1);
              scroll-margin-top: 96px;
            }
            .reveal-section.section-visible { opacity: 1; transform: translateY(0); filter: blur(0); }
            .reveal-section.section-focus { animation: sectionFocusGlow 1500ms ease-out; }
            .stagger-card {
              opacity: 0;
              transform: translateY(30px);
              transition: opacity 900ms cubic-bezier(.16,1,.3,1), transform 900ms cubic-bezier(.16,1,.3,1), border-color 300ms ease, box-shadow 300ms ease;
            }
            .section-visible .stagger-card { opacity: 1; transform: translateY(0); }
            .section-visible .stagger-card:nth-child(2) { transition-delay: 100ms; }
            .section-visible .stagger-card:nth-child(3) { transition-delay: 180ms; }
            .section-visible .stagger-card:nth-child(4) { transition-delay: 260ms; }
            .section-visible .stagger-card:nth-child(5) { transition-delay: 340ms; }
            .section-visible .stagger-card:nth-child(6) { transition-delay: 420ms; }
            @media (prefers-reduced-motion: reduce) {
              .animate-scroll, .hero-bg-image, .hero-badge, .hero-title, .hero-copy, .hero-actions, .hero-telemetry, .orbit-ring, .target-core, .scan-sweep::after, .telemetry-line, .tech-panel, .reveal-section, .stagger-card {
                animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; filter: none !important;
              }
            }
          `,
        }}
      />

      <nav className="fixed z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/90 px-5 py-4 backdrop-blur-md md:px-8">
        <button type="button" onClick={() => goToSection("home")} className="flex items-center">
          <Image src="/logo.webp" alt="QuBeats Logo" width={160} height={52} className="h-10 w-auto object-contain md:h-12" priority />
        </button>

        <div className="hidden items-center gap-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 2xl:flex">
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => goToSection(item.id)} className="transition hover:text-cyan-300">
              {item.label}
            </button>
          ))}

          <div className="relative">
            <button type="button" onClick={() => setTeamMenuOpen((open) => !open)} className="transition hover:text-cyan-300">
              Team
            </button>
            {teamMenuOpen && (
              <div className="absolute right-0 top-full mt-4 w-44 rounded-lg border border-cyan-400/30 bg-black/95 p-2 shadow-[0_0_28px_rgba(0,210,255,.22)]">
                <button type="button" onClick={() => goToSection("team")} className="block w-full rounded-md px-4 py-3 text-left text-xs text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300">Founders</button>
                <button type="button" onClick={() => goToSection("advisors")} className="block w-full rounded-md px-4 py-3 text-left text-xs text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-300">Advisors</button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="QuBeats LinkedIn"
            className="hidden h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition hover:border-cyan-300 hover:bg-cyan-400/10 lg:inline-flex"
          >
            <LinkedInMark className="h-5 w-5 text-[11px]" />
          </a>
          {/* New X Link in top nav */}
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="QuBeats X"
            className="hidden h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 transition hover:border-cyan-300 hover:bg-cyan-400/10 lg:inline-flex"
          >
            <XMark className="h-5 w-5 text-[11px]" />
          </a>
          <button type="button" onClick={() => goToSection("contact")} className="hidden rounded-lg bg-cyan-400 px-5 py-2 text-xs font-black uppercase tracking-[0.14em] text-black shadow-[0_0_18px_rgba(0,210,255,.35)] transition hover:bg-white md:block">
            Mission Contact
          </button>
          <button type="button" onClick={() => setMobileMenuOpen((open) => !open)} className="rounded-lg border border-white/15 px-3 py-2 text-sm font-bold text-white 2xl:hidden">
            Menu
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute left-4 right-4 top-[78px] max-h-[calc(100vh-96px)] overflow-y-auto rounded-lg border border-white/10 bg-black/95 p-4 text-sm font-bold uppercase tracking-[0.16em] text-gray-300 shadow-2xl 2xl:hidden">
            {[{ id: "home", label: "Home" }, ...navItems, { id: "founder-message", label: "Founder Message" }, { id: "partners", label: "Partners" }, { id: "team", label: "Founders" }, { id: "advisors", label: "Advisors" }, { id: "contact", label: "Contact" }].map((item) => (
              <button key={`${item.id}-${item.label}`} type="button" onClick={() => goToSection(item.id)} className="block w-full rounded-md px-3 py-3 text-left hover:bg-cyan-500/10 hover:text-cyan-300">
                {item.label}
              </button>
            ))}
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md px-3 py-3 text-left hover:bg-cyan-500/10 hover:text-cyan-300">
              <LinkedInMark className="h-5 w-5 text-[11px]" />
              LinkedIn
            </a>
            {/* New X Link in mobile menu */}
            <a href={X_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-md px-3 py-3 text-left hover:bg-cyan-500/10 hover:text-cyan-300">
              <XMark className="h-5 w-5 text-[11px]" />
              X (Twitter)
            </a>
          </div>
        )}
      </nav>

      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-20 pt-36 text-center md:pb-24">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,rgba(0,0,0,.06)_0%,rgba(0,0,0,.48)_58%,rgba(0,0,0,.92)_100%)]" />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/45 via-black/10 to-[#050505]" />
          <div className="absolute inset-0 z-10 space-grid opacity-70" />
          <div className="hero-bg-image h-full w-full bg-[url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
        </div>

        <div className="absolute right-8 top-32 z-20 hidden h-[380px] w-[380px] opacity-90 lg:block">
          <div className="orbit-ring absolute inset-0 rounded-full border border-cyan-300/20" />
          <div className="orbit-ring absolute inset-10 rounded-full border border-dashed border-violet-300/20" style={{ animationDuration: "40s" }} />
          <div className="orbit-ring absolute inset-20 rounded-full border border-cyan-300/10" style={{ animationDuration: "55s" }} />
          <div className="target-core absolute left-1/2 top-1/2 h-24 w-24 rounded-xl border border-cyan-300/60 bg-cyan-300/10 shadow-[0_0_60px_rgba(34,211,238,.35)]" />
          <div className="absolute left-1/2 top-1/2 h-1 w-40 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-40 w-1 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent" />
        </div>

        <div className="relative z-40 mx-auto max-w-6xl">
          <div className="hero-badge mb-8 inline-block rounded-lg border border-cyan-300/70 bg-black/45 px-6 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-100 shadow-[0_0_28px_rgba(0,210,255,.28)] backdrop-blur-md md:text-xs">
            US Aerospace & Defense Division
          </div>

          <h1 className="hero-title mx-auto mb-8 max-w-6xl text-5xl font-black uppercase leading-[0.9] text-white sm:text-6xl md:text-8xl">
            Atomic Timing & <br />
            <span className="hero-gradient-text text-cyan-300">
              Rydberg RF Sensing
            </span>
          </h1>

          <p className="hero-copy mx-auto mb-10 max-w-3xl text-lg font-light leading-8 text-white md:text-2xl">
            Space-focused quantum systems for resilient timing, passive spectrum awareness,
            autonomous navigation, and secure mission communications.
          </p>

          <div className="hero-actions flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button type="button" onClick={() => goToSection("products")} className="rounded-lg bg-cyan-400 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-black transition hover:bg-white">
              Explore Products
            </button>
            <button type="button" onClick={() => goToSection("about")} className="rounded-lg border border-white/25 bg-white/5 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur transition hover:border-cyan-300 hover:text-cyan-200">
              About QuBeats US
            </button>
          </div>

          <div className="hero-telemetry mx-auto mt-8 hidden max-w-5xl grid-cols-3 gap-3 text-left lg:grid">
            {heroTelemetry.map((item, index) => (
              <div
                key={item.label}
                className="telemetry-line rounded-lg border border-white/10 bg-black/55 p-4 backdrop-blur"
                style={{ animationDelay: `${2100 + index * 180}ms` }}
              >
                <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">{item.label}</p>
                <p className="truncate text-xs font-light uppercase tracking-[0.12em] text-gray-300">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RevealSection id="about" className="border-y border-white/10 bg-black px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="About Us"
            title={<>Quantum Sensing Heritage. Space Mission Focus.</>}
            text="QuBeats US Aerospace & Defense is positioned as the space-focused extension of QuBeats quantum sensing work, centered on optical atomic clocks, Rydberg RF sensing, and mission autonomy."
          />
          <div className="mb-10 flex flex-wrap gap-4">

            <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-6 py-4">
              <p className="text-center text-sm font-black tracking-[0.25em] text-cyan-300 mb-2">
                FOUNDED
              </p>
              <p className="text-3xl font-black text-white">
                2023
              </p>
            </div>

            <div className="rounded-xl border border-violet-400/20 bg-violet-400/5 px-6 py-4">
              <p className="text-center text-sm font-black uppercase tracking-[0.25em] text-violet-300 mb-2">
                US Division Launch
              </p>
              <p className="text-3xl font-black text-white">
                2026
              </p>
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {aboutCards.map((item) => (
              <div key={item.title} className="stagger-card group overflow-hidden rounded-lg border border-white/10 bg-[#090909] hover:border-cyan-400/50">
                <div className="relative aspect-square overflow-hidden border-b border-white/10">
                  <Image src={item.image} alt={item.title} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="mb-4 text-2xl font-black uppercase text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-sm font-light leading-7 text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.04] p-7">
            <p className="max-w-5xl text-lg font-light leading-9 text-gray-300">
              The current QuBeats platform emphasizes full-stack quantum sensing, lab-grade accuracy in real-world conditions,
              and strategic applications across navigation, sensing, and security. This US branch site translates that foundation
              into a sharper aerospace story: precise time, clear RF awareness, and deployable quantum systems for space.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://www.qubeats.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white hover:border-cyan-300 hover:text-cyan-300">
                Visit QuBeats India
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-lg bg-cyan-400 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black hover:bg-white">
                <LinkedInMark className="h-5 w-5 text-[11px]" />
                Follow
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="why" className="scan-sweep relative overflow-hidden bg-[#050505] px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why QuBeats"
            title={<>Why Strategic Teams Choose QuBeats</>}
            text="This section explains the business case: not only the physics, but why the company is credible for aerospace and defense conversations."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div key={item.title} className="stagger-card group overflow-hidden rounded-lg border border-white/10 bg-[#090909] hover:border-cyan-400/50">
                <div className="relative aspect-square overflow-hidden border-b border-white/10">
                  <Image src={item.image} alt={item.title} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/40 to-transparent" />
                </div>
                <div className="p-7">
                  <h3 className="mb-4 text-xl font-black uppercase text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-sm font-light leading-7 text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="capabilities" className="border-y border-white/10 bg-black px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Mission Capabilities"
            title={<>Built For Space Systems That Cannot Wait For Perfect Conditions</>}
            text="The US branch positioning is direct: clock stability, RF awareness, and mission autonomy for strategic aerospace programs."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="stagger-card group overflow-hidden rounded-lg border border-white/10 bg-[#080808] hover:border-cyan-400/50 hover:shadow-[0_0_34px_rgba(34,211,238,.08)]">
                <div className="relative aspect-square overflow-hidden border-b border-white/10">
                  <Image src={item.image} alt={item.title} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex h-10 items-center justify-center rounded-md border border-cyan-300/40 bg-black/80 px-4 text-xs font-black text-cyan-200 backdrop-blur">
                    {item.code}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="mb-4 text-2xl font-black uppercase text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <p className="text-sm font-light leading-7 text-gray-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="products" className="bg-[#050505] px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Products" title={<>Clocks, RF Sensors, And Mission Fusion</>} text="Product language is now closer to a real aerospace website, while staying careful and non-overclaiming." />

          <div className="grid gap-7 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.title} className="stagger-card group overflow-hidden rounded-lg border border-white/10 bg-[#090909] hover:border-cyan-400/50">
                <div className="relative aspect-[1.15] overflow-hidden border-b border-white/10">
                  <Image src={product.image} alt={product.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-md border border-cyan-300/35 bg-black/60 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">
                    {product.eyebrow}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="mb-4 text-2xl font-black uppercase text-white group-hover:text-cyan-300">{product.title}</h3>
                  <p className="mb-6 text-sm font-light leading-7 text-gray-400">{product.text}</p>

                  <div className="mb-6 rounded-lg border border-white/10 bg-black/35">
                    {product.specs.map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[110px_1fr] border-b border-white/10 px-4 py-3 last:border-b-0">
                        <span className="text-[10px] font-black uppercase tracking-[0.16em] text-gray-500">{label}</span>
                        <span className="text-xs font-bold uppercase tracking-[0.08em] text-gray-200">{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="applications" className="border-t border-white/10 bg-black px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Applications" title={<>Quantum In Space</>} text="The application set is aligned with optical clocks and Rydberg RF sensing for space and strategic missions." />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <div key={app.title} className="stagger-card group overflow-hidden rounded-lg border border-white/10 bg-[#090909] hover:border-cyan-400/50">
                <div className="relative aspect-square overflow-hidden border-b border-white/10">
                  <Image src={app.image} alt={app.title} fill className="object-cover opacity-90 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/50 bg-black/80 text-sm font-black text-cyan-300">{app.num}</div>
                </div>
                <div className="p-7">
                  <h3 className="mb-4 text-xl font-black uppercase text-white group-hover:text-cyan-300">{app.title}</h3>
                  <p className="text-sm font-light leading-7 text-gray-400">{app.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="technology" className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-28 md:px-20">
        <div className="absolute inset-0 space-grid opacity-35" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading eyebrow="Technology" title={<>Two Physics Platforms. One Space Mission Stack.</>} text="This section gives the site a stronger technical spine instead of only looking like a brochure." />

          <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
            <div className="rounded-lg border border-white/10 bg-black/70 p-3 backdrop-blur">
              {techTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTech(tab.id)}
                  className={`mb-2 block w-full rounded-md px-5 py-4 text-left text-sm font-black uppercase tracking-[0.16em] transition ${
                    activeTech === tab.id ? "bg-cyan-400 text-black" : "text-gray-400 hover:bg-white/5 hover:text-cyan-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div key={selectedTech.id} className="tech-panel rounded-lg border border-white/10 bg-black/70 p-7 backdrop-blur md:p-10">
              <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_320px]">
                <div>
                  <h3 className="mb-5 text-3xl font-black uppercase text-white md:text-5xl">{selectedTech.title}</h3>
                  <p className="text-sm font-light leading-7 text-gray-400 md:text-base">{selectedTech.text}</p>
                </div>

                <div className="relative aspect-square overflow-hidden rounded-lg border border-cyan-300/20 bg-black">
  <Image
    src={
      selectedTech.id === "clock"
        ? "/tech_clock.jpg"
        : selectedTech.id === "rf"
        ? "/tech_rf.jpeg"
        : "/tech_fusion.jpeg"
    }
    alt={selectedTech.title}
    fill
    className="object-cover"
  />
</div>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                {selectedTech.flow.map((step, index) => (
                  <div key={step} className="relative rounded-lg border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-3 text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">0{index + 1}</div>
                    <div className="text-sm font-bold uppercase text-white">{step}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {selectedTech.specs.map((spec) => (
                  <span key={spec} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-300">{spec}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="founder-message" className="border-y border-white/10 bg-black px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Message From The Founders"
            title={<>From Atomic Physics To Mission Systems</>}
            text="A focused note from the QuBeats team on taking quantum sensing from the lab into strategic aerospace and defense environments."
          />

          <div className="stagger-card overflow-hidden rounded-lg border border-cyan-300/20 bg-[#090909] shadow-[0_0_42px_rgba(34,211,238,.06)]">
            <div className="relative overflow-hidden border-b border-white/10 bg-black">
              <Image
                src="/qubeats_cover.jpg"
                alt="QuBeats founders and advisor at the lab"
                width={1400}
                height={360}
                className="h-auto w-full object-contain"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-md border border-cyan-300/30 bg-black/65 px-4 py-3 backdrop-blur">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-cyan-300">
                  QuBeats Founding Team
                </p>
              </div>
            </div>

            <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
              <div>
                <p className="text-xl font-light leading-9 text-gray-200 md:text-2xl">
                  We believe the next leap in aerospace resilience will come from bringing atomic precision
                  out of the lab and into mission systems. QuBeats US is being shaped around a focused promise:
                  precise time, clear RF awareness, and dependable quantum sensing architectures for space.
                </p>
                <p className="mt-6 max-w-3xl text-sm font-light leading-7 text-gray-500">
                  The same physics-first culture behind QuBeats quantum sensing work now points toward
                  space timing, passive RF awareness, and mission autonomy.
                </p>
              </div>

              <div className="grid gap-3">
                {["Precise time", "Clear RF awareness", "Mission autonomy"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-black/45 p-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="partners" className="overflow-hidden border-y border-white/10 bg-black py-24">
        <div className="mx-auto mb-16 max-w-[1400px] px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-400">Strategic Network</p>
          <h2 className="text-4xl font-black uppercase text-white md:text-6xl">Customers & Collaborators</h2>
        </div>

        <div className="relative flex overflow-hidden py-4">
          <div className="absolute bottom-0 left-0 top-0 z-20 w-24 bg-gradient-to-r from-black to-transparent md:w-40" />
          <div className="absolute bottom-0 right-0 top-0 z-20 w-24 bg-gradient-to-l from-black to-transparent md:w-40" />

          {[0, 1].map((loop) => (
            <div key={loop} className="animate-scroll gap-8 px-4 md:gap-16 md:px-8" aria-hidden={loop === 1}>
              {partnersData.map((partner) => (
                <div key={`${partner.id}-${loop}`} className="group flex w-[120px] shrink-0 flex-col items-center justify-start md:w-[160px]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-[#f8f9fa] p-3 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_22px_rgba(0,210,255,.28)] md:h-24 md:w-24">
                    <Image src={`/logo_${partner.id}.png`} alt={partner.name} width={96} height={96} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="mt-4 w-full text-center text-[10px] font-bold uppercase text-gray-400 md:text-xs">{partner.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-7xl px-6 text-right">
          <p className="border-r-4 border-cyan-500 pr-6 text-sm font-light uppercase italic text-gray-500">
            PQC Orders | ADITI Sanctioned | Field Trials in Progress
          </p>
        </div>
      </RevealSection>

      <RevealSection id="team" className="bg-black px-6 py-28 md:px-20">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
  eyebrow="Founding Team"
  title={
    <>
      People Behind <span className="text-cyan-400">QuBeats Physics</span>
    </>
  }
  text="Atomic physics, photonics, precision electronics, and fusion, shipping dependable field systems."
/>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {founders.map((person) => (
              <div key={person.name} className="stagger-card group flex flex-col rounded-lg border border-white/10 bg-[#090909] p-5 hover:border-cyan-400/50">
                <div className="relative mb-7 aspect-square w-full overflow-hidden rounded-lg border border-white/10">
                  <Image src={person.photo} fill className="object-cover transition duration-700 group-hover:scale-105" alt={person.name} />
                  <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label={`${person.name} LinkedIn`} className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded bg-white/90 transition hover:scale-110">
                    <LinkedInMark className="h-5 w-5 text-[11px]" />
                  </a>
                </div>
                <h4 className="mb-2 text-lg font-black uppercase text-white">{person.name}</h4>
                <p className="mb-4 inline-flex w-fit rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">
                  {person.role}
                </p>
                <div className="mb-5 space-y-1 text-sm font-medium leading-6 text-cyan-300">
                  {person.edu.map((line) => <p key={line}>{line}</p>)}
                </div>
                <p className="flex-grow text-sm font-light leading-7 text-gray-400">{person.bio}</p>
                <div className="mt-7 border-t border-white/10 pt-5">
                  <Image src={person.logos} width={180} height={40} className="h-8 w-auto object-contain opacity-70" alt={`${person.name} affiliations`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="advisors" className="border-t border-white/10 bg-[#050505] px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
  eyebrow="Advisors"
  title={
    <>
      Our <span className="text-cyan-400">Advisors</span>
    </>
  }
  text="Strategic, scientific, and mission-focused advisors guiding QuBeats in building quantum sensing systems."
/>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="stagger-card group overflow-hidden rounded-lg border border-white/10 bg-[#090909] hover:border-cyan-400/50">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src={advisor.photo} fill className="object-cover opacity-90 transition duration-700 group-hover:scale-105" alt={advisor.name} />
                </div>
                <div className="p-7">
                  <h4 className="text-xl font-black uppercase text-white group-hover:text-cyan-300">{advisor.name}</h4>
                  <p className="mt-3 text-xs uppercase leading-6 tracking-[0.12em] text-gray-500">{advisor.role}</p>
                  <p className="mt-5 text-sm font-light leading-7 text-gray-400 italic">
  “{advisor.quote}”
</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="news" className="border-t border-white/10 bg-black px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="News, Media & Press Releases"
            title={<>Public Updates And Strategic Milestones</>}
            text="A lightweight press section helps the US site feel current, credible, and connected to QuBeats' broader public story."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {newsItems.map((item) => (
              <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="stagger-card rounded-lg border border-white/10 bg-[#090909] p-7 transition hover:border-cyan-400/50 hover:shadow-[0_0_34px_rgba(34,211,238,.08)]">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-300">{item.type}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">{item.date}</span>
                </div>
                <h3 className="mb-5 text-xl font-black uppercase leading-tight text-white">{item.title}</h3>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">{item.source}</p>
              </a>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contact" className="border-t border-white/10 bg-[#020202] px-6 py-28 md:px-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Get In Touch"
            title={<>Start A <span className="text-cyan-400">Mission Discussion</span></>}
            text="For aerospace, defense, and strategic technology conversations around timing, RF sensing, and quantum mission systems."
            center
          />

          <div className="mx-auto grid max-w-5xl gap-7 md:grid-cols-3">
            {[
              ["info@qubeats.com", "Strategic Partnerships", "For business inquiries, defense collaborations, and mission conversations.", "mailto:info@qubeats.com"],
              ["career@qubeats.com", "Join The Mission", "For scientists and engineers working across quantum physics, optics, RF, and aerospace systems.", "mailto:career@qubeats.com"],
              ["LinkedIn", "Follow QuBeats", "For company updates, media mentions, team activity, and strategic milestones.", LINKEDIN_URL],
            ].map(([label, title, text, link]) => (
              <a key={label} href={link} target={link.startsWith("http") ? "_blank" : undefined} rel={link.startsWith("http") ? "noreferrer" : undefined} className="stagger-card rounded-lg border border-white/10 bg-[#090909] p-8 text-center transition hover:border-cyan-400/50 hover:shadow-[0_0_34px_rgba(34,211,238,.08)]">
                <div className="mb-5 flex justify-center">
                  {label === "LinkedIn" && <LinkedInMark className="h-7 w-7 text-sm" />}
                </div>
                <h3 className="mb-3 text-xl font-black uppercase text-white">{title}</h3>
                <p className="mb-6 text-sm font-light leading-7 text-gray-400">{text}</p>
                <span className="border-b border-cyan-400/30 pb-1 text-sm font-bold tracking-[0.12em] text-cyan-300">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </RevealSection>

      <footer className="border-t border-white/10 bg-black px-6 py-12 text-center text-sm font-bold uppercase italic tracking-[0.18em] text-gray-700">
        <Image src="/logo.webp" width={140} height={45} className="mx-auto mb-6 h-8 w-auto opacity-60" alt="Logo" />
        <div className="mb-5 flex flex-wrap items-center justify-center gap-5 text-[10px] text-gray-500">
          <button type="button" onClick={() => goToSection("about")} className="hover:text-cyan-300">About</button>
          <button type="button" onClick={() => goToSection("news")} className="hover:text-cyan-300">News</button>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="QuBeats LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:border-cyan-300"
          >
            <LinkedInMark className="h-5 w-5 text-[11px]" />
          </a>
          {/* New X Link in footer */}
          <a
            href={X_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="QuBeats X"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:border-cyan-300"
          >
            <XMark className="h-5 w-5 text-[11px]" />
          </a>
        </div>
        <p className="text-[10px] text-cyan-900">(c) 2026 QuBeats US Aerospace & Defense</p>
      </footer>
    </div>
  );
}