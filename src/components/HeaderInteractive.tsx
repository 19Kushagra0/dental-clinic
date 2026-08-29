"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/Header.module.css";
import MobileSidebar from "./MobileSidebar";

export default function HeaderInteractive() {
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
      {/* Hamburger button (mobile only) */}
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

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBookClick={() => setMenuOpen(false)}
      />
    </>
  );
}
