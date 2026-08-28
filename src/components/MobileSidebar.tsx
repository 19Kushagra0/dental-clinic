"use client";

import "@/styles/MobileSidebar.css";

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
          className="d02-mobile-overlay"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* ── Drawer ── */}
      <div className={`d02-mobile-drawer${isOpen ? " d02-mobile-drawer--open" : ""}`}>
        <div className="d02-mobile-drawer-inner">
          <nav className="d02-mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="d02-mobile-nav-link"
                onClick={onClose}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="d02-btn-primary d02-mobile-book-btn"
            onClick={handleBookClick}
          >
            Book 3D Scan ↗
          </button>
        </div>
      </div>
    </>
  );
}
