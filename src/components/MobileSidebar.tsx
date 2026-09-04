"use client";

import React from "react";
import styles from "@/styles/MobileSidebar.module.css";
import { XMarkIcon, SmileCraftLogoIcon } from "@/icons";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick?: () => void;
}

const navItems = [
  {
    href: "#technology",
    label: "Technology",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
      </svg>
    ),
  },
  {
    href: "#simulation",
    label: "3D Smile Simulation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
  },
  {
    href: "#treatments",
    label: "Treatments",
    icon: (
      <svg width="19" height="22" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5C9.5 2.5 5 2.5 3 6.5C1 10.5 2 16 4 20C5.5 23 7.5 26 9.5 26C11 26 11.5 22.5 12 20C12.5 22.5 13 26 14.5 26C16.5 26 18.5 23 20 20C22 16 23 10.5 21 6.5C19 2.5 14.5 2.5 12 4.5Z" />
      </svg>
    ),
  },
  {
    href: "#comparison",
    label: "Digital vs. Legacy",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    href: "#specialists",
    label: "Specialists",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* ── Backdrop Overlay ── */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* ── Slide-in Drawer ── */}
      <aside
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile Navigation Menu"
        aria-hidden={!isOpen}
      >
        {/* Right side background wave graphic */}
        <div className={styles.waveGraphic} aria-hidden="true">
          <svg width="100%" height="100%" viewBox="0 0 100 800" fill="none" preserveAspectRatio="none">
            <path
              d="M100 0C65 180 30 320 50 480C70 620 95 720 85 800H100V0Z"
              fill="#1E293B"
              fillOpacity="0.3"
            />
            <path
              d="M100 0C65 180 30 320 50 480C70 620 95 720 85 800"
              stroke="#D4AF37"
              strokeOpacity="0.4"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={styles.closeBtn}
          aria-label="Close navigation menu"
        >
          <XMarkIcon size={18} />
        </button>

        <div className={styles.drawerContent}>
          {/* ── Brand Header ── */}
          <div className={styles.headerArea}>
            <div className={styles.brandRow}>
              {/* SmileCraft Geometric Brand Logo */}
              <div className={styles.toothLogoWrap} aria-hidden="true">
                <SmileCraftLogoIcon size={36} />
              </div>

              <div className={styles.brandTitles}>
                <span className={styles.brandTitle}>SmileCraft Digital</span>
                <span className={styles.brandSub}>PRECISION DENTAL STUDIO</span>
              </div>
            </div>

            {/* Gold Divider Accent Line */}
            <div className={styles.goldLine} aria-hidden="true" />

            {/* Tagline */}
            <div className={styles.tagline}>
              <div>HEALTHIER SMILES</div>
              <div>BRIGHTER TOMORROWS</div>
            </div>
          </div>

          {/* ── Navigation List ── */}
          <nav className={styles.navSection}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navRow}
                onClick={onClose}
              >
                <div className={styles.navLeft}>
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.navChevron}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            ))}
          </nav>

          {/* ── Book 3D Scan Button ── */}
          <div className={styles.ctaArea}>
            <button
              type="button"
              data-book-trigger="true"
              className={styles.bookBtn}
              onClick={onClose}
            >
              <div className={styles.bookBtnLeft}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.calendarIcon}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className={styles.bookBtnText}>Book 3D Scan</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.bookBtnChevron}>
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* ── Footer ── */}
          <div className={styles.footerArea}>
            <div className={styles.footerText}>
              <div className={styles.footerPillars}>Care &nbsp;•&nbsp; Technology &nbsp;•&nbsp; People</div>
              <div className={styles.footerTagline}>A HEALTHIER YOU STARTS HERE</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
