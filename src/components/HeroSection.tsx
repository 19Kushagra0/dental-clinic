import Image from "next/image";
import styles from "@/styles/HeroSection.module.css";
import { PhoneIcon } from "@/icons";

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Digital Dental Technology Hero">
      <div className={styles.heroContent}>
        {/* Left Column: Headline, Subtext & CTAs */}
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            Digital Precision.
            <br />
            Measurable
            <br />
            Outcomes.
          </h1>

          <p className={styles.heroSubtext}>
            Slate subtext, ands adds more entire more context with high dental context.
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
              <PhoneIcon size={15} style={{ marginRight: "4px", verticalAlign: "middle" }} />
              +91 40 2345 6789
            </a>
          </div>
        </div>

        {/* Right Column: Tablet Mockup + Floating Telemetry Modals (Z-Indexed Layers) */}
        <div className={styles.heroRight}>
          <div className={styles.tabletMockupContainer}>
            {/* ─── Floating Modals / Telemetry Pills Layer (Z-Index Above Tablet) ─── */}
            
            {/* 1. Top-Right Pill: Green Capsule + Clinical telemetry */}
            <div className={`${styles.floatingPill} ${styles.pillTopRight}`}>
              <div className={`${styles.pillIconBadge} ${styles.iconBgGreen}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="2" width="12" height="20" rx="6" />
                  <line x1="12" y1="6" x2="12" y2="18" />
                </svg>
              </div>
              <span className={styles.pillLabel}>Clinical telemetry</span>
            </div>

            {/* 2. Mid-Left Pill: 3Dto scan + 9.2% Blue Badge */}
            <div className={`${styles.floatingPill} ${styles.pillMidLeft}`}>
              <span className={styles.pillLabel}>3Dto scan</span>
              <span className={styles.pillPercentBadge}>9.2%</span>
            </div>

            {/* 3. Bottom-Left Pill: Pink Heartbeat + Clinical telemetry */}
            <div className={`${styles.floatingPill} ${styles.pillBottomLeft}`}>
              <div className={`${styles.pillIconBadge} ${styles.iconBgPink}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E11D48" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <span className={styles.pillLabel}>Clinical telemetry</span>
            </div>

            {/* 4. Bottom-Center Pill: Green Node/Flow + Clinical telemetry */}
            <div className={`${styles.floatingPill} ${styles.pillBottomCenter}`}>
              <div className={`${styles.pillIconBadge} ${styles.iconBgEmerald}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="18" r="3" />
                  <path d="M6 9v3a3 3 0 0 0 3 3h6" />
                  <polyline points="15 12 18 15 15 18" />
                </svg>
              </div>
              <span className={styles.pillLabel}>Clinical telemetry</span>
            </div>

            {/* 5. Bottom-Right Pill: Blue Chart/Bars + Clinical telemetry */}
            <div className={`${styles.floatingPill} ${styles.pillBottomRight}`}>
              <div className={`${styles.pillIconBadge} ${styles.iconBgSky}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="8" />
                  <line x1="12" y1="20" x2="12" y2="12" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </div>
              <span className={styles.pillLabel}>Clinical telemetry</span>
            </div>

            {/* ─── Tablet Device Frame (Hardware-Realistic Bezel) ─── */}
            <div className={styles.tabletFrame}>
              <div className={styles.tabletScreen}>
                {/* Tablet Top Navigation Bar */}
                <div className={styles.tabletTopNav}>
                  <div className={styles.topNavPill}>
                    <button type="button" className={`${styles.topNavBtn} ${styles.topNavBtnActive}`} aria-label="Scan View">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      <span className={styles.activeTabLine} />
                    </button>

                    <button type="button" className={styles.topNavBtn} aria-label="Switch Model">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3L4 7l4 4" />
                        <path d="M4 7h16" />
                        <path d="M16 21l4-4-4-4" />
                        <path d="M20 17H4" />
                      </svg>
                    </button>

                    <button type="button" className={styles.topNavBtn} aria-label="Tooth Anatomy">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 8l1.5 4c.2.6.8 1 1.5 1h0c.7 0 1.3-.4 1.5-1l1.5-4c1.5-2 3-4.5 3-8 0-3.5-2.5-6-6-6z" />
                      </svg>
                    </button>

                    <button type="button" className={styles.topNavBtn} aria-label="3D Mesh">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                        <line x1="12" y1="22.08" x2="12" y2="12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Left Floating Toolbar */}
                <div className={styles.tabletLeftDock}>
                  <div className={styles.toolIconActive} title="Sub-micron 3D Tooth Scan">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 8l1.5 4c.2.6.8 1 1.5 1h0c.7 0 1.3-.4 1.5-1l1.5-4c1.5-2 3-4.5 3-8 0-3.5-2.5-6-6-6z" />
                    </svg>
                  </div>
                  <button type="button" className={styles.toolIconBtn} aria-label="Undo Scan Step">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 14 4 9 9 4" />
                      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                    </svg>
                  </button>
                  <button type="button" className={styles.toolIconBtn} aria-label="Measurement Ruler">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 12h20M12 2v20M7 7l10 10" />
                    </svg>
                  </button>
                  <button type="button" className={styles.toolIconBtn} aria-label="Reset Model">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>

                {/* Right Floating Toolbar */}
                <div className={styles.tabletRightDock}>
                  <button type="button" className={styles.toolIconBtn} aria-label="Scan Layers">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </button>
                  <button type="button" className={styles.toolIconBtn} aria-label="Scan Settings">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </button>
                  <button type="button" className={styles.toolIconBtn} aria-label="Magnifier Zoom">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </button>
                  <button type="button" className={styles.toolIconBtn} aria-label="AI Occlusion Map">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </button>
                  <button type="button" className={styles.toolIconBtn} aria-label="Share 3D File">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                  <button type="button" className={styles.toolIconBtn} aria-label="Export Telemetry">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </button>
                </div>

                {/* Center 3D Dental Scan Viewport */}
                <div className={styles.tabletViewport}>
                  <Image
                    src="/dental-scan-screen.jpg"
                    alt="Intraoral scanner scanning 3D digital dental arch in real-time"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 650px"
                    className={styles.viewportImg}
                  />
                </div>

                {/* Bottom Tablet Home Indicator */}
                <div className={styles.tabletBottomBar}>
                  <div className={styles.homeIndicatorPill} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
