"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function HiconProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Function to replace icons
    const replaceIcons = () => {
      if (typeof window !== "undefined" && (window as any).hicon) {
        (window as any).hicon.replace();
      }
    };

    // Try to replace icons immediately if hicon is already loaded
    replaceIcons();

    // Also try after a short delay to catch dynamically added icons
    const timer = setTimeout(replaceIcons, 100);

    // Set up a MutationObserver to replace icons when new ones are added
    const observer = new MutationObserver(() => {
      replaceIcons();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {children}
      <Script
        src="https://cdn.jsdelivr.net/gh/coswise/hicon-js@latest/hicon.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).hicon) {
            (window as any).hicon.replace();
            // Replace again after a short delay to catch any late-rendered components
            setTimeout(() => {
              (window as any).hicon.replace();
            }, 500);
          }
        }}
      />
    </>
  );
}
