"use client";

import styles from "@/styles/MobileSidebar.module.css";
import { SmileCraftLogoIcon } from "@/icons";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick?: () => void;
}

const navLinks = [
  { href: "#technology", label: "Technology" },
  { href: "#simulation", label: "3D Smile Simulation" },
  { href: "#treatments", label: "Treatments" },
  { href: "#comparison", label: "Digital vs. Legacy" },
  { href: "#specialists", label: "Specialists" },
];

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  return (
    <>
      {/* ── Overlay ── */}
      {isOpen && (
        <div
          className={styles.overlay}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* ── Drawer ── */}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <div className={styles.drawerInner}>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* data-book-trigger delegates to BookingModalPortal via event delegation */}
          <button
            type="button"
            data-book-trigger="true"
            className={styles.bookBtn}
            onClick={onClose}
          >
            <SmileCraftLogoIcon size={18} />
            Book 3D Scan
          </button>
        </div>
      </div>
    </>
  );
}
