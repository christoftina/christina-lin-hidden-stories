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

function Ramen() {
  return (
    <svg viewBox="0 0 64 64">
      <path d="M40 4 26 26M48 6 30 27" stroke="#c98a55" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 30h52c0 15-11 26-26 26S6 45 6 30z" fill="#e8506f" />
      <path d="M12 41h40" stroke="#fff" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.7" />
      <ellipse cx="32" cy="30" rx="26" ry="6" fill="#f7d58c" />
      <path d="M13 30c4-3 7 2 11-1s7 2 11-1 7 2 11-1 5 2 6 2" stroke="#f2b632" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="22" cy="28.5" rx="6" ry="3.6" fill="#fff" />
      <ellipse cx="22" cy="28.5" rx="2.8" ry="2" fill="#f2a531" />
      <ellipse cx="41" cy="28.5" rx="5" ry="3" fill="#fff" />
      <path d="M38 28.5a3 1.6 0 1 0 6 0" stroke="#f497b8" strokeWidth="1.4" fill="none" />
      <path d="M31 25l3 5" stroke="#5fae4a" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function ChiliPepper() {
  return (
    <svg viewBox="0 0 64 64">
      <path d="M44 14c-6 4-8 8-9 13-2 12-10 22-25 27 9 4 26 2 34-12 4-7 5-15 3-22z" fill="#e3342f" />
      <path d="M40 22c-1 9-6 18-16 24" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M41 14c2-3 6-4 9-2 2 1 2 4 0 5-3 1-6 0-9-3z" fill="#5fae4a" />
      <path d="M47 12c1-4 3-7 7-8" stroke="#4f9a3f" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function PirateFlag() {
  return (
    <svg viewBox="0 0 64 64">
      <rect x="6" y="4" width="4" height="58" rx="2" fill="#8a5a3b" />
      <path d="M10 8h44c-3 6-3 12 0 18-3 6-3 12 0 18H10z" fill="#24262b" />
      <g transform="translate(32 26)">
        <path d="M-15 9 15 -9M-15 -9 15 9" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        {[[-15, 9], [15, -9], [-15, -9], [15, 9]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="2.8" fill="#fff" />)}
        <path d="M-9-3a9 9 0 0 1 18 0c0 4-2 6-4 7v3h-10v-3c-2-1-4-3-4-7z" fill="#fff" />
        <circle cx="-3.5" cy="-2" r="2.4" fill="#24262b" />
        <circle cx="3.5" cy="-2" r="2.4" fill="#24262b" />
        <path d="M-2 5h4M0 5v2" stroke="#24262b" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

function BoxingGloves() {
  const glove = (fill: string, shade: string) => (
    <>
      <path d="M8 26c0-11 8-18 18-18 9 0 15 6 15 14v10c0 7-5 12-12 12H18c-6 0-10-5-10-11z" fill={fill} />
      <path d="M12 22c2-7 8-10 14-10" stroke="#fff" strokeOpacity="0.5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M8 30c0 5 3 8 8 8h3c3 0 4-3 2-5-3-3-8-4-13-3z" fill={shade} />
      <rect x="15" y="42" width="20" height="10" rx="3" fill="#fff" />
      <path d="M17 47h16" stroke={shade} strokeWidth="2" />
    </>
  );
  return (
    <svg viewBox="0 0 72 64">
      <g transform="rotate(-14 24 32)">{glove("#e8506f", "#c23a58")}</g>
      <g transform="translate(26 6) rotate(12 24 32)">{glove("#ce72b2", "#a44c8b")}</g>
    </svg>
  );
}

function Fairy() {
  return (
    <svg viewBox="0 0 64 64">
      <path d="M30 26C18 8 4 12 8 24c3 8 14 8 22 4z" fill="#c9e7fb" opacity="0.95" />
      <path d="M34 26C46 8 60 12 56 24c-3 8-14 8-22 4z" fill="#f6c6e1" opacity="0.95" />
      <path d="M29 30C18 34 12 44 18 48c5 3 11-6 12-14z" fill="#f6c6e1" opacity="0.9" />
      <path d="M35 30c11 4 17 14 11 18-5 3-11-6-12-14z" fill="#c9e7fb" opacity="0.9" />
      <path d="M32 27c-4 0-6 3-7 9l-3 14h20l-3-14c-1-6-3-9-7-9z" fill="#ce72b2" />
      <circle cx="32" cy="20" r="6.5" fill="#f7d9c4" />
      <path d="M25 19c0-6 4-9 8-9 5 0 8 4 7 10-2-3-5-5-9-5-3 0-5 2-6 4z" fill="#f2b632" />
      <circle cx="30" cy="20.5" r="0.9" fill="#3b2a24" />
      <circle cx="34.5" cy="20.5" r="0.9" fill="#3b2a24" />
      <path d="M44 10l1.4 3 3 1.4-3 1.4-1.4 3-1.4-3-3-1.4 3-1.4z" fill="#ffd65a" />
      <path d="M13 40l1 2 2 1-2 1-1 2-1-2-2-1 2-1z" fill="#ffd65a" />
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
    { art: <PirateFlag />, className: "-right-4 -top-9", rotate: 10 },
    { art: <BoxingGloves />, className: "-left-5 -top-6", rotate: -10, size: 60 },
    { art: <Fairy />, className: "-bottom-8 -left-4", rotate: -6, size: 60 },
  ],
  "Food hunts": [
    { art: <Boba />, className: "-right-5 -top-9", rotate: 12, size: 64 },
    { art: <Ramen />, className: "-bottom-8 -left-5", rotate: -8, size: 64 },
    { art: <ChiliPepper />, className: "-bottom-6 right-3", rotate: 14, size: 46 },
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
