"use client";

import { useState, useEffect } from "react";
import MobileSidebar from "./MobileSidebar";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
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
      <header className="d02-header">
        <nav className="d02-nav">
          {/* ── Logo ── */}
          <a href="/" className="d02-logo">
            <div className="d02-logo-icon">
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
            <div className="d02-logo-text">
              <span className="d02-logo-title">SmileCraft Digital</span>
              <span className="d02-logo-sub">Precision Dental Studio</span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <div className="d02-nav-menu">
            <a href="#technology" className="d02-nav-link">Technology</a>
            <a href="#simulation" className="d02-nav-link">3D Smile Simulation</a>
            <a href="#treatments" className="d02-nav-link">Treatments</a>
            <a href="#comparison" className="d02-nav-link">Digital vs. Legacy</a>
            <a href="#specialists" className="d02-nav-link">Specialists</a>
            <button type="button" onClick={onBookClick} className="d02-btn-primary">
              Book 3D Scan
            </button>
          </div>

          {/* ── Hamburger button (mobile only) ── */}
          <button
            type="button"
            className={`d02-hamburger${menuOpen ? " d02-hamburger--open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="d02-hamburger-line" />
            <span className="d02-hamburger-line" />
            <span className="d02-hamburger-line" />
          </button>
        </nav>
      </header>

      {/* ── Mobile Sidebar ── */}
      <MobileSidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBookClick={onBookClick}
      />
    </>
  );
}
