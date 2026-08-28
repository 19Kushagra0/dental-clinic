import React from "react";
import {
  FaTooth,
  FaCrown,
  FaUserDoctor,
  FaWhatsapp,
  FaStar,
} from "react-icons/fa6";
import {
  HiSparkles,
  HiMapPin,
  HiPhone,
  HiCheck,
  HiXMark,
  HiArrowUpRight,
  HiCheckBadge,
} from "react-icons/hi2";
import {
  TbDental,
  TbMicroscope,
  TbDna,
  TbMoodSmile,
  TbBolt,
  TbScale,
  TbRefresh,
  TbTarget,
  TbGridDots,
  TbFocus2,
} from "react-icons/tb";
import {
  RiMagicLine,
  RiVipCrownLine,
  RiHeartPulseLine,
  RiBuilding4Line,
  RiGraduationCapLine,
  RiDiamondLine,
  RiShieldCrossLine,
  RiScanLine,
  RiFlashlightLine,
} from "react-icons/ri";

/* ─── Icon Prop Interface ─── */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  color?: string;
}

/* ─── Treatment Icons ─── */
export const DentalImplantIcon: React.FC<IconProps> = ({ size = 26, className, ...props }) => (
  <FaTooth size={size} className={className} {...props} />
);

export const SmileDesignIcon: React.FC<IconProps> = ({ size = 26, className, ...props }) => (
  <HiSparkles size={size} className={className} {...props} />
);

export const AlignerIcon: React.FC<IconProps> = ({ size = 26, className, ...props }) => (
  <TbGridDots size={size} className={className} {...props} />
);

export const CrownIcon: React.FC<IconProps> = ({ size = 26, className, ...props }) => (
  <RiVipCrownLine size={size} className={className} {...props} />
);

export const MicroscopeIcon: React.FC<IconProps> = ({ size = 26, className, ...props }) => (
  <TbMicroscope size={size} className={className} {...props} />
);

export const LaserIcon: React.FC<IconProps> = ({ size = 26, className, ...props }) => (
  <RiFlashlightLine size={size} className={className} {...props} />
);

export const GumCareIcon: React.FC<IconProps> = ({ size = 26, className, ...props }) => (
  <RiHeartPulseLine size={size} className={className} {...props} />
);

export const PediatricIcon: React.FC<IconProps> = ({ size = 26, className, ...props }) => (
  <TbMoodSmile size={size} className={className} {...props} />
);

/* ─── Section Eyebrows & Headings ─── */
export const BoltIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <TbBolt size={size} className={className} {...props} />
);

export const ToothIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <TbDental size={size} className={className} {...props} />
);

export const ScaleIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <TbScale size={size} className={className} {...props} />
);

export const ProtocolIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <TbRefresh size={size} className={className} {...props} />
);

export const ReviewStarIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <FaStar size={size} className={className} {...props} />
);

export const DoctorIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <FaUserDoctor size={size} className={className} {...props} />
);

export const TargetIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <TbTarget size={size} className={className} {...props} />
);

export const LocationPinIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <HiMapPin size={size} className={className} {...props} />
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <HiPhone size={size} className={className} {...props} />
);

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <FaWhatsapp size={size} className={className} {...props} />
);

/* ─── Trust & Certification Badges ─── */
export const InstitutionIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <RiBuilding4Line size={size} className={className} {...props} />
);

export const FellowshipIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <RiGraduationCapLine size={size} className={className} {...props} />
);

export const IsoBadgeIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <HiCheckBadge size={size} className={className} {...props} />
);

export const ScanBadgeIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <RiScanLine size={size} className={className} {...props} />
);

export const DiamondBadgeIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <RiDiamondLine size={size} className={className} {...props} />
);

export const ShieldSterileIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <RiShieldCrossLine size={size} className={className} {...props} />
);

/* ─── UI Actions & Symbols ─── */
export const CheckIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <HiCheck size={size} className={className} {...props} />
);

export const XMarkIcon: React.FC<IconProps> = ({ size = 16, className, ...props }) => (
  <HiXMark size={size} className={className} {...props} />
);

export const ArrowUpRightIcon: React.FC<IconProps> = ({ size = 14, className, ...props }) => (
  <HiArrowUpRight size={size} className={className} {...props} />
);

export const CloseIcon: React.FC<IconProps> = ({ size = 18, className, ...props }) => (
  <HiXMark size={size} className={className} {...props} />
);

/* ─── Rating Star Renderer ─── */
export const StarRating: React.FC<{ count?: number; size?: number; className?: string }> = ({
  count = 5,
  size = 14,
  className = "d02-rating-star",
}) => (
  <div style={{ display: "inline-flex", gap: "3px", color: "#FACC15" }}>
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} size={size} className={className} />
    ))}
  </div>
);
