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
import BookingModalPortal from "@/components/BookingModalPortal";
import TechShowcaseIsland from "@/components/TechShowcaseIsland";
import SmileSimulatorIsland from "@/components/SmileSimulatorIsland";

const TechShowcase = dynamic(() => import("@/components/TechShowcase"), {
  ssr: true,
});

const SmileSimulator = dynamic(() => import("@/components/SmileSimulator"), {
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
  { label: "IDA Member" },
  { label: "ICOI Fellow" },
  { label: "ISO 9001 Certified" },
  { label: "Planmeca® Authorized" },
  { label: "Invisalign® Diamond" },
  { label: "BIS Sterilization" },
];

/* ─── Server-Rendered Landing Page (Zero JS Hydration Overhead) ─── */
export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />

      {/* ─── Hero Section ─── */}
      <section className={styles.hero} aria-label="Digital Dental Technology Hero">
        <div className={styles.heroBg}>
          <Image
            src="/dental-scanner-3d.jpg"
            alt="Doctor performing 3D intraoral digital optical scan at SmileCraft Dental Studio Banjara Hills"
            fill
            priority
            fetchPriority="high"
            quality={65}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Digital Precision.
            <br />
            <span className={styles.heroTitleCyan}>Measurable</span>
            <br />
            Outcomes.
          </h1>

          <p className={styles.heroLead}>
            Rejecting obsolete guesswork and messy impression trays. Experience sub-micron 3D oral scanning,
            same-day CAD/CAM ceramic crowns, and computer-guided keyhole implant surgery in Banjara Hills.
          </p>

          <div className={styles.heroActions}>
            <button
              type="button"
              data-book-trigger="true"
              className={styles.btnPrimary}
            >
              Book 3D Optical Scan
            </button>
            <a href="tel:+914023456789" className={styles.btnSecondary}>
              <PhoneIcon size={14} style={{ marginRight: "6px", verticalAlign: "middle" }} />
              Clinical Desk: +91 40 2345 6789
            </a>
          </div>
        </div>

        {/* Telemetry HUD Data Strip */}
        <div className={styles.telemetryStrip}>
          <div className={styles.telemetryInner}>
            {[
              { val: "< 20 µm", lbl: "3D Optical Scan Accuracy" },
              { val: "60 Mins", lbl: "Same-Day CEREC® Crowns" },
              { val: "90% Less", lbl: "Low-Dose CBCT Radiation" },
              { val: "4.9 / 5.0 ★", lbl: "800+ Patient Reviews" },
            ].map((item, i) => (
              <div key={i} className={styles.telemetryItem}>
                <div className={styles.telemetryData}>
                  <span className={styles.telemetryVal}>{item.val}</span>
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
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Interactive Technology Showcase Section ─── */}
      <section id="technology" className={styles.techSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
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
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Conventional vs. Digital Comparison Matrix ─── */}
      <section id="comparison" className={styles.compareSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              The Conventional Clinic vs. SmileCraft Digital
            </h2>
            <p className={styles.sectionSubText}>
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
          <div className={styles.sectionHeader}>
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
          <div className={styles.sectionHeader}>
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
                data-book-trigger="true"
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

      {/* Zero-overhead Event-Driven Booking Portal */}
      <BookingModalPortal />
    </div>
  );
}
