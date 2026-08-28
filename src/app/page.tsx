"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "@/styles/HomePage.css";
import {
  DentalImplantIcon,
  SmileDesignIcon,
  AlignerIcon,
  CrownIcon,
  MicroscopeIcon,
  LaserIcon,
  GumCareIcon,
  PediatricIcon,
  TargetIcon,
  LocationPinIcon,
  PhoneIcon,
  WhatsAppIcon,
  InstitutionIcon,
  FellowshipIcon,
  IsoBadgeIcon,
  ScanBadgeIcon,
  DiamondBadgeIcon,
  ShieldSterileIcon,
  CheckIcon,
  XMarkIcon,
  ArrowUpRightIcon,
  CloseIcon,
  StarRating,
  DoctorIcon,
} from "@/icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

/* ─── Data ─── */
const technologies = [
  {
    id: "scanner",
    name: "3D Intraoral Optical Scanner",
    badge: "Planmeca® Emerald S",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="d02-tech-icon-svg">
        <rect x="6" y="18" width="36" height="20" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M14 18V12a2 2 0 012-2h16a2 2 0 012 2v6" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2.2" />
        <path d="M24 24v-4M24 32v4M20 28h-4M28 28h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    desc: "Captures 3D digital impressions of your entire mouth in under 60 seconds with sub-micron accuracy. Completely eliminates gooey impression trays and gagging.",
    patientBenefit: "Zero gag reflex, no silicone taste, instant 3D smile visualization.",
    specs: [
      { k: "Scan Speed", v: "< 60 Seconds" },
      { k: "Accuracy", v: "Sub-20 Microns" },
      { k: "Impression Method", v: "100% Optical (No Putty)" },
    ],
  },
  {
    id: "cbct",
    name: "3D Cone Beam CT (CBCT)",
    badge: "Planmeca® ProMax 3D",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="d02-tech-icon-svg">
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.2" />
        <path d="M24 10v4M24 34v4M10 24h4M34 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15.5 15.5l3 3M29.5 29.5l3 3M15.5 32.5l3-3M29.5 18.5l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    desc: "Ultra-low dose 3D volumetric X-ray providing cross-sectional views of bone volume, density, and nerve proximity for 100% predictable implant placement.",
    patientBenefit: "Computer-guided keyhole surgery without guesswork or exploratory incisions.",
    specs: [
      { k: "Resolution", v: "75 µm Isotropic Voxel" },
      { k: "Radiation Reduction", v: "Up to 90% vs Medical CT" },
      { k: "Surgical Guide", v: "CAD/CAM Custom Stent" },
    ],
  },
  {
    id: "cerec",
    name: "CAD/CAM 5-Axis Milling Unit",
    badge: "Dentsply Sirona CEREC®",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="d02-tech-icon-svg">
        <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="2.2" />
        <path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M18 28h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 18h32" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    desc: "In-house precision robotic milling that fabricates high-strength monolithic zirconia and E-max porcelain crowns right during your appointment.",
    patientBenefit: "Walk in with a damaged tooth, walk out with a permanent crown in 60 minutes.",
    specs: [
      { k: "Restoration Time", v: "Single Visit (60 Min)" },
      { k: "Material", v: "E-Max® / Multilayer Zirconia" },
      { k: "Temporary Tooth", v: "Never Needed" },
    ],
  },
  {
    id: "laser",
    name: "Biolase® Waterlase Laser",
    badge: "HydroPhotonics™ Dental Laser",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="d02-tech-icon-svg">
        <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.2" />
        <path d="M13.5 13.5l4 4M30.5 30.5l4 4M13.5 34.5l4-4M30.5 17.5l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    desc: "Uses laser-energized water droplets to precisely cut hard and soft tissue without the heat, friction, or vibration of traditional drills.",
    patientBenefit: "Painless gum recontouring, cavity prep without needles in most cases, faster healing.",
    specs: [
      { k: "Wavelength", v: "2780 nm Er,Cr:YSGG" },
      { k: "Anesthesia Required", v: "Minimal / None" },
      { k: "Bleeding & Swelling", v: "Virtually Zero" },
    ],
  },
  {
    id: "wand",
    name: "The Wand® Computerized Anesthesia",
    badge: "Milestone Scientific STA",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="d02-tech-icon-svg">
        <path d="M12 36L28 12l4 4L16 40z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M28 12l5-3 3 3-3 5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="12" cy="36" r="2.5" fill="currentColor" />
        <path d="M22 18l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      </svg>
    ),
    desc: "Microprocessor-controlled single-tooth anesthesia delivering numbing solution below the patient's pain perception threshold.",
    patientBenefit: "No syringe sting, no heavy numb face or drooping lips after your visit.",
    specs: [
      { k: "Flow Rate Control", v: "Computer Dynamic Pressure" },
      { k: "Numbing Area", v: "Single Tooth Target" },
      { k: "Discomfort Level", v: "Pain-Free Delivery" },
    ],
  },
];

const comparisonData = [
  {
    feature: "Dental Impressions",
    legacy: "Messy, cold alginate silicone putty in mouth for 5+ minutes causing gagging and inaccurate retakes.",
    smilecraft: "60-second pleasant intraoral laser scan. Real-time 3D teeth rendering on high-def monitor.",
  },
  {
    feature: "Crown Turnaround",
    legacy: "2 to 3 weeks waiting with fragile temporary crowns and multiple painful anesthetic injections.",
    smilecraft: "Same-Day CEREC® in-house milling. Permanent porcelain crown designed and bonded in 60 mins.",
  },
  {
    feature: "Implant Surgery",
    legacy: "Manual freehand placement with exploratory incisions, multiple stitches, and post-op swelling.",
    smilecraft: "3D CBCT guided keyhole placement. 100% digital stent for zero guesswork and faster recovery.",
  },
  {
    feature: "Anesthesia Delivery",
    legacy: "Manual syringe puncture with stinging pressure and half-face numbness lasting hours.",
    smilecraft: "The Wand® microprocessor-guided anesthesia. Painless single-tooth numbing with immediate clarity.",
  },
];

const treatments = [
  { icon: <DentalImplantIcon size={26} />, label: "Dental Implants", sub: "3D CBCT Guided", bookingTech: "3D CBCT Guided Implant Consultation" },
  { icon: <SmileDesignIcon size={26} />, label: "Smile Design", sub: "Digital DSD Protocol", bookingTech: "3D Digital Oral Scan & Smile Simulation" },
  { icon: <AlignerIcon size={26} />, label: "Invisalign®", sub: "Diamond Provider", bookingTech: "Invisalign 3D Outcome Preview" },
  { icon: <CrownIcon size={26} />, label: "Same-Day Crowns", sub: "CEREC® In-House", bookingTech: "Same-Day CEREC CAD/CAM Crown Assessment" },
  { icon: <MicroscopeIcon size={26} />, label: "Microscopic RCT", sub: "Zeiss 20× Optics", bookingTech: "Microscopic Root Canal Therapy" },
  { icon: <LaserIcon size={26} />, label: "Laser Therapy", sub: "Biolase® Waterlase", bookingTech: "Biolase Pain-Free Laser Therapy" },
  { icon: <GumCareIcon size={26} />, label: "Gum Surgery", sub: "Flapless Laser", bookingTech: "Biolase Pain-Free Laser Therapy" },
  { icon: <PediatricIcon size={26} />, label: "Paediatric Care", sub: "Anxiety-Free Protocol", bookingTech: "3D Digital Oral Scan & Smile Simulation" },
];

const doctors = [
  {
    name: "Dr. Priya Sharma",
    initials: "PS",
    role: "Lead Implantologist & Prosthodontist",
    degrees: "BDS, MDS (Prosthodontics) · 14 Yrs Practice",
    cert: "Certified Digital Implantologist (ICOI Fellow, USA)",
    defaultTreatment: "3D CBCT Guided Implant Consultation",
    color: "#0EA5E9",
  },
  {
    name: "Dr. Arjun Mehta",
    initials: "AM",
    role: "Digital Orthodontics Specialist",
    degrees: "BDS, MDS (Orthodontics) · 10 Yrs Practice",
    cert: "Invisalign® Diamond Certified Provider & 3D Aligner Specialist",
    defaultTreatment: "Invisalign 3D Outcome Preview",
    color: "#06B6D4",
  },
  {
    name: "Dr. Kavya Reddy",
    initials: "KR",
    role: "Micro-Endodontics & Restorative Specialist",
    degrees: "BDS, MDS (Endodontics) · 8 Yrs Practice",
    cert: "Microscopic Endodontics Specialist (Zeiss 20x Optics)",
    defaultTreatment: "Same-Day CEREC CAD/CAM Crown Assessment",
    color: "#38BDF8",
  },
];

const testimonials = [
  {
    name: "Rohit Agarwal",
    initials: "RA",
    role: "Business Executive, Jubilee Hills",
    rating: 5,
    text: "The 3D scan was genuinely futuristic — no gagging, no impression trays. My crown was ready the same day. I couldn't believe it was dentistry.",
    treatment: "Same-Day CEREC Crown",
  },
  {
    name: "Sneha Pillai",
    initials: "SP",
    role: "Surgeon, Apollo Hospital",
    rating: 5,
    text: "As a doctor myself, I was skeptical. The CBCT imaging and surgical guide precision for my implant was exceptional. Zero pain, zero swelling. Reference-standard work.",
    treatment: "3D Guided Dental Implant",
  },
  {
    name: "Vikram Narayan",
    initials: "VN",
    role: "Tech Founder, Hitech City",
    rating: 5,
    text: "Got the Invisalign 3D outcome preview before committing — saw exactly what my smile would look like after 8 months. The tech sold itself. 10/10 experience.",
    treatment: "Invisalign® Diamond Plan",
  },
];

const certBadges = [
  { label: "IDA Member", icon: <InstitutionIcon size={16} /> },
  { label: "ICOI Fellow", icon: <FellowshipIcon size={16} /> },
  { label: "ISO 9001 Certified", icon: <IsoBadgeIcon size={16} /> },
  { label: "Planmeca® Authorized", icon: <ScanBadgeIcon size={16} /> },
  { label: "Invisalign® Diamond", icon: <DiamondBadgeIcon size={16} /> },
  { label: "BIS Sterilization", icon: <ShieldSterileIcon size={16} /> },
];

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─── Page Component ─── */
export default function HomePage() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState("3D Digital Oral Scan & Smile Simulation");
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);

  // Before/After Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const activeTech = technologies[activeTechIndex];

  // Counter triggers
  const telemetryRef = useRef<HTMLDivElement>(null);
  const [telemetryInView, setTelemetryInView] = useState(false);
  useEffect(() => {
    const el = telemetryRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTelemetryInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Scroll reveal refs
  const { ref: techRef, inView: techInView } = useInView();
  const { ref: smileRef, inView: smileInView } = useInView();
  const { ref: treatRef, inView: treatInView } = useInView();
  const { ref: compRef, inView: compInView } = useInView();
  const { ref: workflowRef, inView: workflowInView } = useInView();
  const { ref: docRef, inView: docInView } = useInView();
  const { ref: testiRef, inView: testiInView } = useInView();
  const { ref: ctaRef, inView: ctaInView } = useInView();

  // Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && bookingOpen) {
        setBookingOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [bookingOpen]);

  // Before/After Slider Drag Handling
  const handleSliderMove = useCallback((clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingSlider) handleSliderMove(e.clientX);
  };

  // Open booking with pre-selected doctor
  const openDoctorBooking = (doctor: typeof doctors[0]) => {
    setSelectedDoctor(doctor.name);
    setSelectedTech(doctor.defaultTreatment);
    setBookingOpen(true);
  };

  const resetBooking = () => {
    setBookingOpen(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="d02-container">
      <Header onBookClick={() => setBookingOpen(true)} />

      {/* ─── Hero Section ─── */}
      <section className="d02-hero" aria-label="Digital Dental Technology Hero">
        <div className="d02-hero-bg">
          <Image
            src="/dental-scanner-3d.jpg"
            alt="Doctor performing 3D intraoral digital optical scan at SmileCraft Dental Studio Banjara Hills"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="d02-hero-overlay" />
        <div className="d02-hero-grid-lines" />

        <div className="d02-hero-content">
          <motion.h1
            className="d02-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Digital Precision.
            <br />
            <span className="d02-hero-title-cyan">Measurable</span>
            <br />
            Outcomes.
          </motion.h1>

          <motion.p
            className="d02-hero-lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Rejecting obsolete guesswork and messy impression trays. Experience sub-micron 3D oral scanning,
            same-day CAD/CAM ceramic crowns, and computer-guided keyhole implant surgery in Banjara Hills.
          </motion.p>

          <motion.div
            className="d02-hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button type="button" onClick={() => setBookingOpen(true)} className="d02-btn-primary">
              Book 3D Optical Scan
            </button>
            <a href="tel:+914023456789" className="d02-btn-secondary">
              <PhoneIcon size={14} style={{ marginRight: "6px", verticalAlign: "middle" }} />
              Clinical Desk: +91 40 2345 6789
            </a>
          </motion.div>
        </div>

        {/* Telemetry HUD Data Strip (Centered) */}
        <div className="d02-telemetry-strip" ref={telemetryRef}>
          <div className="d02-telemetry-inner">
            {[
              { num: "01", val: "< 20 µm", lbl: "3D Optical Scan Accuracy" },
              { num: "02", val: "60 Mins", lbl: "Same-Day CEREC® Crowns" },
              { num: "03", val: "90% Less", lbl: "Low-Dose CBCT Radiation" },
              { num: "04", val: "4.9 / 5.0 ★", lbl: "800+ Patient Reviews" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="d02-telemetry-item"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="d02-telemetry-num">{item.num}</div>
                <div className="d02-telemetry-data">
                  <span className="d02-telemetry-val">{telemetryInView ? item.val : "—"}</span>
                  <span className="d02-telemetry-lbl">{item.lbl}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Certification Badge Strip ─── */}
      <div className="d02-cert-strip">
        <div className="d02-cert-inner">
          {certBadges.map((b) => (
            <div key={b.label} className="d02-cert-badge">
              <span className="d02-badge-icon">{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Interactive Technology Showcase Section ─── */}
      <section id="technology" className="d02-tech-section">
        <div className="d02-section-container" ref={techRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="d02-section-title">
              Engineered for Precision. Built for Comfort.
            </h2>
          </motion.div>

          {/* Tab buttons */}
          <motion.div
            className="d02-tech-tabs-nav"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {technologies.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTechIndex(idx)}
                className={`d02-tech-tab-btn ${activeTechIndex === idx ? "active" : ""}`}
              >
                {t.name}
              </button>
            ))}
          </motion.div>

          {/* Active tech card (Laboratory Console HUD) */}
          <motion.div
            className="d02-tech-card-active"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="d02-tech-header">
              <div className="d02-tech-header-left">
                <div className="d02-tech-icon-wrap">{activeTech.icon}</div>
                <div>
                  <h3 className="d02-tech-h3">{activeTech.name}</h3>
                </div>
              </div>
              <span className="d02-tech-badge">{activeTech.badge}</span>
            </div>

            <div className="d02-tech-body">
              <p className="d02-tech-p">{activeTech.desc}</p>
              <div className="d02-benefit-box">
                <span className="d02-benefit-title">PATIENT ADVANTAGE</span>
                <span className="d02-benefit-desc">{activeTech.patientBenefit}</span>
              </div>
            </div>

            <div className="d02-tech-specs-bar">
              <div className="d02-tech-specs-items">
                {activeTech.specs.map((spec) => (
                  <div key={spec.k} className="d02-tech-spec-col">
                    <span className="d02-spec-k">{spec.k}</span>
                    <span className="d02-spec-v">{spec.v}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedTech(activeTech.name);
                  setSelectedDoctor(null);
                  setBookingOpen(true);
                }}
                className="d02-btn-primary"
              >
                Book Diagnostic Scan <ArrowUpRightIcon size={14} style={{ display: "inline", verticalAlign: "middle", marginLeft: "4px" }} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Interactive Before / After Digital Smile Simulator ─── */}
      <section id="simulation" className="d02-smile-sim-section">
        <div className="d02-section-container" ref={smileRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="d02-section-title">
              Interactive 3D Smile Design Simulator
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "680px", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Drag the interactive divider to compare the clinical baseline against the CAD/CAM porcelain veneer & alignment result:
            </p>
          </motion.div>

          <motion.div
            className="d02-sim-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {/* Simulation Header Telemetry */}
            <div className="d02-sim-header">
              <div className="d02-sim-case-tag">
                <span className="d02-pulse-cyan" />
                <span>Clinical Study #SC-8420 · Porcelain Veneers & Whitening</span>
              </div>
              <div className="d02-sim-quick-presets">
                <button
                  type="button"
                  onClick={() => setSliderPosition(0)}
                  className={`d02-sim-preset-btn ${sliderPosition === 0 ? "active" : ""}`}
                >
                  Before Only
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className={`d02-sim-preset-btn ${sliderPosition === 50 ? "active" : ""}`}
                >
                  50% Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(100)}
                  className={`d02-sim-preset-btn ${sliderPosition === 100 ? "active" : ""}`}
                >
                  After Only
                </button>
              </div>
            </div>

            {/* Interactive Before/After Visual Frame */}
            <div
              className="d02-slider-container"
              ref={sliderContainerRef}
              onMouseDown={() => setIsDraggingSlider(true)}
              onMouseUp={() => setIsDraggingSlider(false)}
              onMouseLeave={() => setIsDraggingSlider(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full Background) */}
              <div className="d02-slider-img-wrap" style={{ position: "absolute" }}>
                <Image
                  src="/smile-after.jpg"
                  alt="After smile restoration: aligned luminous teeth with porcelain veneers"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div className="d02-slider-badge d02-badge-after">
                  After · Digital Smile Design
                </div>
              </div>

              {/* Before Image (Clipped Foreground) */}
              <div
                className="d02-slider-clipped-wrap"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="d02-slider-clipped-img" style={{ position: "absolute" }}>
                  <Image
                    src="/smile-before.jpg"
                    alt="Before treatment: natural dental baseline with mild misalignment"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <div className="d02-slider-badge d02-badge-before">
                  Before · Baseline
                </div>
              </div>

              {/* Vertical Draggable Divider Line */}
              <div
                className="d02-slider-divider"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="d02-slider-handle">
                  <div className="d02-handle-arrow">◀</div>
                  <div className="d02-handle-arrow">▶</div>
                </div>
              </div>
            </div>

            {/* Simulation Metrics Footer */}
            <div className="d02-sim-footer">
              <div className="d02-sim-metric">
                <span className="d02-sim-metric-val">99.4%</span>
                <span className="d02-sim-metric-lbl">CAD Facial Symmetry</span>
              </div>
              <div className="d02-sim-metric">
                <span className="d02-sim-metric-val">BL1</span>
                <span className="d02-sim-metric-lbl">Natural Vita Shade</span>
              </div>
              <div className="d02-sim-metric">
                <span className="d02-sim-metric-val">0.3 mm</span>
                <span className="d02-sim-metric-lbl">Micro-Prep Thickness</span>
              </div>
              <div className="d02-sim-cta-wrap">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTech("3D Digital Oral Scan & Smile Simulation");
                    setBookingOpen(true);
                  }}
                  className="d02-btn-primary"
                >
                  Simulate My Smile in 3D ↗
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Treatments Ribbon ─── */}
      <section id="treatments" className="d02-treatments-section">
        <div className="d02-section-container" ref={treatRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="d02-treatments-kicker">
              <span className="d02-kicker-dot" />
              <span>ADVANCED PROTOCOLS</span>
            </div>
            <h2 className="d02-section-title">
              Comprehensive Digital Dental Care
            </h2>
            <p className="d02-treatments-sub-title">
              Fully digitized dental procedures using 3D imaging, precision lasers, and AI-assisted CAD/CAM restoration.
            </p>
          </motion.div>
          <div className="d02-treatments-grid">
            {treatments.map((t, i) => (
              <motion.button
                key={t.label}
                type="button"
                onClick={() => {
                  setSelectedTech(t.bookingTech);
                  setSelectedDoctor(null);
                  setBookingOpen(true);
                }}
                className="d02-treatment-chip"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              >
                <div className="d02-treatment-icon-wrap">{t.icon}</div>
                <div className="d02-treatment-text">
                  <span className="d02-treatment-label">{t.label}</span>
                  <span className="d02-treatment-sub">{t.sub}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Conventional vs. Digital Comparison Matrix ─── */}
      <section id="comparison" className="d02-compare-section">
        <div className="d02-section-container" ref={compRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="d02-section-title">
              The Conventional Clinic vs. SmileCraft Digital
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", lineHeight: 1.7, marginBottom: "3rem" }}>
              Why settling for traditional dentistry means more appointments, more pain, and unnecessary guesswork:
            </p>
          </motion.div>

          {/* Desktop / Tablet Table */}
          <motion.div
            className="d02-compare-table-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <table className="d02-compare-table">
              <thead>
                <tr>
                  <th style={{ width: "22%", background: "#0b0f19", color: "#9ca3af" }}>Procedure Phase</th>
                  <th className="d02-th-legacy">
                    <XMarkIcon size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px", opacity: 0.6 }} /> Conventional Dental Clinic
                  </th>
                  <th className="d02-th-smilecraft">
                    <CheckIcon size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> SmileCraft Precision Studio
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature}>
                    <td className="d02-td-feature">{row.feature}</td>
                    <td className="d02-td-legacy">{row.legacy}</td>
                    <td className="d02-td-smilecraft">{row.smilecraft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile Cards View (<640px) */}
          <div className="d02-compare-mobile-cards">
            {comparisonData.map((row) => (
              <div key={row.feature} className="d02-compare-mobile-card">
                <div className="d02-compare-mobile-phase">{row.feature}</div>
                <div className="d02-compare-mobile-row d02-compare-mobile-legacy">
                  <div className="d02-compare-mobile-label">
                    <XMarkIcon size={14} style={{ color: "#EF4444" }} /> Conventional Clinic
                  </div>
                  <div className="d02-compare-mobile-text">{row.legacy}</div>
                </div>
                <div className="d02-compare-mobile-row d02-compare-mobile-smilecraft">
                  <div className="d02-compare-mobile-label">
                    <CheckIcon size={14} style={{ color: "#0284C7" }} /> SmileCraft Digital Studio
                  </div>
                  <div className="d02-compare-mobile-text">{row.smilecraft}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Digital Workflow Timeline ─── */}
      <section id="workflow" className="d02-workflow-section">
        <div className="d02-section-container" ref={workflowRef}>
          <div className={`d02-fade-up ${workflowInView ? "d02-in-view" : ""}`}>
            <div className="d02-workflow-kicker">
              <span className="d02-kicker-dot" />
              <span>DIGITAL EXCELLENCE</span>
            </div>
            <h2 className="d02-section-title">
              Our 4-Stage Digital Patient Journey
            </h2>
          </div>

          <div className="d02-workflow-grid">
            {[
              { num: "01", title: "60-Sec Optical Scan", desc: "High-speed laser sensors create a photorealistic 3D virtual twin of your dental arch in true color." },
              { num: "02", title: "3D AI Diagnosis", desc: "Sub-millimeter analysis of bone thickness, tooth alignment, and bite force distribution on 4K monitors." },
              { num: "03", title: "Robotic & Guided Care", desc: "Microscopic root canals, Biolase® pain-free laser therapy, or computer-guided keyhole implant surgery." },
              { num: "04", title: "Instant Restoration", desc: "In-house 5-axis CEREC® milling of permanent zirconia crowns or delivery of custom Invisalign® aligners." },
            ].map((step, i) => (
              <div
                key={step.num}
                className="d02-workflow-card"
              >
                <div className="flex flex-row items-center justify-between gap-3 w-full">
                  <div className="flex items-center gap-2.5">
                    <span className="d02-workflow-status-dot" />
                    <h3 className="d02-workflow-title">{step.title}</h3>
                  </div>
                  <span className="d02-workflow-num-badge">{step.num}</span>
                </div>
                <p className="d02-workflow-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="d02-testi-section">
        <div className="d02-section-container" ref={testiRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="d02-section-title">
              800+ Verified Patients. Zero Guesswork.
            </h2>
          </motion.div>

          <div className="d02-testi-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="d02-testi-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <StarRating count={t.rating} size={15} />
                <blockquote className="d02-testi-quote">&ldquo;{t.text}&rdquo;</blockquote>
                <div className="d02-testi-footer">
                  <div className="d02-testi-avatar">{t.initials}</div>
                  <div>
                    <div className="d02-testi-name">{t.name}</div>
                    <div className="d02-testi-role">{t.role}</div>
                    <div className="d02-testi-treatment">{t.treatment}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Doctors Section ─── */}
      <section id="specialists" className="d02-doctors-section">
        <div className="d02-section-container" ref={docRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="d02-section-title">
              Digital Dental Surgeons & Specialists
            </h2>
          </motion.div>

          <div className="d02-doctors-grid">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.name}
                className="d02-doc-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              >
                <div className="d02-doc-avatar" style={{ "--avatar-color": doc.color } as React.CSSProperties}>
                  <span>{doc.initials}</span>
                  <div className="d02-doc-avatar-ring" />
                </div>
                <h3 className="d02-doc-name">{doc.name}</h3>
                <div className="d02-doc-badge">{doc.role}</div>
                <div className="d02-doc-deg">{doc.degrees}</div>
                <div className="d02-doc-cert">
                  <CheckIcon size={15} color="#0284C7" />
                  <span>{doc.cert}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openDoctorBooking(doc)}
                  className="d02-doc-book-btn"
                >
                  Book with {doc.name.split(" ")[1]} <ArrowUpRightIcon size={12} style={{ display: "inline", verticalAlign: "middle" }} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section id="book" className="d02-cta-section" ref={ctaRef}>
        <div className="d02-cta-inner">
          <motion.div
            className="d02-cta-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="d02-cta-h2">
              Experience Dental Care Powered by Technology.
            </h2>
            <div className="d02-cta-offer-badge">
              <TargetIcon size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> First 3D Oral Scan Consultation — ₹500 Only
            </div>
            <p className="d02-cta-sub">
              Get a complete digital diagnostic: 3D oral scan, AI bite analysis, and a personalised treatment plan — in one 45-minute appointment.
            </p>
          </motion.div>

          <motion.div
            className="d02-cta-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="d02-cta-address-card">
              <div className="d02-cta-address-title">
                <LocationPinIcon size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> Find Us
              </div>
              <div className="d02-cta-address-line">Road No. 12, Banjara Hills</div>
              <div className="d02-cta-address-line">Hyderabad — 500 034, Telangana</div>
              <div className="d02-cta-address-hours">Mon–Sat: 9:00 AM – 8:00 PM</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <button
                type="button"
                onClick={() => {
                  setSelectedDoctor(null);
                  setBookingOpen(true);
                }}
                className="d02-btn-primary"
                style={{ padding: "1.1rem 2.5rem", background: "#0b0f19", color: "#fff" }}
              >
                Book 3D Oral Scan Online
              </button>
              <a
                href="https://wa.me/919876543210?text=Hi%20SmileCraft,%20I%20would%20like%20to%20book%20a%203D%20Digital%20Dental%20Scan"
                target="_blank"
                rel="noopener noreferrer"
                className="d02-btn-whatsapp"
                style={{ textAlign: "center", padding: "1.1rem 2.5rem" }}
              >
                <WhatsAppIcon size={18} style={{ display: "inline", verticalAlign: "middle", marginRight: "8px" }} /> WhatsApp +91 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />


      {/* ─── Interactive Diagnostic Booking Drawer Modal ─── */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={resetBooking}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
        selectedDoctor={selectedDoctor}
      />
    </div>
  );
}
