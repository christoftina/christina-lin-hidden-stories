import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { CaseImage } from "@/lib/packd-images";

export function CaseImageViewer({ images, hasOverview = true }: { images: CaseImage[]; hasOverview?: boolean | undefined }) {
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? undefined : images[selected];
  const sections = [...new Set(images.slice(hasOverview ? 1 : 0).map((image) => image.section))];
  return (
    <>
      {hasOverview && images[0] && (
        <figure className="mx-auto max-w-6xl px-6 py-3">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
            <ImageButton image={images[0]} onClick={() => setSelected(0)} priority />
          </div>
        </figure>
      )}
      <div className="mx-auto max-w-6xl px-6">
        {sections.map((section, i) => (
          <section id={`process-${i}`} key={section} className="scroll-mt-24 py-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-display text-3xl md:text-4xl">{section}</h2>
            </div>
            <div className="space-y-10">
              {images.map((image, index) => image.section === section && (
                <figure key={image.src}>
                  <ImageButton image={image} onClick={() => setSelected(index)} />
                  <figcaption className="mt-3 text-sm text-muted-foreground">{image.caption}</figcaption>
                  {image.notes && (
                    <div className="mt-5 rounded-2xl bg-blush-soft p-5 md:p-7">
                      <p className="label-ui text-primary">My part</p>
                      {image.notes.map((note) => <p key={note} className="mt-3 max-w-3xl text-lg leading-relaxed text-foreground/80">{note}</p>)}
                    </div>
                  )}
                </figure>
              ))}
            </div>
            </div>
          </section>
        ))}
      </div>
      <Dialog open={current !== undefined} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        {current && (
          <DialogContent aria-describedby={undefined} className="max-h-[95dvh] max-w-[96vw] overflow-auto rounded-lg p-4 pt-12 md:max-w-7xl">
            <DialogTitle className="sr-only">{current.caption}</DialogTitle>
            <img src={current.src} alt={current.alt} className="mx-auto max-h-[75dvh] w-auto object-contain" />
            <div className="flex items-center justify-between gap-4">
              <Button variant="outline" size="icon" aria-label="Previous image" onClick={() => setSelected((value) => value === null ? 0 : (value - 1 + images.length) % images.length)}><ChevronLeft /></Button>
              <p className="text-center text-sm text-muted-foreground">{current.caption}<span className="mt-1 block text-xs">{(selected ?? 0) + 1} / {images.length}</span></p>
              <Button variant="outline" size="icon" aria-label="Next image" onClick={() => setSelected((value) => value === null ? 0 : (value + 1) % images.length)}><ChevronRight /></Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}

function ImageButton({ image, onClick, priority = false }: { image: CaseImage; onClick: () => void; priority?: boolean }) {
  return (
    <Button variant="ghost" onClick={onClick} aria-label={`Enlarge ${image.caption}`} className="group relative block h-auto w-full cursor-zoom-in overflow-hidden rounded-lg border border-border bg-card p-0 hover:bg-card">
      <img src={image.src} alt={image.alt} loading={priority ? "eager" : "lazy"} style={{ aspectRatio: image.ratio ?? "1272 / 717" }} className="block w-full object-contain" />
      <span className="absolute bottom-3 right-3 rounded-md border border-border bg-card/90 p-2 text-foreground"><Expand className="size-4" /></span>
    </Button>
  );
}