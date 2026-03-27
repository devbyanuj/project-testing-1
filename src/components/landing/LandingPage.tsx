"use client";

import { useState, useEffect, useRef, type ReactNode, type RefObject } from "react";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const stats = [
  { target: 50, suffix: "+", label: "Web Apps Built" },
  { target: 9, suffix: "+", label: "Custom Bubble Plugins" },
  { target: 100, suffix: "%", label: "Job Success Score" },
  { target: 3, suffix: "+", label: "Years of Expertise" },
];

const services = [
  {
    icon: "⚡",
    title: "No-Code App Development",
    description:
      "Production-grade Bubble.io applications — from complex SaaS platforms to multi-sided marketplaces. Built fast, built right.",
    tags: ["Bubble.io", "MVP", "SaaS", "Marketplace"],
  },
  {
    icon: "⚙️",
    title: "Full-Stack Engineering",
    description:
      "Custom backends, REST APIs, and frontends using Next.js, Supabase, and PostgreSQL. Scalable architecture from day one.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "APIs"],
  },
  {
    icon: "🤖",
    title: "AI & LLM Integration",
    description:
      "Embed GPT-4, Claude, and custom AI agents directly into your product workflows. From chatbots to fully AI-native platforms.",
    tags: ["OpenAI", "Claude", "LangChain", "Automation"],
  },
  {
    icon: "🧩",
    title: "Custom Plugin Development",
    description:
      "9+ private Bubble plugins — advanced charts, document editors, Mux streaming, Gmail, HubSpot, and payment integrations.",
    tags: ["Bubble Plugins", "JavaScript", "Integrations"],
  },
  {
    icon: "🛒",
    title: "Marketplace & SaaS Builds",
    description:
      "End-to-end marketplace architecture: payments, ratings, messaging, multi-role dashboards, and vendor management.",
    tags: ["Marketplaces", "Payments", "Multi-role", "SaaS"],
  },
  {
    icon: "🎓",
    title: "No-Code Training & Onboarding",
    description:
      "Team onboarding, Bubble environment setup, and hands-on training programs to get your team productive faster.",
    tags: ["Training", "Onboarding", "Bubble.io", "Team"],
  },
];

const caseStudies = [
  {
    category: "Video Review Marketplace",
    title: "Brand Promotion Platform",
    location: "Toronto, Canada",
    description:
      "Marketplace connecting brands with reviewers for video-based product promotion. Multi-role architecture with separate brand and reviewer dashboards.",
    impact: [
      "Active long-term product partnership",
      "Multi-role marketplace with video integration",
      "Ongoing feature development & iteration",
    ],
    tags: ["Bubble.io", "Marketplace", "Video", "Multi-role"],
    badge: "Active Partnership",
  },
  {
    category: "Legal Workflow Automation",
    title: "Case Management & Coaching Platform",
    location: "United States",
    description:
      "End-to-end case management for legal professionals with live group coaching, automated workflows, and client portal — replacing multiple disconnected tools.",
    impact: [
      "Replaced 3+ fragmented internal tools",
      "Automated complex legal intake workflows",
      "Live coaching integrated with case tracking",
    ],
    tags: ["Bubble.io", "Automation", "Legal", "Coaching"],
    badge: "Active Retainer",
  },
  {
    category: "AI Agent Platform",
    title: "Prompt Marketplace & AI Workshop",
    location: "United States",
    description:
      "AI-native platform with a prompt marketplace, interactive workshops, and real-time agent orchestration. GPT-4 integrated into core product flows.",
    impact: [
      "GPT-4 integrated into core product",
      "Prompt marketplace with user accounts & billing",
      "AI workshop environment shipped",
    ],
    tags: ["Bubble.io", "OpenAI", "AI Agents", "SaaS"],
    badge: "Shipped",
  },
  {
    category: "Legal Tech SaaS",
    title: "Legal Chatbot Platform",
    location: "United States",
    description:
      "8-week MVP launch of a legal chatbot SaaS (Paralex.ai) that scaled to 10,000+ internal users. AI workflows and document handling.",
    impact: [
      "10,000+ internal users at launch",
      "Shipped in 8 weeks from concept",
      "Full AI chatbot with document integration",
    ],
    tags: ["Bubble.io", "AI", "Legal Tech", "Rapid MVP"],
    badge: "Launched",
  },
  {
    category: "Sports Marketplace",
    title: "Sports Venue Booking Platform",
    location: "Amsterdam, Netherlands",
    description:
      "Full marketplace for sports facility booking with real-time availability, payment processing, and multi-vendor management. Zero to launch in 3 months.",
    impact: [
      "Launched in 3 months from zero",
      "Real-time availability & booking system",
      "Multi-vendor with integrated payments",
    ],
    tags: ["Bubble.io", "Marketplace", "Payments", "Sports"],
    badge: "Launched",
  },
  {
    category: "SaaS Analytics",
    title: "Custom Analytics Dashboard",
    location: "Europe",
    description:
      "SaaS analytics platform requiring custom JavaScript plugins for complex charting and data visualization beyond Bubble's native capabilities.",
    impact: [
      "3 custom JS charting plugins built",
      "Complex multi-dataset visualizations",
      "Fully integrated SaaS workflow",
    ],
    tags: ["Bubble.io", "JavaScript", "Charts", "Plugins"],
    badge: "Shipped",
  },
];

const processSteps = [
  {
    step: "01",
    icon: "🔍",
    title: "Discovery & Scoping",
    tagline: "Align on the right thing to build",
    description:
      "We dig into your product vision, user flows, and technical requirements. We challenge assumptions early so we build the right thing from the start — not the obvious thing.",
    color: "#328e6e",
  },
  {
    step: "02",
    icon: "🗺️",
    title: "Architecture & Planning",
    tagline: "No surprises — ever",
    description:
      "Data model, key integrations, API design, and delivery milestones are all mapped out before a single screen is built. Estimates you can actually rely on.",
    color: "#67ae6e",
  },
  {
    step: "03",
    icon: "⚡",
    title: "Rapid Build & Iteration",
    tagline: "Ship in weeks, not months",
    description:
      "We ship in short demo cycles with rapid feedback incorporation. Most MVPs land in 6–10 weeks. No big-bang deliveries — you see progress every week.",
    color: "#90c67c",
  },
  {
    step: "04",
    icon: "🚀",
    title: "Launch & Long-Term Partnership",
    tagline: "We grow with you",
    description:
      "We stay post-launch. Our best relationships evolve into long-term retainers. As your product grows, so does our involvement — from feature velocity to architectural decisions.",
    color: "#bff6c3",
  },
];

const technologies = [
  { name: "Bubble.io", category: "No-Code" },
  { name: "Next.js", category: "Frontend" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "OpenAI", category: "AI" },
  { name: "Claude", category: "AI" },
  { name: "LangChain", category: "AI/Orchestration" },
  { name: "Zapier", category: "Automation" },
  { name: "Make.com", category: "Automation" },
  { name: "Airtable", category: "Data" },
  { name: "Xano", category: "Backend" },
  { name: "HubSpot", category: "Integration" },
  { name: "Mux", category: "Video" },
  { name: "Stripe", category: "Payments" },
];

const techRow1 = [...technologies.slice(0, 9), ...technologies.slice(0, 9), ...technologies.slice(0, 9)];
const techRow2 = [...technologies.slice(9), ...technologies.slice(9), ...technologies.slice(9)];

const testimonials = [
  {
    quote:
      "One of our best hires. Their passion for Bubble development shines through in every project — not just technically proficient, but brings enthusiasm and creativity to every challenge. A top-tier Bubble developer.",
    author: "CEO",
    company: "AI Platform Company, US",
    badge: "5.0 ★",
  },
  {
    quote:
      "One of those rare jewel devs — Bubble and full-stack knowledge combined with really good communication skills. Challenges requirements intelligently to deliver speedy and spot-on implementation. Highly recommended.",
    author: "CTO",
    company: "Marketplace Startup, Canada",
    badge: "5.0 ★",
  },
  {
    quote:
      "WOW! True expert in Bubble and all things no-code. Takes time to understand the project, solves problems and actually gets things done. Highly recommend.",
    author: "Founder",
    company: "SaaS Company",
    badge: "5.0 ★",
  },
  {
    quote:
      "A great team player! Not only great at setting up Bubble workflows, but at the cutting edge of integrations and the apps that work alongside them. Highly recommended.",
    author: "Director",
    company: "Legal Services Company, US",
    badge: "5.0 ★",
  },
];

const capabilities = [
  "Custom Bubble Plugin Dev",
  "AI + LLM Integration",
  "SaaS Architecture",
  "Marketplace Builds",
  "Legal Domain Products",
  "Payment Integrations",
  "Rapid MVP (8 weeks)",
  "Full PMF Lifecycle",
  "No-Code Training",
  "Agency Automation",
  "Airtable + Zapier",
  "Supabase + Next.js",
  "Document Editors",
  "Video Streaming (Mux)",
  "Multi-role Dashboards",
  "API Design & Integration",
];

/* ══════════════════════════════════════════
   HOOKS
══════════════════════════════════════════ */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function useCounter(target: number, inView: boolean, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return value;
}

/* ══════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════ */

function StaggerCard({
  children,
  index,
  inView,
}: {
  children: ReactNode;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.14em",
        color: "#67ae6e",
        textTransform: "uppercase",
        marginBottom: 16,
      }}
    >
      {children}
    </p>
  );
}

function Tag({
  children,
  dim = false,
}: {
  children: ReactNode;
  dim?: boolean;
}) {
  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 500,
        backgroundColor: dim
          ? "rgba(50, 142, 110, 0.06)"
          : "rgba(50, 142, 110, 0.12)",
        color: dim ? "#7fa88c" : "#90c67c",
        border: `1px solid ${dim ? "rgba(50, 142, 110, 0.15)" : "rgba(50, 142, 110, 0.28)"}`,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [stepVisible, setStepVisible] = useState(true);

  const [statsRef, statsInView] = useInView(0.3);
  const [servicesRef, servicesInView] = useInView(0.05);
  const [caseRef, caseInView] = useInView(0.03);
  const [processRef, processInView] = useInView(0.25);
  const [techRef, techInView] = useInView(0.2);
  const [testimRef, testimInView] = useInView(0.05);
  const [capRef, capInView] = useInView(0.15);

  const c1 = useCounter(50, statsInView);
  const c2 = useCounter(9, statsInView, 1500);
  const c3 = useCounter(100, statsInView, 2000);
  const c4 = useCounter(3, statsInView, 1200);
  const counts = [c1, c2, c3, c4];
  const suffixes = ["+", "+", "%", "+"];

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!processInView) return;
    const timer = setInterval(() => {
      setStepVisible(false);
      const switchTimer = setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
        setStepVisible(true);
      }, 200);
      return () => clearTimeout(switchTimer);
    }, 3200);
    return () => clearInterval(timer);
  }, [processInView]);

  const S: React.CSSProperties = {
    fontFamily: "inherit",
  };

  /* ── styles ── */
  const card = (extra?: React.CSSProperties): React.CSSProperties => ({
    backgroundColor: "rgba(26, 47, 37, 0.55)",
    border: "1px solid rgba(50, 142, 110, 0.18)",
    borderRadius: 18,
    padding: 28,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ...extra,
  });

  return (
    <div style={{ backgroundColor: "#050d0a", color: "#e0fee5", minHeight: "100vh", ...S }}>

      {/* ══ NAV ══ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          borderBottom: "1px solid rgba(50, 142, 110, 0.18)",
          backgroundColor: "rgba(5, 13, 10, 0.9)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 24px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 20, fontWeight: 800, color: "#90c67c", letterSpacing: "-0.03em" }}>
            AppForge
          </span>
          <div className="hidden md:flex" style={{ gap: 32, display: "flex", alignItems: "center" }}>
            {["Services", "Work", "Process", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ fontSize: 14, fontWeight: 500, color: "#b0d4b8", textDecoration: "none", transition: "color 200ms" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#b0d4b8")}
              >
                {item}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            style={{
              padding: "10px 22px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "#328e6e",
              boxShadow: "0 0 18px rgba(50, 142, 110, 0.35)",
              textDecoration: "none",
              transition: "all 200ms",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 0 28px rgba(50, 142, 110, 0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 18px rgba(50, 142, 110, 0.35)"; }}
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{ paddingTop: 148, paddingBottom: 112, paddingLeft: 24, paddingRight: 24, position: "relative", overflow: "hidden" }}>
        {/* dot grid */}
        <div className="dot-grid" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(50, 142, 110, 0.13) 1px, transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 920, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }}>
          {/* badge */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "8px 18px", borderRadius: 100, fontSize: 13, fontWeight: 500, marginBottom: 40,
              backgroundColor: "rgba(50, 142, 110, 0.12)",
              border: "1px solid rgba(50, 142, 110, 0.35)",
              color: "#90c67c",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(-14px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#90c67c", display: "inline-block", boxShadow: "0 0 8px #90c67c" }} />
            Top Rated Plus &nbsp;·&nbsp; 100% Job Success &nbsp;·&nbsp; 50+ Apps Built
          </div>

          {/* headline */}
          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 78px)",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.045em",
              marginBottom: 26,
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 0.75s ease 0.1s, transform 0.75s ease 0.1s",
            }}
          >
            No-Code & Full-Stack
            <br />
            <span style={{ color: "#90c67c" }}>Excellence</span> for
            <br />
            Modern Founders
          </h1>

          {/* subtext */}
          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 21px)",
              color: "#7fa88c",
              lineHeight: 1.65,
              maxWidth: 680,
              margin: "0 auto 52px",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.75s ease 0.2s, transform 0.75s ease 0.2s",
            }}
          >
            We build scalable web products — from rapid Bubble.io MVPs to AI-powered full-stack platforms. Get to market faster without compromising on quality.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.75s ease 0.32s, transform 0.75s ease 0.32s",
            }}
          >
            <a
              href="#work"
              style={{ padding: "16px 36px", borderRadius: 12, fontSize: 16, fontWeight: 700, color: "#fff", backgroundColor: "#328e6e", boxShadow: "0 0 44px rgba(50, 142, 110, 0.48)", textDecoration: "none", transition: "all 230ms", display: "inline-block" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(50, 142, 110, 0.65)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 44px rgba(50, 142, 110, 0.48)"; }}
            >
              View Our Work
            </a>
            <a
              href="#contact"
              style={{ padding: "16px 36px", borderRadius: 12, fontSize: 16, fontWeight: 700, color: "#90c67c", backgroundColor: "rgba(50, 142, 110, 0.08)", border: "1px solid rgba(50, 142, 110, 0.42)", textDecoration: "none", transition: "all 230ms", display: "inline-block" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.backgroundColor = "rgba(50, 142, 110, 0.15)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.backgroundColor = "rgba(50, 142, 110, 0.08)"; }}
            >
              Let&apos;s Talk →
            </a>
          </div>
        </div>

        {/* floating card — right */}
        <div
          className="hidden lg:block"
          style={{
            position: "absolute", right: "5%", top: "34%",
            padding: "16px 20px", borderRadius: 16,
            border: "1px solid rgba(50, 142, 110, 0.32)",
            backgroundColor: "rgba(26, 47, 37, 0.88)",
            backdropFilter: "blur(14px)",
            minWidth: 230,
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0) translateY(0)" : "translateX(28px)",
            transition: "opacity 0.9s ease 0.85s, transform 0.9s ease 0.85s",
            animation: "floatCard 4.5s ease-in-out infinite",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#90c67c", display: "inline-block", boxShadow: "0 0 8px #90c67c" }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: "#90c67c", textTransform: "uppercase", letterSpacing: "0.1em" }}>Recently Launched</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 3 }}>Sports Booking Platform</div>
          <div style={{ fontSize: 12, color: "#67ae6e", marginBottom: 6 }}>📍 Amsterdam, Netherlands</div>
          <div style={{ fontSize: 11, color: "#7fa88c" }}>Built in 3 months · Zero → Launch</div>
        </div>

        {/* floating card — left */}
        <div
          className="hidden lg:block"
          style={{
            position: "absolute", left: "4%", bottom: "22%",
            padding: "16px 20px", borderRadius: 16,
            border: "1px solid rgba(50, 142, 110, 0.28)",
            backgroundColor: "rgba(26, 47, 37, 0.88)",
            backdropFilter: "blur(14px)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateX(0)" : "translateX(-28px)",
            transition: "opacity 0.9s ease 1.1s, transform 0.9s ease 1.1s",
            animation: "floatCardAlt 5.5s ease-in-out infinite",
          }}
        >
          <div style={{ fontSize: 10, fontWeight: 700, color: "#67ae6e", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>Active Retainers</div>
          {["Legal Platform · US", "Marketplace · Canada"].map((r) => (
            <div key={r} style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#328e6e", flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: "#b0d4b8" }}>{r}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section
        ref={statsRef as RefObject<HTMLElement>}
        style={{
          borderTop: "1px solid rgba(50,142,110,0.2)",
          borderBottom: "1px solid rgba(50,142,110,0.2)",
          padding: "60px 24px",
          backgroundColor: "rgba(50,142,110,0.04)",
        }}
      >
        <div
          style={{ maxWidth: 960, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "40px 24px", textAlign: "center" }}
          className="grid md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.65s ease ${i * 130}ms, transform 0.65s ease ${i * 130}ms`,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(40px, 5.5vw, 56px)",
                  fontWeight: 900,
                  color: "#90c67c",
                  lineHeight: 1,
                  marginBottom: 10,
                  letterSpacing: "-0.04em",
                }}
              >
                {statsInView ? counts[i] : 0}
                {suffixes[i]}
              </div>
              <div style={{ fontSize: 13, color: "#7fa88c", fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section id="services" style={{ padding: "112px 24px" }} ref={servicesRef as RefObject<HTMLElement>}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <SectionLabel>What We Build</SectionLabel>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>End-to-End Product Development</h2>
            <p style={{ fontSize: 18, color: "#7fa88c", maxWidth: 560, margin: "0 auto" }}>
              No-code speed with full-stack depth. We pick the right tool for your product — not the other way around.
            </p>
          </div>
          <div
            style={{ display: "grid", gap: 20 }}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid"
          >
            {services.map((service, i) => (
              <StaggerCard key={service.title} index={i} inView={servicesInView}>
                <div
                  style={card()}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(50, 142, 110, 0.18)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.boxShadow = ""; }}
                >
                  <div style={{ fontSize: 32, marginBottom: 18 }}>{service.icon}</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{service.title}</h3>
                  <p style={{ fontSize: 14, color: "#7fa88c", lineHeight: 1.65, marginBottom: 18 }}>{service.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {service.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASE STUDIES ══ */}
      <section
        id="work"
        style={{ padding: "112px 24px", backgroundColor: "rgba(26, 47, 37, 0.22)" }}
        ref={caseRef as RefObject<HTMLElement>}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <SectionLabel>Our Work</SectionLabel>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>Projects That Ship</h2>
            <p style={{ fontSize: 18, color: "#7fa88c", maxWidth: 560, margin: "0 auto" }}>
              Real products, real clients, real results — from early-stage MVPs to platforms serving thousands.
            </p>
          </div>
          <div
            style={{ display: "grid", gap: 20 }}
            className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid"
          >
            {caseStudies.map((project, i) => (
              <StaggerCard key={project.title} index={i} inView={caseInView}>
                <div
                  style={{ ...card({ backgroundColor: "rgba(5, 13, 10, 0.75)", display: "flex", flexDirection: "column", height: "100%" }) }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(50, 142, 110, 0.38)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ""; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(50, 142, 110, 0.18)"; }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 20 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: "5px 10px", borderRadius: 20, backgroundColor: "rgba(50, 142, 110, 0.12)", color: "#67ae6e", border: "1px solid rgba(50, 142, 110, 0.2)" }}>{project.category}</span>
                    <span style={{ fontSize: 11, fontWeight: 600, padding: "5px 10px", borderRadius: 20, backgroundColor: "rgba(144, 198, 124, 0.08)", color: "#90c67c", border: "1px solid rgba(144, 198, 124, 0.22)", whiteSpace: "nowrap" }}>{project.badge}</span>
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{project.title}</h3>
                  <p style={{ fontSize: 12, color: "#67ae6e", fontWeight: 500, marginBottom: 14 }}>📍 {project.location}</p>
                  <p style={{ fontSize: 13, color: "#7fa88c", lineHeight: 1.65, marginBottom: 18, flex: 1 }}>{project.description}</p>
                  <div style={{ marginBottom: 16 }}>
                    {project.impact.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 5 }}>
                        <span style={{ color: "#328e6e", fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 13, color: "#b0d4b8" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tags.map((t) => <Tag key={t} dim>{t}</Tag>)}
                  </div>
                </div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section
        id="process"
        style={{ padding: "112px 24px" }}
        ref={processRef as RefObject<HTMLElement>}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <SectionLabel>How We Work</SectionLabel>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>From Concept to Launch</h2>
            <p style={{ fontSize: 18, color: "#7fa88c", maxWidth: 560, margin: "0 auto" }}>
              A structured, fast-moving process designed to reduce risk and ship products people actually want.
            </p>
          </div>

          {/* Stepper timeline */}
          <div
            style={{
              opacity: processInView ? 1 : 0,
              transform: processInView ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Step circles row */}
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
              {/* track line */}
              <div style={{ position: "absolute", top: 26, left: "4%", right: "4%", height: 2, backgroundColor: "rgba(50, 142, 110, 0.18)", borderRadius: 2 }} />

              {/* progress fill */}
              <div
                style={{
                  position: "absolute", top: 26, left: "4%", height: 2,
                  backgroundColor: "#328e6e",
                  borderRadius: 2,
                  width: `${(activeStep / (processSteps.length - 1)) * 92}%`,
                  transition: "width 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  boxShadow: "0 0 12px rgba(50, 142, 110, 0.6)",
                }}
              />

              {processSteps.map((step, i) => {
                const isActive = i === activeStep;
                const isPast = i < activeStep;
                return (
                  <button
                    key={i}
                    onClick={() => { setStepVisible(false); setTimeout(() => { setActiveStep(i); setStepVisible(true); }, 160); }}
                    style={{
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
                      position: "relative", zIndex: 10,
                      background: "none", border: "none", cursor: "pointer",
                      flex: 1,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        width: 52, height: 52, borderRadius: "50%",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: isActive ? 20 : 14,
                        fontWeight: 700,
                        backgroundColor: isActive
                          ? "#328e6e"
                          : isPast
                          ? "rgba(50, 142, 110, 0.3)"
                          : "rgba(26, 47, 37, 0.9)",
                        border: isActive
                          ? "2px solid #90c67c"
                          : isPast
                          ? "2px solid rgba(50, 142, 110, 0.5)"
                          : "2px solid rgba(50, 142, 110, 0.22)",
                        boxShadow: isActive ? "0 0 24px rgba(50, 142, 110, 0.7), 0 0 48px rgba(50, 142, 110, 0.3)" : "none",
                        transition: "all 0.5s ease",
                        color: isActive ? "#fff" : isPast ? "#90c67c" : "#67ae6e",
                        transform: isActive ? "scale(1.15)" : "scale(1)",
                      }}
                    >
                      {isPast ? "✓" : step.icon}
                    </div>
                    <span
                      style={{
                        fontSize: 13, fontWeight: 600,
                        color: isActive ? "#e0fee5" : "#7fa88c",
                        transition: "color 0.4s ease",
                        textAlign: "center",
                      }}
                      className="hidden sm:block"
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active step card */}
            <div
              style={{
                padding: "40px 44px",
                borderRadius: 20,
                border: "1px solid rgba(50, 142, 110, 0.3)",
                backgroundColor: "rgba(26, 47, 37, 0.6)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 60px rgba(50, 142, 110, 0.12)",
                opacity: stepVisible ? 1 : 0,
                transform: stepVisible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.22s ease, transform 0.22s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
                <div
                  style={{
                    width: 64, height: 64, borderRadius: 16, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28,
                    backgroundColor: "rgba(50, 142, 110, 0.18)",
                    border: "1px solid rgba(50, 142, 110, 0.3)",
                  }}
                >
                  {processSteps[activeStep].icon}
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#67ae6e", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
                    Step {processSteps[activeStep].step}
                  </div>
                  <h3 style={{ fontSize: "clamp(20px, 2.5vw, 26px)", fontWeight: 800, marginBottom: 6, letterSpacing: "-0.025em" }}>
                    {processSteps[activeStep].title}
                  </h3>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#90c67c", marginBottom: 14 }}>
                    {processSteps[activeStep].tagline}
                  </p>
                  <p style={{ fontSize: 16, color: "#b0d4b8", lineHeight: 1.7, maxWidth: 700 }}>
                    {processSteps[activeStep].description}
                  </p>
                </div>
              </div>
            </div>

            {/* progress dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
              {processSteps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setStepVisible(false); setTimeout(() => { setActiveStep(i); setStepVisible(true); }, 160); }}
                  style={{
                    height: 6, borderRadius: 3,
                    width: i === activeStep ? 28 : 8,
                    backgroundColor: i === activeStep ? "#90c67c" : "rgba(50, 142, 110, 0.3)",
                    border: "none", cursor: "pointer",
                    transition: "all 0.4s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TECH MARQUEE ══ */}
      <section
        ref={techRef as RefObject<HTMLElement>}
        style={{ padding: "96px 0", backgroundColor: "rgba(26, 47, 37, 0.22)", overflow: "hidden" }}
      >
        <div style={{ textAlign: "center", marginBottom: 56, padding: "0 24px" }}>
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Built With the Best Tools
          </h2>
        </div>

        {/* Row 1 — scrolls left */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: 16,
            opacity: techInView ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <div
            className="marquee-track"
            style={{ display: "flex", gap: 14, width: "max-content" }}
          >
            {techRow1.map((tech, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  padding: "12px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(50, 142, 110, 0.2)",
                  backgroundColor: "rgba(26, 47, 37, 0.6)",
                  textAlign: "center",
                  minWidth: 140,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600 }}>{tech.name}</div>
                <div style={{ fontSize: 11, color: "#67ae6e", marginTop: 3 }}>{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div
          style={{
            overflow: "hidden",
            opacity: techInView ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          <div
            className="marquee-track-reverse"
            style={{ display: "flex", gap: 14, width: "max-content" }}
          >
            {techRow2.map((tech, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  padding: "12px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(50, 142, 110, 0.18)",
                  backgroundColor: "rgba(5, 13, 10, 0.65)",
                  textAlign: "center",
                  minWidth: 140,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600 }}>{tech.name}</div>
                <div style={{ fontSize: 11, color: "#67ae6e", marginTop: 3 }}>{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══ */}
      <section
        id="testimonials"
        style={{ padding: "112px 24px" }}
        ref={testimRef as RefObject<HTMLElement>}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <SectionLabel>Client Feedback</SectionLabel>
            <h2 style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 16 }}>What Clients Say</h2>
            <p style={{ fontSize: 18, color: "#7fa88c", maxWidth: 500, margin: "0 auto" }}>
              Feedback from clients across the US, Canada, Europe, and beyond.
            </p>
          </div>
          <div
            style={{ display: "grid", gap: 20 }}
            className="grid-cols-1 md:grid-cols-2 grid"
          >
            {testimonials.map((t, i) => (
              <StaggerCard key={i} index={i} inView={testimInView}>
                <div
                  style={card({ padding: 36 })}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ""; }}
                >
                  <div style={{ fontSize: 48, fontWeight: 900, color: "rgba(50, 142, 110, 0.28)", lineHeight: 1, marginBottom: 18 }}>&ldquo;</div>
                  <p style={{ fontSize: 15, color: "#b0d4b8", lineHeight: 1.75, marginBottom: 24 }}>{t.quote}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{t.author}</div>
                      <div style={{ fontSize: 12, color: "#67ae6e", marginTop: 2 }}>{t.company}</div>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "#90c67c" }}>{t.badge}</span>
                  </div>
                </div>
              </StaggerCard>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPABILITIES ══ */}
      <section
        style={{ padding: "96px 24px", backgroundColor: "rgba(26, 47, 37, 0.22)" }}
        ref={capRef as RefObject<HTMLElement>}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel>Proven Expertise</SectionLabel>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 14 }}>Our Capability Map</h2>
            <p style={{ fontSize: 16, color: "#7fa88c", maxWidth: 480, margin: "0 auto" }}>Every capability below is backed by delivered client work.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
            {capabilities.map((cap, i) => (
              <span
                key={cap}
                style={{
                  padding: "10px 20px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  backgroundColor: "rgba(50, 142, 110, 0.1)",
                  border: "1px solid rgba(50, 142, 110, 0.3)",
                  color: "#90c67c",
                  opacity: capInView ? 1 : 0,
                  transform: capInView ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
                  transition: `opacity 0.55s ease ${i * 55}ms, transform 0.55s ease ${i * 55}ms`,
                  cursor: "default",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(50, 142, 110, 0.2)"; e.currentTarget.style.transform = "translateY(-2px) scale(1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(50, 142, 110, 0.1)"; e.currentTarget.style.transform = "translateY(0) scale(1)"; }}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section
        id="contact"
        style={{ padding: "112px 24px", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(50, 142, 110, 0.18)" }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 110%, rgba(50, 142, 110, 0.18) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }}>
          <SectionLabel>Let&apos;s Build Together</SectionLabel>
          <h2 style={{ fontSize: "clamp(36px, 5.5vw, 58px)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 20 }}>
            Ready to Build Your Product?
          </h2>
          <p style={{ fontSize: 20, color: "#7fa88c", marginBottom: 52, lineHeight: 1.6 }}>
            Whether you have a complete spec or just a napkin sketch — let&apos;s figure out the fastest path to launch.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:hello@appforge.dev"
              style={{ padding: "18px 40px", borderRadius: 12, fontSize: 16, fontWeight: 700, color: "#fff", backgroundColor: "#328e6e", boxShadow: "0 0 50px rgba(50, 142, 110, 0.5)", textDecoration: "none", transition: "all 230ms", display: "inline-block" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 0 70px rgba(50, 142, 110, 0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 0 50px rgba(50, 142, 110, 0.5)"; }}
            >
              Send a Message
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "18px 40px", borderRadius: 12, fontSize: 16, fontWeight: 700, color: "#90c67c", backgroundColor: "rgba(50, 142, 110, 0.08)", border: "1px solid rgba(50, 142, 110, 0.4)", textDecoration: "none", transition: "all 230ms", display: "inline-block" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.backgroundColor = "rgba(50, 142, 110, 0.16)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.backgroundColor = "rgba(50, 142, 110, 0.08)"; }}
            >
              Book a Discovery Call →
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ borderTop: "1px solid rgba(50, 142, 110, 0.14)", padding: "52px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#90c67c", letterSpacing: "-0.03em", marginBottom: 10 }}>AppForge</div>
          <p style={{ fontSize: 13, color: "#7fa88c", marginBottom: 32 }}>
            No-Code & Full-Stack Expert &nbsp;·&nbsp; Top Rated Plus &nbsp;·&nbsp; 100% Job Success
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginBottom: 40 }}>
            {["Services", "Work", "Process", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ fontSize: 13, fontWeight: 500, color: "#67ae6e", textDecoration: "none", transition: "color 200ms" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#67ae6e")}
              >
                {item}
              </a>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#3d5a47" }}>
            © {new Date().getFullYear()} AppForge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
