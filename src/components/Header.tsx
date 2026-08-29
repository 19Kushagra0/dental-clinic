/* Server Component — Logo + Nav links render with zero JS */
import styles from "@/styles/Header.module.css";
import { SmileCraftLogoIcon } from "@/icons";
import HeaderInteractive from "./HeaderInteractive";

export default function Header() {
  return (
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

        {/* ── Desktop nav (server-rendered, zero JS) ── */}
        <div className={styles.navMenu}>
          <a href="#technology" className={styles.navLink}>Technology</a>
          <a href="#simulation" className={styles.navLink}>3D Smile Simulation</a>
          <a href="#treatments" className={styles.navLink}>Treatments</a>
          <a href="#comparison" className={styles.navLink}>Digital vs. Legacy</a>
          <a href="#specialists" className={styles.navLink}>Specialists</a>
          {/* Book button uses data attribute delegation — no JS component needed */}
          <button
            type="button"
            data-book-trigger="true"
            className={styles.navCta}
          >
            Book 3D Scan
          </button>
        </div>

        {/* ── Client island: hamburger + mobile sidebar only ── */}
        <HeaderInteractive />
      </nav>
    </header>
  );
}
