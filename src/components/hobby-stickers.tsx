/**
 * Original sticker art for the "Off the clock" flip cards. Each sticker gets a white die-cut
 * outline (see `.sticker` in styles.css) and pops in when its card flips.
 */
import type { CSSProperties, ReactNode } from "react";

function PaperFlower({ petal, fold, center }: { petal: string; fold: string; center: string }) {
  return (
    <svg viewBox="0 0 64 64">
      {[0, 72, 144, 216, 288].map((r) => (
        <g key={r} transform={`rotate(${r} 32 32)`}>
          <path d="M32 31C22 22 23 8 32 5c9 3 10 17 0 26z" fill={petal} />
          <path d="M32 29V9" stroke={fold} strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
      <circle cx="32" cy="32" r="7" fill={center} />
      <circle cx="30" cy="30" r="2" fill="#fff" opacity="0.6" />
    </svg>
  );
}

function Onigiri() {
  return (
    <svg viewBox="0 0 64 64">
      <path d="M32 6c5 0 26 34 26 42 0 7-6 10-26 10S6 55 6 48C6 40 27 6 32 6z" fill="#fffdf6" stroke="#e8e1d1" strokeWidth="1.5" />
      <rect x="20" y="40" width="24" height="18" rx="2" fill="#2f3b35" />
      <circle cx="25" cy="31" r="2.2" fill="#2b2b2b" />
      <circle cx="39" cy="31" r="2.2" fill="#2b2b2b" />
      <path d="M29 35q3 3 6 0" stroke="#2b2b2b" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="21" cy="35" r="2.6" fill="#f6b5c9" />
      <circle cx="43" cy="35" r="2.6" fill="#f6b5c9" />
    </svg>
  );
}

function Sparkle({ color = "#ffd65a" }: { color?: string }) {
  return (
    <svg viewBox="0 0 64 64">
      <path d="M32 4c3 16 12 25 28 28-16 3-25 12-28 28-3-16-12-25-28-28C20 29 29 20 32 4z" fill={color} />
      <path d="M50 6c1 5 4 8 9 9-5 1-8 4-9 9-1-5-4-8-9-9 5-1 8-4 9-9z" fill="#fff4c2" />
    </svg>
  );
}

function SpeechBurst({ text }: { text: string }) {
  return (
    <svg viewBox="0 0 64 64">
      <path d="M8 10h48a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H30l-12 12 2-12H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" fill="#ce72b2" />
      <text x="32" y="34" textAnchor="middle" fontFamily="Jua, sans-serif" fontSize="18" fontWeight="700" fill="#fff">{text}</text>
    </svg>
  );
}

function Controller() {
  return (
    <svg viewBox="0 0 64 64">
      <path d="M18 18h28c9 0 14 9 15 20 1 9-5 13-10 8l-6-6H19l-6 6c-5 5-11 1-10-8 1-11 6-20 15-20z" fill="#8fb8e6" />
      <rect x="14" y="27" width="12" height="4" rx="1" fill="#2c3e57" />
      <rect x="18" y="23" width="4" height="12" rx="1" fill="#2c3e57" />
      <circle cx="44" cy="26" r="3" fill="#ce72b2" />
      <circle cx="50" cy="31" r="3" fill="#ffd65a" />
      <circle cx="38" cy="31" r="3" fill="#7ccf8a" />
      <circle cx="44" cy="36" r="3" fill="#f28b6b" />
    </svg>
  );
}

function PixelHeart() {
  const rows = ["01100110", "11111111", "11111111", "11111111", "01111110", "00111100", "00011000"];
  return (
    <svg viewBox="0 0 64 56" shapeRendering="crispEdges">
      {rows.flatMap((row, y) =>
        [...row].map((c, x) => (c === "1" ? <rect key={`${x}-${y}`} x={x * 8} y={y * 8} width="8" height="8" fill={y < 2 && x < 3 ? "#ff9db6" : "#e8506f"} /> : null)),
      )}
    </svg>
  );
}

function Boba() {
  return (
    <svg viewBox="0 0 64 64">
      <rect x="35" y="1" width="5" height="22" rx="2" transform="rotate(12 37 12)" fill="#ce72b2" />
      <path d="M14 18h36l-4 40a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4z" fill="#e9c9a2" />
      <path d="M15 26h34l-1 8H16z" fill="#f4e3cd" opacity="0.8" />
      <rect x="11" y="14" width="42" height="7" rx="3" fill="#fff" stroke="#e4d6c6" />
      {[[24, 52], [31, 55], [38, 51], [27, 46], [35, 45], [42, 47], [21, 47]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.2" fill="#3b2a24" />
      ))}
      <circle cx="25" cy="34" r="1.6" fill="#3b2a24" />
      <circle cx="39" cy="34" r="1.6" fill="#3b2a24" />
      <path d="M30 37q2 2 4 0" stroke="#3b2a24" strokeWidth="1.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function SpringRolls() {
  return (
    <svg viewBox="0 0 64 64">
      <path d="M8 46c10-14 30-22 48-20" stroke="#7ccf8a" strokeWidth="5" strokeLinecap="round" fill="none" />
      <g transform="rotate(-18 32 32)">
        <rect x="6" y="22" width="40" height="13" rx="6.5" fill="#f3dfb8" stroke="#e2c58f" strokeWidth="1.2" />
        <path d="M12 25c5 2 10-1 14 1s9-1 14 1" stroke="#f28b6b" strokeWidth="2" fill="none" />
        <path d="M12 31c6-2 11 1 16-1s8 1 12-1" stroke="#7ccf8a" strokeWidth="2" fill="none" />
        <rect x="14" y="36" width="40" height="13" rx="6.5" fill="#f3dfb8" stroke="#e2c58f" strokeWidth="1.2" />
        <path d="M20 39c5 2 10-1 14 1s9-1 14 1" stroke="#f28b6b" strokeWidth="2" fill="none" />
        <path d="M20 45c6-2 11 1 16-1s8 1 12-1" stroke="#7ccf8a" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}

type Sticker = { art: ReactNode; className: string; rotate: number; size?: number };

const STICKERS: Record<string, Sticker[]> = {
  Gaming: [
    { art: <Controller />, className: "-left-5 -top-7", rotate: -14 },
    { art: <PixelHeart />, className: "-right-3 -top-6", rotate: 10, size: 44 },
    { art: <SpeechBurst text="GG" />, className: "-bottom-7 right-6", rotate: 8 },
  ],
  "Anime & TV": [
    { art: <Onigiri />, className: "-right-4 -top-8", rotate: 12 },
    { art: <Sparkle />, className: "-left-4 -top-5", rotate: -8, size: 46 },
    { art: <SpeechBurst text="!?" />, className: "-bottom-7 -left-3", rotate: -10, size: 50 },
  ],
  "Food hunts": [
    { art: <Boba />, className: "-right-5 -top-9", rotate: 12, size: 64 },
    { art: <SpringRolls />, className: "-bottom-8 -left-5", rotate: -8, size: 64 },
  ],
  "Crafts & scrolling": [
    { art: <PaperFlower petal="#f7a8c9" fold="#e27aa6" center="#ffd65a" />, className: "-left-5 -top-7", rotate: -12 },
    { art: <PaperFlower petal="#a9d4f5" fold="#6fa9d9" center="#ffd65a" />, className: "-right-4 -top-5", rotate: 18, size: 46 },
    { art: <PaperFlower petal="#ffe08a" fold="#e9b949" center="#ce72b2" />, className: "-bottom-6 right-4", rotate: 6, size: 42 },
  ],
};

export function HobbyStickers({ hobby }: { hobby: string }) {
  return (
    <>
      {(STICKERS[hobby] ?? []).map((s, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`sticker ${s.className}`}
          style={{ "--r": `${s.rotate}deg`, "--d": `${120 + i * 90}ms`, width: s.size ?? 56 } as CSSProperties}
        >
          {s.art}
        </span>
      ))}
    </>
  );
}
