import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  XMarkIcon,
  ArrowUpRightIcon,
  TargetIcon,
  LocationPinIcon,
  StarRating,
} from "@/icons";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingModalPortal from "@/components/BookingModalPortal";
import TechShowcaseIsland from "@/components/TechShowcaseIsland";
import SmileSimulatorIsland from "@/components/SmileSimulatorIsland";
import ScrollNavButton from "@/components/ScrollNavButton";

const TechShowcase = dynamic(() => import("@/components/TechShowcase"), {
  ssr: true,
});

const SmileSimulator = dynamic(() => import("@/components/SmileSimulator"), {
  ssr: true,
});

const ComparisonTable = dynamic(() => import("@/components/ComparisonTable"), {
  ssr: true,
});

/* ─── Static Data (Zero Client Hydration Overhead) ─── */
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
  { label: "Dental Implants", sub: "3D CBCT Guided", bookingTech: "3D CBCT Guided Implant Consultation" },
  { label: "Smile Design", sub: "Digital DSD Protocol", bookingTech: "3D Digital Oral Scan & Smile Simulation" },
  { label: "Invisalign®", sub: "Diamond Provider", bookingTech: "Invisalign 3D Outcome Preview" },
  { label: "Same-Day Crowns", sub: "CEREC® In-House", bookingTech: "Same-Day CEREC CAD/CAM Crown Assessment" },
  { label: "Microscopic RCT", sub: "Zeiss 20× Optics", bookingTech: "Microscopic Root Canal Therapy" },
  { label: "Laser Therapy", sub: "Biolase® Waterlase", bookingTech: "Biolase Pain-Free Laser Therapy" },
  { label: "Gum Care", sub: "Flapless Laser", bookingTech: "Biolase Pain-Free Laser Therapy" },
  { label: "Paediatric Care", sub: "Anxiety-Free Protocol", bookingTech: "3D Digital Oral Scan & Smile Simulation" },
];

const doctors = [
  {
    name: "Dr. Priya Sharma",
    initials: "PS",
    image: "/doctors/dr-priya-sharma.jpg",
    role: "Lead Implantologist & Prosthodontist",
    degrees: "BDS, MDS (Prosthodontics) · 14 Yrs Practice",
    cert: "Certified Digital Implantologist (ICOI Fellow, USA)",
    defaultTreatment: "3D CBCT Guided Implant Consultation",
    color: "#0EA5E9",
  },
  {
    name: "Dr. Arjun Mehta",
    initials: "AM",
    image: "/doctors/dr-arjun-mehta.jpg",
    role: "Digital Orthodontics Specialist",
    degrees: "BDS, MDS (Orthodontics) · 10 Yrs Practice",
    cert: "Invisalign® Diamond Certified Provider & 3D Aligner Specialist",
    defaultTreatment: "Invisalign 3D Outcome Preview",
    color: "#06B6D4",
  },
  {
    name: "Dr. Kavya Reddy",
    initials: "KR",
    image: "/doctors/dr-kavya-reddy.jpg",
    role: "Micro-Endodontics & Restorative Specialist",
    degrees: "BDS, MDS (Endodontics) · 8 Yrs Practice",
    cert: "Microscopic Endodontics Specialist (Zeiss 20x Optics)",
    defaultTreatment: "Same-Day CEREC CAD/CAM Crown Assessment",
    color: "#0284C7",
  },
];

const testimonials = [
  {
    name: "Rohit Agarwal",
    initials: "RA",
    avatarImage: "/patients/rohit-agarwal.jpg",
    role: "Business Executive, Jubilee Hills",
    rating: 5,
    text: "The 3D scan was genuinely futuristic — no gagging, no impression trays. My crown was ready the same day. I couldn't believe it was dentistry.",
    treatment: "Same-Day CEREC Crown",
  },
  {
    name: "Sneha Pillai",
    initials: "SP",
    avatarImage: "/patients/sneha-pillai.jpg",
    role: "Surgeon, Apollo Hospital",
    rating: 5,
    text: "As a doctor myself, I was skeptical. The CBCT imaging and surgical guide precision for my implant was exceptional. Zero pain, zero swelling. Reference-standard work.",
    treatment: "3D Guided Dental Implant",
  },
  {
    name: "Vikram Narayan",
    initials: "VN",
    avatarImage: "/patients/vikram-narayan.jpg",
    role: "Tech Founder, Hitech City",
    rating: 5,
    text: "Got the Invisalign 3D outcome preview before committing — saw exactly what my smile would look like after 8 months. The tech sold itself. 10/10 experience.",
    treatment: "Invisalign® Diamond Plan",
  },
];

const certBadges = [
  {
    id: "ida",
    label: "IDA Member",
    accent: "blue",
    icon: "tooth",
  },
  {
    id: "icoi",
    label: "ICOI Fellow",
    accent: "gold",
    icon: "caduceus",
  },
  {
    id: "iso",
    label: "ISO 9001:2015",
    accent: "emerald",
    icon: "quality",
  },
  {
    id: "planmeca",
    label: "Planmeca 3D Studio",
    accent: "cyan",
    icon: "scanner",
  },
  {
    id: "invisalign",
    label: "Invisalign Diamond",
    accent: "sky",
    icon: "aligner",
  },
  {
    id: "bis",
    label: "BIS Class-B",
    accent: "rose",
    icon: "sterile",
  },
];

/* ─── Server-Rendered Landing Page (Zero JS Hydration Overhead) ─── */
export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />

      {/* ─── Hero Section Component ─── */}
      <HeroSection />

      {/* ─── Certification Badge Strip (Exact 1:1 Match to Concept 6) ─── */}
      <div className={styles.certStrip}>
        <div className={styles.certInner}>

          {/* 6 Vertical Accreditations Columns with Hairline Dividers */}
          <div className={styles.certGrid}>
            {/* 1. IDA Member */}
            <div className={styles.certBadge}>
              <div className={styles.iconContainer}>
                <span className={`${styles.accentCircle} ${styles.accentBlue}`} />
                <svg width="46" height="46" viewBox="0 0 48 48" fill="none" className={styles.iconSvg}>
                  <path
                    d="M16 9C11 9 8 13.5 8 20.5C8 28 12 34 16 39L19.5 43.5C20.5 44.8 22.5 45 23.5 43.8L24 43.2L24.5 43.8C25.5 45 27.5 44.8 28.5 43.5L32 39C36 34 40 28 40 20.5C40 13.5 37 9 32 9C28.5 9 26 11.5 24 11.5C22 11.5 19.5 9 16 9Z"
                    stroke="#1E293B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M18 16C21 18 27 18 30 16" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className={styles.certMainLabel}>IDA Member</span>
            </div>

            {/* 2. ICOI Fellow */}
            <div className={styles.certBadge}>
              <div className={styles.iconContainer}>
                <span className={`${styles.accentCircle} ${styles.accentGold}`} />
                <svg width="46" height="46" viewBox="0 0 48 48" fill="none" className={styles.iconSvg}>
                  <line x1="24" y1="8" x2="24" y2="43" stroke="#1E293B" strokeWidth="2.8" strokeLinecap="round" />
                  <circle cx="24" cy="7" r="2.8" fill="#1E293B" />
                  <path d="M24 13C17 11 11 15 9 19C14 18 19 19 24 21" stroke="#1E293B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 13C31 11 37 15 39 19C34 18 29 19 24 21" stroke="#1E293B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 23C13 26 16 31 24 31C32 31 35 26 32 23C29 20 19 20 16 23Z" stroke="#1E293B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 35C15 37 17 41 24 41C31 41 33 37 30 35" stroke="#1E293B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className={styles.certMainLabel}>ICOI Fellow</span>
            </div>

            {/* 3. ISO 9001:2015 */}
            <div className={styles.certBadge}>
              <div className={styles.iconContainer}>
                <span className={`${styles.accentCircle} ${styles.accentGreen}`} />
                <svg width="46" height="46" viewBox="0 0 48 48" fill="none" className={styles.iconSvg}>
                  <path
                    d="M24 6L27.2 8.3L31.1 7.7L33.3 11L37.2 11.8L38 15.7L41.1 18.1L40.4 22L42.2 25.5L40 28.7L40.4 32.7L37 34.6L35.8 38.4L32 38.9L29.5 41.9L26 40.8L24 43L22 40.8L18.5 41.9L16 38.9L12.2 38.4L11 34.6L7.6 32.7L8 28.7L5.8 25.5L7.6 22L6.9 18.1L10 15.7L10.8 11.8L14.7 11L16.9 7.7L20.8 8.3L24 6Z"
                    stroke="#1E293B"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline points="19 24 22.5 27.5 29 20.5" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 38L14 44L20 41.5L24 44" stroke="#1E293B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M31 38L34 44L28 41.5L24 44" stroke="#1E293B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className={styles.certMainLabel}>ISO 9001:2015</span>
            </div>

            {/* 4. Planmeca 3D Studio */}
            <div className={styles.certBadge}>
              <div className={styles.iconContainer}>
                <span className={`${styles.accentCircle} ${styles.accentCyan}`} />
                <svg width="46" height="46" viewBox="0 0 48 48" fill="none" className={styles.iconSvg}>
                  <path d="M13 41H35" stroke="#1E293B" strokeWidth="2.8" strokeLinecap="round" />
                  <path d="M13 41V12C13 9.8 14.8 8 17 8H31C33.2 8 35 9.8 35 12V41" stroke="#1E293B" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 16H30V26C30 29.3 27.3 32 24 32C20.7 32 18 29.3 18 26V16Z" stroke="#1E293B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="21" y="22" width="6" height="12" rx="1.5" stroke="#1E293B" strokeWidth="2.4" />
                  <line x1="24" y1="34" x2="24" y2="41" stroke="#1E293B" strokeWidth="2.8" />
                </svg>
              </div>
              <span className={styles.certMainLabel}>Planmeca 3D Studio</span>
            </div>

            {/* 5. Invisalign Diamond */}
            <div className={styles.certBadge}>
              <div className={styles.iconContainer}>
                <span className={`${styles.accentCircle} ${styles.accentSky}`} />
                <svg width="46" height="46" viewBox="0 0 48 48" fill="none" className={styles.iconSvg}>
                  <path
                    d="M10 24C10 19 13 14 18 12C20.5 15 23.5 15 24 15C24.5 15 27.5 15 30 12C35 14 38 19 38 24C38 31 34 37 29 40C27 36 21 36 19 40C14 37 10 31 10 24Z"
                    stroke="#1E293B"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14 22C16 26 20 28 24 28C28 28 32 26 34 22" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
                  <path d="M37 6L38.2 9.8L42 11L38.2 12.2L37 16L35.8 12.2L32 11L35.8 9.8L37 6Z" fill="#1E293B" />
                </svg>
              </div>
              <span className={styles.certMainLabel}>Invisalign Diamond</span>
            </div>

            {/* 6. BIS Class-B */}
            <div className={styles.certBadge}>
              <div className={styles.iconContainer}>
                <span className={`${styles.accentCircle} ${styles.accentRose}`} />
                <svg width="46" height="46" viewBox="0 0 48 48" fill="none" className={styles.iconSvg}>
                  <circle cx="24" cy="24" r="16.5" stroke="#1E293B" strokeWidth="2.8" />
                  <path
                    d="M21.5 14H26.5V21.5H34V26.5H26.5V34H21.5V26.5H14V21.5H21.5V14Z"
                    fill="#1E293B"
                    stroke="#1E293B"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className={styles.certMainLabel}>BIS Class-B</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Interactive Technology Showcase Section ─── */}
      <section id="technology" className={styles.techSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.kickerBadge}><span>3D DENTAL INNOVATION</span></div>
            <h2 className={styles.sectionTitle}>
              Engineered for Precision. Built for Comfort.
            </h2>
          </div>
          <TechShowcaseIsland />
        </div>
      </section>

      {/* ─── Interactive Before / After Digital Smile Simulator ─── */}
      <section id="simulation" className={styles.smileSimSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.kickerBadge}><span>DIGITAL SMILE PREVIEW</span></div>
            <h2 className={styles.sectionTitle}>
              Interactive 3D Smile Design Simulator
            </h2>
            <p className={styles.sectionSubText}>
              Drag the interactive divider to compare the clinical baseline against the CAD/CAM porcelain veneer &amp; alignment result:
            </p>
          </div>
          <SmileSimulatorIsland />
        </div>
      </section>

      {/* ─── Treatments Ribbon ─── */}
      <section id="treatments" className={styles.treatmentsSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.treatmentsKicker}>
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
                data-book-tech={t.bookingTech}
                className={styles.treatmentChip}
              >
                <div className={styles.treatmentText}>
                  <span className={styles.treatmentLabel}>{t.label}</span>
                  <span className={styles.treatmentSub}>{t.sub}</span>
                </div>
                <div className={styles.treatmentArrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Conventional vs. Digital Comparison Matrix ─── */}
      <section id="comparison" className={styles.compareSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.kickerBadge}><span>THE DIGITAL DIFFERENCE</span></div>
            <h2 className={styles.sectionTitle}>
              The Conventional Clinic vs. SmileCraft Digital
            </h2>
            <p className={styles.sectionSubText}>
              Why settling for traditional dentistry means more appointments, more pain, and unnecessary guesswork:
            </p>
          </div>

          {/* Comparison Table with Mobile Scroll Banner & Gradient Edge Peeks */}
          <ComparisonTable data={comparisonData} />
        </div>
      </section>

      {/* ─── 4-Step Digital Workflow Timeline ─── */}
      <section id="workflow" className={styles.workflowSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.workflowKicker}>
              <span>DIGITAL EXCELLENCE</span>
            </div>
            <h2 className={styles.sectionTitle}>
              Our 4-Stage Digital Patient Journey
            </h2>
          </div>

          <div className={styles.workflowGrid}>
            {[
              {
                num: "01",
                title: "60-Sec Optical Scan",
                desc: "High-speed laser sensors create a photorealistic 3D virtual twin of your dental arch in true color.",
                image: "/tech/intraoral-scanner.jpg",
              },
              {
                num: "02",
                title: "3D AI Diagnosis",
                desc: "Sub-millimeter analysis of bone thickness, tooth alignment, and bite force distribution on 4K monitors.",
                image: "/tech/cbct-3d-xray.jpg",
              },
              {
                num: "03",
                title: "Robotic & Guided Care",
                desc: "Microscopic root canals, Biolase® pain-free laser therapy, or computer-guided keyhole implant surgery.",
                image: "/treatments/micro-rct.jpg",
              },
              {
                num: "04",
                title: "Instant Restoration",
                desc: "In-house 5-axis CEREC® milling of permanent zirconia crowns or delivery of custom Invisalign® aligners.",
                image: "/tech/cerec-milling.jpg",
              },
            ].map((step) => (
              <div
                key={step.num}
                className={styles.workflowCard}
              >
                <div className={styles.workflowImageWrap}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={480}
                    height={300}
                    className={styles.workflowImage}
                  />
                </div>
                <div className={styles.workflowContent}>
                  <div className="flex flex-row items-center justify-between gap-2 w-full">
                    <h3 className={styles.workflowTitle}>{step.title}</h3>
                    <span className={styles.workflowNumBadge}>{step.num}</span>
                  </div>
                  <p className={styles.workflowDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className={styles.testiSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <div className={styles.kickerBadge}><span>PATIENT OUTCOMES</span></div>
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
                  <div className={styles.testiAvatar}>
                    {t.avatarImage ? (
                      <Image
                        src={t.avatarImage}
                        alt={t.name}
                        width={44}
                        height={44}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    ) : (
                      t.initials
                    )}
                  </div>
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
          <div className={styles.sectionHeader}>
            <div className={styles.kickerBadge}><span>CLINICAL SURGEONS</span></div>
            <h2 className={styles.sectionTitle}>
              Digital Dental Surgeons &amp; Specialists
            </h2>
          </div>

          <div className={styles.doctorsGrid}>
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className={styles.docCard}
              >
                <div className={styles.docHeaderRow}>
                  <div className={styles.docAvatar} style={{ "--avatar-color": doc.color } as React.CSSProperties}>
                    {doc.image ? (
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        width={60}
                        height={60}
                        style={{ borderRadius: "50%", objectFit: "cover" }}
                      />
                    ) : (
                      <span>{doc.initials}</span>
                    )}
                  </div>
                  <div className={styles.docDetails}>
                    <h3 className={styles.docName}>{doc.name}</h3>
                    <div className={styles.docBadge}>{doc.role}</div>
                    <div className={styles.docDeg}>{doc.degrees}</div>
                  </div>
                </div>
                <div className={styles.docCert}>
                  <CheckIcon size={15} color="#0284C7" />
                  <span>{doc.cert}</span>
                </div>
                <button
                  type="button"
                  data-book-tech={doc.defaultTreatment}
                  data-book-doc={doc.name}
                  className={styles.docBookBtn}
                >
                  Book with {doc.name.split(" ")[1]} <ArrowUpRightIcon size={12} style={{ display: "inline", verticalAlign: "middle" }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA & Studio Location Section ─── */}
      <section id="book" className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaOfferBadge}>
              <TargetIcon size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} /> First 3D Oral Scan Consultation — ₹500 Only
            </div>
            <h2 className={styles.ctaH2}>
              Experience Dental Care Powered by Technology.
            </h2>
            <p className={styles.ctaSub}>
              Get a complete digital diagnostic: 3D oral scan, AI bite analysis, and a personalised treatment plan in one 45 minute appointment.
            </p>

            <div className={styles.ctaActions}>
              <button
                type="button"
                data-book-trigger="true"
                className={styles.ctaBtnPrimary}
              >
                Book 3D Oral Scan Online
              </button>
              <a
                href="https://wa.me/919876543210?text=Hi%20SmileCraft,%20I%20would%20like%20to%20book%20a%203D%20Digital%20Dental%20Scan"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtnWhatsapp}
              >
                <WhatsAppIcon size={18} style={{ display: "inline", verticalAlign: "middle", marginRight: "8px" }} /> WhatsApp Booking
              </a>
            </div>

            <div className={styles.ctaStudioMeta}>
              <div className={styles.ctaMetaRow}>
                <LocationPinIcon size={16} className={styles.ctaMetaIcon} />
                <span>Road No. 12, Banjara Hills, Hyderabad 500034</span>
              </div>
              <div className={styles.ctaMetaRow}>
                <span>Mon–Sat: 9:00 AM – 8:00 PM · Sunday by Appointment</span>
              </div>
            </div>
          </div>

          <div className={styles.ctaRight}>
            <div className={styles.studioMapCard}>
              <div className={styles.mapCardHeader}>
                <div className={styles.mapCardHeaderLeft}>
                  <span className={styles.mapStudioTitle}>SmileCraft Banjara Hills</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Road+No.+12,+Banjara+Hills,+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapExternalLink}
                >
                  Open in Maps ↗
                </a>
              </div>

              <div className={styles.mapFrameWrapper}>
                <iframe
                  src="https://maps.google.com/maps?q=Banjara%20Hills%20Road%20No.%2012,%20Hyderabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className={styles.studioMapIframe}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SmileCraft Dental Clinic Banjara Hills Map"
                />
              </div>

              <div className={styles.mapCardFooter}>
                <span className={styles.mapFeaturePill}>Valet Parking</span>
                <span className={styles.mapFeaturePill}>Lift Access</span>
                <span className={styles.mapFeaturePill}>Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Zero-overhead Event-Driven Booking Portal */}
      <BookingModalPortal />
      <ScrollNavButton />
    </div>
  );
}
