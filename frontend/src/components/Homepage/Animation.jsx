import { useState, useEffect, useRef } from "react";

const services = [
  {
    tag: "AI & Automation",
    title: "See Operations Run Without Limits",
    desc: "Intelligent automation that eliminates bottlenecks and scales with your ambition.",
    gradient: "from-violet-900 to-indigo-950",
    accent: "#a78bfa",
  },
  {
    tag: "Digital Engineering",
    title: "Build Scalable, Future-Ready Systems",
    desc: "Architecture designed to evolve — performant, resilient, and built to last.",
    gradient: "from-sky-900 to-slate-950",
    accent: "#38bdf8",
  },
  {
    tag: "Cloud & Data",
    title: "Drive Growth with Cloud Intelligence",
    desc: "From raw data to decisive action — infrastructure that thinks with you.",
    gradient: "from-emerald-900 to-teal-950",
    accent: "#34d399",
  },
  {
    tag: "Experience Design",
    title: "Craft Engaging, Seamless Customer Journeys",
    desc: "Design that moves people — intuitive, beautiful, and conversion-driven.",
    gradient: "from-rose-900 to-pink-950",
    accent: "#fb7185",
  },
  {
    tag: "Integrated Growth",
    title: "Accelerate Growth with Digital Strategy",
    desc: "Strategic roadmaps that align technology investment with business outcomes.",
    gradient: "from-amber-900 to-orange-950",
    accent: "#fbbf24",
  },
  {
    tag: "UX & Digital Commerce",
    title: "Turn Browsers Into Buyers Seamlessly",
    desc: "Commerce experiences engineered to convert and delight at every touchpoint.",
    gradient: "from-fuchsia-900 to-purple-950",
    accent: "#e879f9",
  },
];

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years of Expertise" },
];

const navItems = ["UMM AI", "Expertise", "Resources", "About"];

export default function UMMDigital() {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tickerPos, setTickerPos] = useState(0);
  const heroRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let pos = 0;
    const tick = () => {
      pos -= 0.4;
      setTickerPos(pos);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const tickerText = [
    "Request a Consultation",
    "Explore Solutions",
    "Partner for Innovation",
  ];

  return (
    <div className="umm-root">
      {/* NAV */}
      <nav className={`umm-nav ${scrollY > 60 ? "scrolled" : ""}`}>
        <a href="#" className="umm-logo">
          <span className="logo-u">U</span>
          <span className="logo-mm">MM</span>
          <span className="logo-dot">.</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>

        <a href="#" className="nav-cta">
          Get in Touch
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg-grid" />
        <div className="hero-orb hero-orb-1" style={{ transform: `translateY(${scrollY * 0.15}px)` }} />
        <div className="hero-orb hero-orb-2" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            AI-First Engineering Partner
          </div>

          <h1 className="hero-title">
            <span className="title-line">AI-first</span>
            <span className="title-line title-line-accent">engineering,</span>
            <span className="title-line">built to deliver.</span>
          </h1>

          <p className="hero-sub">
            Unified Modern Minds partners with global enterprises to architect
            scalable AI-driven solutions that create lasting, transformative value.
          </p>

          <div className="hero-tags">
            {["Strategy /", "Experience /", "Product /", "AI First /"].map((t) => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#" className="btn-primary">
              Start a Project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" className="btn-ghost">Explore Work</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-card">
            <div className="vc-header">
              <span className="vc-dot" />
              <span className="vc-dot" />
              <span className="vc-dot" />
            </div>
            <div className="vc-content">
              <div className="vc-line" style={{ width: "80%" }} />
              <div className="vc-line" style={{ width: "60%" }} />
              <div className="vc-code">
                <span className="code-kw">const</span>{" "}
                <span className="code-fn">aiPipeline</span>{" "}
                <span className="code-op">=</span>{" "}
                <span className="code-kw">async</span>{" "}
                <span className="code-sym">(</span>
                <span className="code-param">data</span>
                <span className="code-sym">)</span>{" "}
                <span className="code-sym">{"=>"}</span>{" "}
                <span className="code-sym">{"{"}</span>
              </div>
              <div className="vc-code indent">
                <span className="code-kw">return</span>{" "}
                <span className="code-fn">transform</span>
                <span className="code-sym">(</span>
                <span className="code-str">data</span>
                <span className="code-sym">)</span>
                <span className="code-sym">;</span>
              </div>
              <div className="vc-code">
                <span className="code-sym">{"}"}</span>
                <span className="code-cursor" />
              </div>
              <div className="vc-bar-row">
                {[65, 85, 40, 90, 55, 75].map((h, i) => (
                  <div key={i} className="vc-bar" style={{ height: `${h * 0.6}px`, animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <div className="vc-pulse-row">
                <span className="pulse-badge">AI Active</span>
                <span className="pulse-dot" />
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        {stats.map((s) => (
          <div key={s.label} className="stat-item">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* EXPERTISE */}
      <section className="expertise-section">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Seamless Engineering Anchored in Strategic Intelligence</h2>
        </div>

        <div className="services-layout">
          <div className="services-list">
            {services.map((s, i) => (
              <button
                key={i}
                className={`service-item ${activeService === i ? "active" : ""}`}
                onClick={() => setActiveService(i)}
              >
                <span className="si-index">0{i + 1}</span>
                <span className="si-tag">{s.tag}</span>
                <span className="si-arrow">→</span>
              </button>
            ))}
          </div>

          <div className={`service-detail bg-gradient-to-br ${services[activeService].gradient}`}>
            <div className="sd-inner">
              <span className="sd-tag">{services[activeService].tag}</span>
              <h3 className="sd-title">{services[activeService].title}</h3>
              <p className="sd-desc">{services[activeService].desc}</p>
              <a
                href="#"
                className="sd-cta"
                style={{ color: services[activeService].accent, borderColor: services[activeService].accent + "44" }}
              >
                Explore
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <div className="sd-visual" style={{ "--accent": services[activeService].accent }}>
              <div className="sdv-circle sdv-c1" />
              <div className="sdv-circle sdv-c2" />
              <div className="sdv-grid" />
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="work-section">
        <div className="section-header">
          <span className="section-tag">Work at a Glance</span>
          <h2 className="section-title">Projects that move the needle</h2>
        </div>

        <div className="work-grid">
          {[
            { name: "Qwetu", desc: "Innovating student housing in Africa", cat: "UX & Commerce" },
            { name: "Lyca Remit", desc: "Digital Platform for International Money Transfers", cat: "Digital Engineering" },
            { name: "Mohawk Benefits", desc: "Empowering Employees Through Digital Education", cat: "AI & Automation" },
          ].map((p, i) => (
            <div key={i} className="work-card">
              <div className="wc-media">
                <div className="wc-placeholder">
                  <span className="wc-initial">{p.name[0]}</span>
                </div>
                <span className="wc-cat">{p.cat}</span>
              </div>
              <div className="wc-body">
                <h4 className="wc-name">{p.name}</h4>
                <p className="wc-desc">{p.desc}</p>
                <a href="#" className="wc-link">View Case Study →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="about-left">
          <span className="section-tag">About UMM</span>
          <h2 className="about-title">Pushing Digital Boundaries</h2>
          <p className="about-body">
            Unified Modern Minds partners with global enterprises to architect
            scalable AI-driven tech solutions. We design and implement strategies
            that create long-term value and prepare organizations for the evolving
            digital landscape.
          </p>
          <a href="#" className="btn-primary">Get To Know Us →</a>
        </div>

        <div className="about-right">
          {[
            { icon: "⚡", title: "AI-Infused Strategy", desc: "From automation to intelligent insights, we integrate AI to elevate operations." },
            { icon: "🌱", title: "Growth Partner Ecosystem", desc: "Building lasting impact with sustainable partnerships across the globe." },
            { icon: "🎯", title: "Product-Centric Mindset", desc: "Empowering teams with innovation to drive product success." },
          ].map((c) => (
            <div key={c.title} className="about-card">
              <span className="ac-icon">{c.icon}</span>
              <div>
                <h4 className="ac-title">{c.title}</h4>
                <p className="ac-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div
          className="ticker-inner"
          style={{ transform: `translateX(${tickerPos % (300 * tickerText.length)}px)` }}
        >
          {[...tickerText, ...tickerText, ...tickerText, ...tickerText].map((t, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dash">—</span> {t}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="umm-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="logo-u">U</span>
              <span className="logo-mm">MM</span>
              <span className="logo-dot">.</span>
            </span>
            <p className="footer-tagline">Ready to partner? Let's turn your challenge into impact—starting today.</p>
            <a href="#" className="btn-primary" style={{ marginTop: "1.5rem" }}>Get in Touch</a>
          </div>

          <div className="footer-links">
            <div className="fl-col">
              <h5>Contact</h5>
              <p>ping@umm.digital</p>
              <p>hr@umm.digital</p>
            </div>
            <div className="fl-col">
              <h5>Locations</h5>
              {["Dallas, USA", "London, UK", "Dubai, UAE", "Nairobi, Kenya"].map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
            <div className="fl-col">
              <h5>Quick Links</h5>
              {["Home", "About Us", "Expertise", "Contact Us"].map((l) => (
                <a key={l} href="#">{l}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>©2026 Unified Modern Minds</span>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
