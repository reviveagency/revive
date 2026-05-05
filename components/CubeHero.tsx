"use client";

import { useReducedMotion } from "framer-motion";

const FACES = [
  { key: "front", label: "Converting" },
  { key: "back", label: "Clear" },
  { key: "right", label: "Fast" },
  { key: "left", label: "Results" },
] as const;

/**
 * 3D rotating cube built with CSS transforms (no Three.js).
 * - X and Y rotation on independent cycles (12s / 17s) for non-repeating motion.
 * - Hover pauses both rotations.
 * - prefers-reduced-motion → cube settles into a static angled pose, no animation.
 * - Below 768px, cube scales to ~200px; below 480px it falls back to a static angled view.
 */
export function CubeHero({ className = "" }: { className?: string }) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={`cube-wrap ${className}`} aria-hidden>
      <div
        className={`cube-x-spin ${prefersReduced ? "cube-static" : ""}`}
      >
        <div className="cube-y-spin">
          {FACES.map((f) => (
            <div key={f.key} className={`face face-${f.key}`}>
              <span>{f.label}</span>
            </div>
          ))}
          <div className="face face-top">
            <span className="face-mark">+</span>
          </div>
          <div className="face face-bottom">
            <span className="face-mark face-mark-orange">R</span>
          </div>
        </div>
      </div>

      {/* soft floor reflection */}
      <div className="cube-shadow" aria-hidden />

      <style jsx>{`
        .cube-wrap {
          position: relative;
          width: 320px;
          height: 320px;
          perspective: 1400px;
          perspective-origin: 50% 45%;
        }
        .cube-x-spin {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: cube-rot-x 17s linear infinite;
          will-change: transform;
        }
        .cube-y-spin {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: cube-rot-y 12s linear infinite;
          will-change: transform;
        }
        .cube-wrap:hover .cube-x-spin,
        .cube-wrap:hover .cube-y-spin {
          animation-play-state: paused;
        }
        .cube-static .cube-y-spin,
        .cube-static {
          animation: none !important;
        }
        .cube-static {
          transform: rotateX(-14deg) rotateY(-26deg);
        }

        .face {
          position: absolute;
          inset: 0;
          background: #ffffff;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-sora), sans-serif;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #0a0a0a;
          text-align: center;
          font-size: clamp(1.4rem, 2.1vw, 1.85rem);
          box-shadow:
            inset 0 0 0 1.5px rgba(242, 101, 34, 0.32),
            inset 0 0 24px rgba(242, 101, 34, 0.05),
            0 18px 42px -22px rgba(0, 0, 0, 0.18);
          backface-visibility: visible;
        }
        .face span {
          padding: 0 14%;
        }
        .face-mark {
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(10, 10, 10, 0.35);
          padding: 0;
        }
        .face-mark-orange {
          color: var(--color-orange);
        }

        .face-front  { transform: translateZ(160px); }
        .face-back   { transform: rotateY(180deg) translateZ(160px); }
        .face-right  { transform: rotateY(90deg)  translateZ(160px); }
        .face-left   { transform: rotateY(-90deg) translateZ(160px); }
        .face-top    { transform: rotateX(90deg)  translateZ(160px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(160px); }

        .cube-shadow {
          position: absolute;
          left: 50%;
          bottom: -40px;
          transform: translateX(-50%);
          width: 70%;
          height: 30px;
          background: radial-gradient(
            ellipse at center,
            rgba(10, 10, 10, 0.18),
            rgba(10, 10, 10, 0) 70%
          );
          filter: blur(6px);
          z-index: -1;
        }

        @keyframes cube-rot-y {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes cube-rot-x {
          from { transform: rotateX(0deg); }
          to { transform: rotateX(360deg); }
        }

        @media (max-width: 1024px) {
          .cube-wrap { width: 280px; height: 280px; }
          .face-front  { transform: translateZ(140px); }
          .face-back   { transform: rotateY(180deg) translateZ(140px); }
          .face-right  { transform: rotateY(90deg)  translateZ(140px); }
          .face-left   { transform: rotateY(-90deg) translateZ(140px); }
          .face-top    { transform: rotateX(90deg)  translateZ(140px); }
          .face-bottom { transform: rotateX(-90deg) translateZ(140px); }
        }
        @media (max-width: 640px) {
          .cube-wrap { width: 220px; height: 220px; }
          .face { font-size: 1.25rem; }
          .face-mark { font-size: 2.6rem; }
          .face-front  { transform: translateZ(110px); }
          .face-back   { transform: rotateY(180deg) translateZ(110px); }
          .face-right  { transform: rotateY(90deg)  translateZ(110px); }
          .face-left   { transform: rotateY(-90deg) translateZ(110px); }
          .face-top    { transform: rotateX(90deg)  translateZ(110px); }
          .face-bottom { transform: rotateX(-90deg) translateZ(110px); }
        }
        @media (max-width: 420px) {
          .cube-x-spin, .cube-y-spin { animation: none; }
          .cube-x-spin { transform: rotateX(-14deg) rotateY(-26deg); }
        }
      `}</style>
    </div>
  );
}
