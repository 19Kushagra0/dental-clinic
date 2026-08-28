"use client";

import React from "react";
import { useBooking } from "@/context/BookingContext";

interface BookButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  treatment?: string;
  doctor?: string | null;
  children: React.ReactNode;
}

export function BookButton({ treatment, doctor, children, className, style, ...props }: BookButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking(treatment, doctor)}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
