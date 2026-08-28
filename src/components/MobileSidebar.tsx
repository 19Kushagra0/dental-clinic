"use client";

import styles from "@/styles/MobileSidebar.module.css";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onBookClick: () => void;
}

const navLinks = [
  { href: "#technology", label: "Technology" },
  { href: "#simulation", label: "3D Smile Simulation" },
  { href: "#treatments", label: "Treatments" },
  { href: "#comparison", label: "Digital vs. Legacy" },
  { href: "#specialists", label: "Specialists" },
];

export default function MobileSidebar({ isOpen, onClose, onBookClick }: MobileSidebarProps) {
  const handleBookClick = () => {
    onClose();
    onBookClick();
  };

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
          <button
            type="button"
            className={`d02-btn-primary ${styles.bookBtn}`}
            onClick={handleBookClick}
          >
            Book 3D Scan ↗
          </button>
        </div>
      </div>
    </>
  );
}
