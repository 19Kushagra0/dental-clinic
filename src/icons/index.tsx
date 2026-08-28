import React from "react";

/* ─── Icon Prop Interface ─── */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  color?: string;
}

/* ─── Treatment Icons ─── */
export const DentalImplantIcon: React.FC<IconProps> = ({ size = 26, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 8l1.5 4c.2.6.8 1 1.5 1h0c.7 0 1.3-.4 1.5-1l1.5-4c1.5-2 3-4.5 3-8 0-3.5-2.5-6-6-6z" />
    <path d="M9 9h6M10 13h4M10.5 17h3" />
  </svg>
);

export const SmileDesignIcon: React.FC<IconProps> = ({ size = 26, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
    <path d="M19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16z" />
  </svg>
);

export const AlignerIcon: React.FC<IconProps> = ({ size = 26, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="3" y="4" width="18" height="16" rx="4" />
    <path d="M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01" />
  </svg>
);

export const CrownIcon: React.FC<IconProps> = ({ size = 26, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 18h18M4 7l4 4 4-6 4 6 4-4v11H4V7z" />
  </svg>
);

export const MicroscopeIcon: React.FC<IconProps> = ({ size = 26, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M5 21h14M6 18h2M7 18v3M9 3l6 6M10 2l6 6M12 8l3.5-3.5M6 14a5 5 0 007.5 4.3" />
    <circle cx="15" cy="15" r="3" />
  </svg>
);

export const LaserIcon: React.FC<IconProps> = ({ size = 26, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const GumCareIcon: React.FC<IconProps> = ({ size = 26, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 117.5-6.566 5 5 0 117.5 6.566z" />
    <path d="M12 9v6M9 12h6" />
  </svg>
);

export const PediatricIcon: React.FC<IconProps> = ({ size = 26, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M15 10h.01M8 15a5 5 0 008 0" />
  </svg>
);

/* ─── Section Eyebrows & Headings ─── */
export const BoltIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const ToothIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 6 3 8l1.5 4c.2.6.8 1 1.5 1h0c.7 0 1.3-.4 1.5-1l1.5-4c1.5-2 3-4.5 3-8 0-3.5-2.5-6-6-6z" />
  </svg>
);

export const ScaleIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 3v18M6 8l-3 7h6l-3-7zM18 8l-3 7h6l-3-7zM6 8h12" />
  </svg>
);

export const ProtocolIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20 11a8.1 8.1 0 00-15.5-2m-.5-5v5h5M4 13a8.1 8.1 0 0015.5 2m.5 5v-5h-5" />
  </svg>
);

export const ReviewStarIcon: React.FC<IconProps> = ({ size = 16, color = "#FACC15", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className} {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const DoctorIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M19 11v6M22 14h-6" />
  </svg>
);

export const TargetIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

export const LocationPinIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 21s-8-7.5-8-12a8 8 0 1116 0c0 4.5-8 12-8 12z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.188 8.188 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.02 4.54-3.68 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.17-.47-.29z" />
  </svg>
);

/* ─── Trust & Certification Badges ─── */
export const InstitutionIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
  </svg>
);

export const FellowshipIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
  </svg>
);

export const IsoBadgeIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const ScanBadgeIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4M4 12h16" />
  </svg>
);

export const DiamondBadgeIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
    <path d="M2 9h20M10 3l-4 6 6 12 6-12-4-6" />
  </svg>
);

export const ShieldSterileIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

/* ─── UI Actions & Symbols ─── */
export const CheckIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export const XMarkIcon: React.FC<IconProps> = ({ size = 16, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export const ArrowUpRightIcon: React.FC<IconProps> = ({ size = 14, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M7 17L17 7M7 7h10v10" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 18, color = "currentColor", className, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/* ─── Rating Star Renderer ─── */
export const StarRating: React.FC<{ count?: number; size?: number; className?: string }> = ({
  count = 5,
  size = 14,
  className = "d02-rating-star",
}) => (
  <div style={{ display: "inline-flex", gap: "3px", color: "#FACC15" }} className={className}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#FACC15">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

/* ─── SmileCraft Digital Studio Brand Logo Icon ─── */
export const SmileCraftLogoIcon: React.FC<IconProps> = ({
  size = 24,
  className,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="scLogoGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="scLogoSpark" x1="12" y1="10" x2="20" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#BAE6FD" />
      </linearGradient>
    </defs>
    {/* High-Precision Modern Tooth Contour */}
    <path
      d="M9.5 5C6.8 5 5 7.6 5 11.5C5 15.5 6.8 19 9.2 22.5L11.5 26.5C12.1 27.5 13.4 27.8 14.3 27L15.4 25.8C15.8 25.4 16.2 25.4 16.6 25.8L17.7 27C18.6 27.8 19.9 27.5 20.5 26.5L22.8 22.5C25.2 19 27 15.5 27 11.5C27 7.6 25.2 5 22.5 5C19.8 5 17.5 7.2 16 7.4C14.5 7.2 12.2 5 9.5 5Z"
      fill="url(#scLogoGrad)"
      stroke="#38BDF8"
      strokeWidth="1.2"
    />
    {/* 3D Laser Optical Sparkle Node */}
    <path
      d="M16 9.5L17.2 13.3L21 14.5L17.2 15.7L16 19.5L14.8 15.7L11 14.5L14.8 13.3L16 9.5Z"
      fill="url(#scLogoSpark)"
    />
    <circle cx="16" cy="14.5" r="1.1" fill="#0284C7" />
  </svg>
);
