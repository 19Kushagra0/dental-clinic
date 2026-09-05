"use client";

import React from "react";
import styles from "@/styles/MobileSidebar.module.css";
import { XMarkIcon, SmileCraftLogoIcon, PhoneIcon } from "@/icons";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick?: () => void;
}

const navItems = [
  {
    href: "#technology",
    label: "Technology",
    sub: "Planmeca 3D & In-House CEREC",
  },
  {
    href: "#simulation",
    label: "3D Smile Simulation",
    sub: "Interactive Outcome Preview",
  },
  {
    href: "#treatments",
    label: "Treatments",
    sub: "Implants, Crowns & Aligners",
  },
  {
    href: "#comparison",
    label: "Digital vs. Legacy",
    sub: "Precision Scan vs. Putty",
  },
  {
    href: "#specialists",
    label: "Specialists",
    sub: "Board-Certified Dental Team",
  },
];

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* ── Backdrop Blur Overlay ── */}
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
        {/* Top Header Bar */}
        <div className={styles.headerBar}>
          <div className={styles.brandGroup}>
            <div className={styles.logoIcon}>
              <SmileCraftLogoIcon size={30} />
            </div>
            <div className={styles.brandTitles}>
              <span className={styles.brandTitle}>SmileCraft Digital</span>
              <span className={styles.brandSub}>Precision Dental Studio</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtn}
            aria-label="Close navigation menu"
          >
            <XMarkIcon size={18} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className={styles.drawerBody}>
          {/* Navigation Items (Clean Text-Only Layout) */}
          <nav className={styles.navSection} aria-label="Mobile links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.navRow}
                onClick={onClose}
              >
                <div className={styles.navTextBox}>
                  <span className={styles.navLabel}>{item.label}</span>
                  <span className={styles.navSub}>{item.sub}</span>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.navChevron}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className={styles.ctaArea}>
            <button
              type="button"
              data-book-trigger="true"
              className={styles.bookBtn}
              onClick={onClose}
            >
              <SmileCraftLogoIcon size={18} />
              <span>Book 3D Optical Scan</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <a href="tel:+914023456789" className={styles.phoneBtn}>
              <PhoneIcon size={15} />
              <span>+91 40 2345 6789</span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
