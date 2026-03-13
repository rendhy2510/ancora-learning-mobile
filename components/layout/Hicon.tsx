import React from "react";

interface HiconProps {
  name: string;
  className?: string;
  size?: number;
}

/**
 * Hicon component wrapper for using Hicon icons
 *
 * Usage:
 * <Hicon name="home" />
 * <Hicon name="arrow-right" className="text-blue-500" />
 * <Hicon name="user" size={24} />
 *
 * Available icons: https://hicon.me/
 */
export default function Hicon({ name, className = "", size }: HiconProps) {
  const style = size ? { width: size, height: size } : {};

  return <i load-hicon={name} className={className} style={style} />;
}
