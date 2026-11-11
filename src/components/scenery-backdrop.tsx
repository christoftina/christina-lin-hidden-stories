/**
 * Cartoon sky-and-meadow scenery that sits fixed behind every page:
 * a blue gradient sky with a soft sun and slowly drifting clouds,
 * and rolling green hills with grass tufts and little blush flowers along the bottom.
 * Purely decorative (aria-hidden, no pointer events).
 */

const CLOUDS = [
  { top: "9%", scale: 1.1, duration: 110, delay: -20 },
  { top: "24%", scale: 0.7, duration: 140, delay: -95 },
  { top: "41%", scale: 0.9, duration: 125, delay: -55 },
  { top: "58%", scale: 0.6, duration: 160, delay: -130 },
  { top: "15%", scale: 0.55, duration: 175, delay: -10 },
];

function Cloud() {
  return (
    <svg viewBox="0 0 220 110" className="h-auto w-[220px]" aria-hidden="true">
      <g>
        <path
          d="M36 92c-18 0-30-12-30-27s13-27 30-26c4-18 20-31 39-31 15 0 28 8 35 20 6-4 13-6 21-6 21 0 38 16 39 36 17 1 31 15 31 32 0 1 0 2-1 2z"
          fill="#ffffff"
        />
        <path d="M18 84c8 6 16 8 24 8h158c4-4 8-10 9-16-8 9-20 12-33 12H40c-8 0-15-1-22-4z" fill="#f4e6ee" />
      </g>
    </svg>
  );
}

function Flower({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M0 0v14" stroke="#4f9a3f" strokeWidth="2" strokeLinecap="round" />
      {[0, 72, 144, 216, 288].map((r) => (
        <ellipse key={r} cx="0" cy="-5" rx="3.2" ry="4.6" fill={color} transform={`rotate(${r})`} />
      ))}
      <circle r="2.6" fill="#ffe27a" />
    </g>
  );
}

function Tuft({ x, y }: { x: number; y: number }) {
  return (
    <path
      d={`M${x - 8} ${y}q4-10 3-16q3 8 5 16q2-12 6-19q0 11 2 19q3-8 7-12q-2 7-2 12z`}
      fill="#5fae4a"
    />
  );
}

export function SceneryBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* sky */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#7cc4f5_0%,#a9dbfb_38%,#d6efff_72%,#eef8ff_100%)]" />
      {/* sun */}
      <div className="absolute -right-16 -top-16 size-72 rounded-full bg-[radial-gradient(circle,#fff6c9_0%,#ffe999_38%,rgba(255,233,153,0)_70%)] md:-right-10 md:-top-10" />
      {/* clouds */}
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          className="animate-cloud absolute left-0"
          style={{ top: c.top, animationDuration: `${c.duration}s`, animationDelay: `${c.delay}s` }}
        >
          <div style={{ transform: `scale(${c.scale})`, transformOrigin: "left top" }} className="opacity-95">
            <Cloud />
          </div>
        </div>
      ))}
      {/* hills + meadow */}
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-x-0 bottom-0 h-[clamp(90px,17vh,180px)] w-full"
      >
        <path d="M0 120C160 60 320 70 480 105s300 40 470-10 330-50 490 5V220H0z" fill="#b9e59a" />
        <path d="M0 150c140-38 300-44 430-12s250 46 420 14 330-62 590-14V220H0z" fill="#95d475" />
        <path d="M0 150c140-38 300-44 430-12s250 46 420 14 330-62 590-14" fill="none" stroke="#6fbd56" strokeWidth="3" />
        <path d="M0 182c180-22 360-26 540-8s420 22 600 2 220-14 300-6V220H0z" fill="#7cc95f" />
        {[60, 210, 330, 520, 690, 830, 980, 1130, 1290, 1400].map((x, i) => (
          <Tuft key={x} x={x} y={i % 2 ? 196 : 204} />
        ))}
        {[
          [120, 186, "#f4a7c3"],
          [270, 198, "#ffffff"],
          [415, 190, "#ec8fb2"],
          [610, 200, "#f8c8d9"],
          [760, 188, "#ffffff"],
          [905, 197, "#f4a7c3"],
          [1060, 186, "#ec8fb2"],
          [1210, 199, "#ffffff"],
          [1360, 190, "#f8c8d9"],
        ].map(([x, y, c]) => (
          <Flower key={`${x}`} x={x as number} y={y as number} color={c as string} />
        ))}
      </svg>
    </div>
  );
}
