"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
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
  StarRating,
} from "@/icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Lazy-load BookingModal off the critical path for instant TBT
const BookingModal = dynamic(() => import("@/components/BookingModal"), {
  ssr: false,
});

/* ─── Data ─── */
const technologies = [
  {
    id: "scanner",
    name: "3D Intraoral Optical Scanner",
    badge: "Planmeca® Emerald S",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
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
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
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
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
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
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
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
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
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
    <div className={styles.container}>
      <Header onBookClick={() => setBookingOpen(true)} />

      {/* ─── Hero Section ─── */}
      <section className={styles.hero} aria-label="Digital Dental Technology Hero">
        <div className={styles.heroBg}>
          <Image
            src="/dental-scanner-3d.jpg"
            alt="Doctor performing 3D intraoral digital optical scan at SmileCraft Dental Studio Banjara Hills"
            fill
            priority
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} ${styles.animFadeInUp}`}>
            Digital Precision.
            <br />
            <span className={styles.heroTitleCyan}>Measurable</span>
            <br />
            Outcomes.
          </h1>

          <p className={`${styles.heroLead} ${styles.animFadeInUp} ${styles.animDelay1}`}>
            Rejecting obsolete guesswork and messy impression trays. Experience sub-micron 3D oral scanning,
            same-day CAD/CAM ceramic crowns, and computer-guided keyhole implant surgery in Banjara Hills.
          </p>

          <div className={`${styles.heroActions} ${styles.animFadeInUp} ${styles.animDelay2}`}>
            <button type="button" onClick={() => setBookingOpen(true)} className={styles.btnPrimary}>
              Book 3D Optical Scan
            </button>
            <a href="tel:+914023456789" className={styles.btnSecondary}>
              <PhoneIcon size={14} style={{ marginRight: "6px", verticalAlign: "middle" }} />
              Clinical Desk: +91 40 2345 6789
            </a>
          </div>
        </div>

        {/* Telemetry HUD Data Strip (Centered) */}
        <div className={styles.telemetryStrip} ref={telemetryRef}>
          <div className={styles.telemetryInner}>
            {[
              { num: "01", val: "< 20 µm", lbl: "3D Optical Scan Accuracy" },
              { num: "02", val: "60 Mins", lbl: "Same-Day CEREC® Crowns" },
              { num: "03", val: "90% Less", lbl: "Low-Dose CBCT Radiation" },
              { num: "04", val: "4.9 / 5.0 ★", lbl: "800+ Patient Reviews" },
            ].map((item, i) => (
              <div key={i} className={styles.telemetryItem}>
                <div className={styles.telemetryNum}>{item.num}</div>
                <div className={styles.telemetryData}>
                  <span className={styles.telemetryVal}>{telemetryInView ? item.val : "—"}</span>
                  <span className={styles.telemetryLbl}>{item.lbl}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Certification Badge Strip ─── */}
      <div className={styles.certStrip}>
        <div className={styles.certInner}>
          {certBadges.map((b) => (
            <div key={b.label} className={styles.certBadge}>
              <span className={styles.badgeIcon}>{b.icon}</span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Interactive Technology Showcase Section ─── */}
      <section id="technology" className={styles.techSection}>
        <div className={styles.sectionContainer}>
          <div>
            <h2 className={styles.sectionTitle}>
              Engineered for Precision. Built for Comfort.
            </h2>
          </div>

          {/* Tab buttons */}
          <div className={styles.techTabsNav}>
            {technologies.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTechIndex(idx)}
                className={`${styles.techTabBtn} ${activeTechIndex === idx ? styles.techTabBtnActive : ""}`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active tech card */}
          <div className={styles.techCardActive}>
            <div className={styles.techHeader}>
              <div className={styles.techHeaderLeft}>
                <div className={styles.techIconWrap}>{activeTech.icon}</div>
                <div>
                  <h3 className={styles.techH3}>{activeTech.name}</h3>
                </div>
              </div>
              <span className={styles.techBadge}>{activeTech.badge}</span>
            </div>

            <div className={styles.techBody}>
              <p className={styles.techP}>{activeTech.desc}</p>
              <div className={styles.benefitBox}>
                <span className={styles.benefitTitle}>PATIENT ADVANTAGE</span>
                <span className={styles.benefitDesc}>{activeTech.patientBenefit}</span>
              </div>
            </div>

            <div className={styles.techSpecsBar}>
              <div className={styles.techSpecsItems}>
                {activeTech.specs.map((spec) => (
                  <div key={spec.k} className={styles.techSpecCol}>
                    <span className={styles.specK}>{spec.k}</span>
                    <span className={styles.specV}>{spec.v}</span>
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
                className={styles.btnPrimary}
              >
                Book Diagnostic Scan <ArrowUpRightIcon size={14} style={{ display: "inline", verticalAlign: "middle", marginLeft: "4px" }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Interactive Before / After Digital Smile Simulator ─── */}
      <section id="simulation" className={styles.smileSimSection}>
        <div className={styles.sectionContainer}>
          <div>
            <h2 className={styles.sectionTitle}>
              Interactive 3D Smile Design Simulator
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "680px", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Drag the interactive divider to compare the clinical baseline against the CAD/CAM porcelain veneer & alignment result:
            </p>
          </div>

          <div className={styles.simCard}>
            {/* Simulation Header Telemetry */}
            <div className={styles.simHeader}>
              <div className={styles.simCaseTag}>
                <span className={styles.pulseCyan} />
                <span>Clinical Study #SC-8420 · Porcelain Veneers & Whitening</span>
              </div>
              <div className={styles.simQuickPresets}>
                <button
                  type="button"
                  onClick={() => setSliderPosition(0)}
                  className={`${styles.simPresetBtn} ${sliderPosition === 0 ? styles.simPresetBtnActive : ""}`}
                >
                  Before Only
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(50)}
                  className={`${styles.simPresetBtn} ${sliderPosition === 50 ? styles.simPresetBtnActive : ""}`}
                >
                  50% Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPosition(100)}
                  className={`${styles.simPresetBtn} ${sliderPosition === 100 ? styles.simPresetBtnActive : ""}`}
                >
                  After Only
                </button>
              </div>
            </div>

            {/* Interactive Before/After Visual Frame */}
            <div
              className={styles.sliderContainer}
              ref={sliderContainerRef}
              onMouseDown={() => setIsDraggingSlider(true)}
              onMouseUp={() => setIsDraggingSlider(false)}
              onMouseLeave={() => setIsDraggingSlider(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Full Background) */}
              <div className={styles.sliderImgWrap} style={{ position: "absolute" }}>
                <Image
                  src="/smile-after.jpg"
                  alt="After smile restoration: aligned luminous teeth with porcelain veneers"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles.sliderBadge} ${styles.badgeAfter}`}>
                  After · Digital Smile Design
                </div>
              </div>

              {/* Before Image (Clipped Foreground) */}
              <div
                className={styles.sliderClippedWrap}
                style={{ width: `${sliderPosition}%` }}
              >
                <div className={styles.sliderClippedImg} style={{ position: "absolute" }}>
                  <Image
                    src="/smile-before.jpg"
                    alt="Before treatment: natural dental baseline with mild misalignment"
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={`${styles.sliderBadge} ${styles.badgeBefore}`}>
                  Before · Baseline
                </div>
              </div>

              {/* Vertical Draggable Divider Line */}
              <div
                className={styles.sliderDivider}
                style={{ left: `${sliderPosition}%` }}
              >
                <div className={styles.sliderHandle}>
                  <div className={styles.handleArrow}>◀</div>
                  <div className={styles.handleArrow}>▶</div>
                </div>
              </div>
            </div>

            {/* Simulation Metrics Footer */}
            <div className={styles.simFooter}>
              <div className={styles.simMetric}>
                <span className={styles.simMetricVal}>99.4%</span>
                <span className={styles.simMetricLbl}>CAD Facial Symmetry</span>
              </div>
              <div className={styles.simMetric}>
                <span className={styles.simMetricVal}>BL1</span>
                <span className={styles.simMetricLbl}>Natural Vita Shade</span>
              </div>
              <div className={styles.simMetric}>
                <span className={styles.simMetricVal}>0.3 mm</span>
                <span className={styles.simMetricLbl}>Micro-Prep Thickness</span>
              </div>
              <div className={styles.simCtaWrap}>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedTech("3D Digital Oral Scan & Smile Simulation");
                    setBookingOpen(true);
                  }}
                  className={styles.btnPrimary}
                >
                  Simulate My Smile in 3D ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Treatments Ribbon ─── */}
      <section id="treatments" className={styles.treatmentsSection}>
        <div className={styles.sectionContainer}>
          <div>
            <div className={styles.treatmentsKicker}>
              <span className={styles.kickerDot} />
              <span>ADVANCED PROTOCOLS</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Comprehensive Digital Dental Care
            </h2>
            <p className={styles.treatmentsSubTitle}>
              Fully digitized dental procedures using 3D imaging, precision lasers, and AI-assisted CAD/CAM restoration.
            </p>
          </div>
          <div className={styles.treatmentsGrid}>
            {treatments.map((t) => (
              <button
                key={t.label}
                type="button"
                onClick={() => {
                  setSelectedTech(t.bookingTech);
                  setSelectedDoctor(null);
                  setBookingOpen(true);
                }}
                className={styles.treatmentChip}
              >
                <div className={styles.treatmentIconWrap}>{t.icon}</div>
                <div className={styles.treatmentText}>
                  <span className={styles.treatmentLabel}>{t.label}</span>
                  <span className={styles.treatmentSub}>{t.sub}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Conventional vs. Digital Comparison Matrix ─── */}
      <section id="comparison" className={styles.compareSection}>
        <div className={styles.sectionContainer}>
          <div>
            <h2 className={styles.sectionTitle}>
              The Conventional Clinic vs. SmileCraft Digital
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", lineHeight: 1.7, marginBottom: "3rem" }}>
              Why settling for traditional dentistry means more appointments, more pain, and unnecessary guesswork:
            </p>
          </div>

          {/* Desktop / Tablet Table */}
          <div className={styles.compareTableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th style={{ width: "22%", background: "#0b0f19", color: "#9ca3af" }}>Procedure Phase</th>
                  <th className={styles.thLegacy}>
                    <XMarkIcon size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px", opacity: 0.6 }} /> Conventional Dental Clinic
                  </th>
                  <th className={styles.thSmilecraft}>
                    <CheckIcon size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> SmileCraft Precision Studio
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.feature}>
                    <td className={styles.tdFeature}>{row.feature}</td>
                    <td className={styles.tdLegacy}>{row.legacy}</td>
                    <td className={styles.tdSmilecraft}>{row.smilecraft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View (<640px) */}
          <div className={styles.compareMobileCards}>
            {comparisonData.map((row) => (
              <div key={row.feature} className="bg-[#111827] border border-[rgba(255,255,255,0.08)] rounded-lg p-5 flex flex-col gap-3">
                <div className="font-bold text-white border-b border-[rgba(255,255,255,0.08)] pb-2">{row.feature}</div>
                <div className="bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.2)] rounded-md p-3 flex flex-col gap-1">
                  <div className="text-xs font-bold flex items-center gap-1.5 text-slate-200">
                    <XMarkIcon size={14} style={{ color: "#EF4444" }} /> Conventional Clinic
                  </div>
                  <div className="text-sm leading-relaxed text-slate-300">{row.legacy}</div>
                </div>
                <div className="bg-[rgba(2,132,199,0.08)] border border-[rgba(2,132,199,0.25)] rounded-md p-3 flex flex-col gap-1">
                  <div className="text-xs font-bold flex items-center gap-1.5 text-slate-200">
                    <CheckIcon size={14} style={{ color: "#0284C7" }} /> SmileCraft Digital Studio
                  </div>
                  <div className="text-sm leading-relaxed text-slate-300">{row.smilecraft}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Digital Workflow Timeline ─── */}
      <section id="workflow" className={styles.workflowSection}>
        <div className={styles.sectionContainer}>
          <div>
            <div className={styles.workflowKicker}>
              <span className={styles.kickerDot} />
              <span>DIGITAL EXCELLENCE</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Our 4-Stage Digital Patient Journey
            </h2>
          </div>

          <div className={styles.workflowGrid}>
            {[
              { num: "01", title: "60-Sec Optical Scan", desc: "High-speed laser sensors create a photorealistic 3D virtual twin of your dental arch in true color." },
              { num: "02", title: "3D AI Diagnosis", desc: "Sub-millimeter analysis of bone thickness, tooth alignment, and bite force distribution on 4K monitors." },
              { num: "03", title: "Robotic & Guided Care", desc: "Microscopic root canals, Biolase® pain-free laser therapy, or computer-guided keyhole implant surgery." },
              { num: "04", title: "Instant Restoration", desc: "In-house 5-axis CEREC® milling of permanent zirconia crowns or delivery of custom Invisalign® aligners." },
            ].map((step) => (
              <div
                key={step.num}
                className={styles.workflowCard}
              >
                <div className="flex flex-row items-center justify-between gap-3 w-full">
                  <div className="flex items-center gap-2.5">
                    <span className={styles.workflowStatusDot} />
                    <h3 className={styles.workflowTitle}>{step.title}</h3>
                  </div>
                  <span className={styles.workflowNumBadge}>{step.num}</span>
                </div>
                <p className={styles.workflowDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className={styles.testiSection}>
        <div className={styles.sectionContainer}>
          <div>
            <h2 className={styles.sectionTitle}>
              800+ Verified Patients. Zero Guesswork.
            </h2>
          </div>

          <div className={styles.testiGrid}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                className={styles.testiCard}
              >
                <StarRating count={t.rating} size={15} />
                <blockquote className={styles.testiQuote}>&ldquo;{t.text}&rdquo;</blockquote>
                <div className={styles.testiFooter}>
                  <div className={styles.testiAvatar}>{t.initials}</div>
                  <div>
                    <div className={styles.testiName}>{t.name}</div>
                    <div className={styles.testiRole}>{t.role}</div>
                    <div className={styles.testiTreatment}>{t.treatment}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Doctors Section ─── */}
      <section id="specialists" className={styles.doctorsSection}>
        <div className={styles.sectionContainer}>
          <div>
            <h2 className={styles.sectionTitle}>
              Digital Dental Surgeons & Specialists
            </h2>
          </div>

          <div className={styles.doctorsGrid}>
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className={styles.docCard}
              >
                <div className={styles.docAvatar} style={{ "--avatar-color": doc.color } as React.CSSProperties}>
                  <span>{doc.initials}</span>
                </div>
                <h3 className={styles.docName}>{doc.name}</h3>
                <div className={styles.docBadge}>{doc.role}</div>
                <div className={styles.docDeg}>{doc.degrees}</div>
                <div className={styles.docCert}>
                  <CheckIcon size={15} color="#0284C7" />
                  <span>{doc.cert}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openDoctorBooking(doc)}
                  className={styles.docBookBtn}
                >
                  Book with {doc.name.split(" ")[1]} <ArrowUpRightIcon size={12} style={{ display: "inline", verticalAlign: "middle" }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section id="book" className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaH2}>
              Experience Dental Care Powered by Technology.
            </h2>
            <div className={styles.ctaOfferBadge}>
              <TargetIcon size={15} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> First 3D Oral Scan Consultation — ₹500 Only
            </div>
            <p className={styles.ctaSub}>
              Get a complete digital diagnostic: 3D oral scan, AI bite analysis, and a personalised treatment plan — in one 45-minute appointment.
            </p>
          </div>

          <div className={styles.ctaRight}>
            <div className={styles.ctaAddressCard}>
              <div className={styles.ctaAddressTitle}>
                <LocationPinIcon size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> Find Us
              </div>
              <div className={styles.ctaAddressLine}>Road No. 12, Banjara Hills</div>
              <div className={styles.ctaAddressLine}>Hyderabad — 500 034, Telangana</div>
              <div className={styles.ctaAddressHours}>Mon–Sat: 9:00 AM – 8:00 PM</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <button
                type="button"
                onClick={() => {
                  setSelectedDoctor(null);
                  setBookingOpen(true);
                }}
                className={styles.btnPrimary}
                style={{ padding: "1.1rem 2.5rem", background: "#0b0f19", color: "#fff" }}
              >
                Book 3D Oral Scan Online
              </button>
              <a
                href="https://wa.me/919876543210?text=Hi%20SmileCraft,%20I%20would%20like%20to%20book%20a%203D%20Digital%20Dental%20Scan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnWhatsapp}
                style={{ textAlign: "center", padding: "1.1rem 2.5rem" }}
              >
                <WhatsAppIcon size={18} style={{ display: "inline", verticalAlign: "middle", marginRight: "8px" }} /> WhatsApp +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ─── Interactive Diagnostic Booking Drawer Modal (Deferred / Code Split) ─── */}
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
