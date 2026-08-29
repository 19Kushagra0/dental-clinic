"use client";

import dynamic from "next/dynamic";
import styles from "@/styles/HomePage.module.css";

const TechShowcaseLazy = dynamic(() => import("./TechShowcase"), {
  ssr: false,
  loading: () => <div className={styles.techSkeletonCard} aria-hidden="true" />,
});

export default function TechShowcaseIsland() {
  return <TechShowcaseLazy />;
}
