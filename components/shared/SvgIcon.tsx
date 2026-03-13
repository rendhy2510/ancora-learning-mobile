import React from "react";
import Image from "next/image";

interface SvgIconProps {
  name: string;
  className?: string;
  size?: number;
  useMask?: boolean;
}

/**
 * SVG Icon component for using Figma exported icons
 *
 * Usage:
 * <SvgIcon name="home" />
 * <SvgIcon name="user" useMask className="text-blue-500" size={24} />
 *
 * Place your SVG files in /public/icons/ directory
 * Example: /public/icons/home.svg
 */
export default function SvgIcon({
  name,
  className = "",
  size = 20,
  useMask = false,
}: SvgIconProps) {
  if (useMask) {
    return (
      <div
        className={className}
        style={{
          width: size,
          height: size,
          backgroundColor: "currentColor",
          maskImage: `url(/icons/${name}.svg)`,
          maskRepeat: "no-repeat",
          maskSize: "contain",
          maskPosition: "center",
          WebkitMaskImage: `url(/icons/${name}.svg)`,
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          WebkitMaskPosition: "center",
          display: "inline-block",
          verticalAlign: "middle",
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      width={size}
      height={size}
      className={className}
      style={{ display: "inline-block", verticalAlign: "middle" }}
    />
  );
}
