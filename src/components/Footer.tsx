import styles from "@/styles/Footer.module.css";
import { LocationPinIcon, PhoneIcon } from "@/icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand & Studio Info */}
        <div className={styles.brandBlock}>
          <div className={styles.brandTitle}>SmileCraft Digital Dental Studio</div>
          <div className={styles.metaRow}>
            <span className={styles.metaItem}>
              <LocationPinIcon size={13} />
              Road No. 12, Banjara Hills, Hyderabad 500034
            </span>
            <span className={styles.metaDivider}>•</span>
            <a href="tel:+914023456789" className={styles.metaLink}>
              <PhoneIcon size={12} />
              +91 40 2345 6789
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav className={styles.footerNav} aria-label="Footer navigation">
          <a href="#technology" className={styles.footerLink}>Technology</a>
          <a href="#simulation" className={styles.footerLink}>Smile Simulator</a>
          <a href="#treatments" className={styles.footerLink}>Treatments</a>
          <a href="#specialists" className={styles.footerLink}>Specialists</a>
        </nav>
      </div>

      {/* Bottom Sub-bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <span>© 2024 SmileCraft Digital Dental Studio. All rights reserved.</span>
          <span className={styles.badgeText}>NABH Accredited · Advanced Laser & 3D Diagnostics</span>
        </div>
      </div>
    </footer>
  );
}
