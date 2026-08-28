"use client";

import React from "react";
import { openBookingDialog } from "@/components/BookingModalPortal";

interface BookButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  treatment?: string;
  doctor?: string | null;
  children: React.ReactNode;
}

export function BookButton({ treatment, doctor, children, className, style, ...props }: BookButtonProps) {
  return (
    <button
      type="button"
      onClick={() => openBookingDialog(treatment, doctor)}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
