"use client";

import styles from "@/styles/Header.module.css";
import { useState, useEffect } from "react";
import { openBookingDialog } from "@/components/BookingModalPortal";
import { SmileCraftLogoIcon } from "@/icons";
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
              <SmileCraftLogoIcon size={34} />
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
