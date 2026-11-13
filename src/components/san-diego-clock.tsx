import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const TIME_ZONE = "America/Los_Angeles";

const timeFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
});
const hourFormat = new Intl.DateTimeFormat("en-US", { timeZone: TIME_ZONE, hour: "numeric", hourCycle: "h23" });
const zoneFormat = new Intl.DateTimeFormat("en-US", { timeZone: TIME_ZONE, timeZoneName: "short" });

/** Live local time in San Diego, CA (ticks every second). Renders after mount to avoid SSR/client mismatch. */
export function SanDiegoClock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    // Align ticks to the start of each second.
    let interval: number | undefined;
    const timeout = window.setTimeout(() => {
      setNow(new Date());
      interval = window.setInterval(() => setNow(new Date()), 1000);
    }, 1000 - (Date.now() % 1000));
    return () => {
      window.clearTimeout(timeout);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  const hour = now ? Number(hourFormat.format(now)) : 12;
  const isDay = hour >= 6 && hour < 18;
  const zone = now ? (zoneFormat.formatToParts(now).find((p) => p.type === "timeZoneName")?.value ?? "PT") : "PT";
  const Icon = isDay ? Sun : Moon;

  return (
    <p
      className={`inline-flex items-center gap-1.5 whitespace-nowrap font-sans text-xs text-muted-foreground ${className}`}
      aria-label={now ? `Live local time in San Diego, California: ${timeFormat.format(now)} ${zone}` : "Live local time in San Diego, California"}
    >
      <span className="relative flex size-1.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
      </span>
      <Icon aria-hidden="true" className={`size-3.5 ${isDay ? "text-amber-500" : "text-accent-foreground"}`} />
      <span>San Diego, CA</span>
      <span aria-hidden="true">·</span>
      <time
        aria-hidden="true"
        dateTime={now?.toISOString()}
        className="min-w-[5.6rem] tabular-nums font-medium text-foreground"
        suppressHydrationWarning
      >
        {now ? `${timeFormat.format(now)} ${zone}` : " "}
      </time>
    </p>
  );
}
