"use client";

import styles from "@/styles/Header.module.css";
import { useState, useEffect } from "react";
import { openBookingDialog } from "@/components/BookingModalPortal";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* ── Logo ── */}
          <a href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="20"
                height="20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 8l1.5 4c.2.6.8 1 1.5 1h0c.7 0 1.3-.4 1.5-1l1.5-4c1.5-2 3-4.5 3-8 0-3.5-2.5-6-6-6z" />
                <circle cx="12" cy="8" r="2" />
              </svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>SmileCraft Digital</span>
              <span className={styles.logoSub}>Precision Dental Studio</span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <div className={styles.navMenu}>
            <a href="#technology" className={styles.navLink}>Technology</a>
            <a href="#simulation" className={styles.navLink}>3D Smile Simulation</a>
            <a href="#treatments" className={styles.navLink}>Treatments</a>
            <a href="#comparison" className={styles.navLink}>Digital vs. Legacy</a>
            <a href="#specialists" className={styles.navLink}>Specialists</a>
            <button
              type="button"
              onClick={() => openBookingDialog()}
              className={styles.navCta}
            >
              Book 3D Scan
            </button>
          </div>

          {/* ── Hamburger button (mobile only) ── */}
          <button
            type="button"
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </nav>
      </header>

      {/* ── Mobile Sidebar ── */}
      <MobileSidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBookClick={() => {
          setMenuOpen(false);
          openBookingDialog();
        }}
      />
    </>
  );
}
