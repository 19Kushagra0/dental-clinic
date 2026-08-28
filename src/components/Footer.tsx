import "@/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="d02-footer">
      <div className="d02-footer-inner">
        <div>
          © 2024 SmileCraft Digital Dental Studio · Road No. 12, Banjara Hills, Hyderabad 500034 · Tel: +91 40 2345 6789
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#technology" className="d02-footer-link">Technology</a>
          <a href="#simulation" className="d02-footer-link">Smile Simulator</a>
          <a href="#treatments" className="d02-footer-link">Treatments</a>
          <a href="#specialists" className="d02-footer-link">Specialists</a>
        </div>
      </div>
    </footer>
  );
}
