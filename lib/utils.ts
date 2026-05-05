import clsx, { type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutSoft: [0.65, 0, 0.35, 1] as const,
};

export const motionPresets = {
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: ease.outExpo },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: ease.outExpo },
  },
};
