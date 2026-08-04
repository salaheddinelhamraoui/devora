import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Gallery({ images, title, accent = "bg-pastel-lilac" }) {
  const [active, setActive] = useState(0);
  // The first slide loads on its own so it paints as fast as possible; the rest
  // are only fetched once it is done, so they never compete with it.
  const [warm, setWarm] = useState(false);
  const timer = useRef(null);

  const startWarming = useCallback(() => setWarm(true), []);

  useEffect(() => {
    // Fallback in case the first image is served from cache and never fires onLoad.
    timer.current = setTimeout(startWarming, 1200);
    return () => clearTimeout(timer.current);
  }, [startWarming]);

  if (!images.length) return null;

  const go = (next) => setActive((next + images.length) % images.length);

  return (
    <div>
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-4xl ${accent} shadow-soft ring-1 ring-ink/8`}
      >
        {/* Once warm, every slide stays mounted so stepping through the gallery
            is an instant opacity swap rather than a fresh download. */}
        {images.map((image, index) => {
          if (index !== 0 && index !== active && !warm) return null;

          return (
            <Image
              key={image}
              src={image}
              alt={index === active ? `${title} preview ${index + 1}` : ""}
              fill
              sizes="(max-width: 1024px) 92vw, 55vw"
              className={`object-cover transition-opacity duration-300 ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
              {...(index === 0
                ? { priority: true, onLoadingComplete: startWarming }
                : { loading: "eager" })}
              aria-hidden={index !== active}
            />
          );
        })}

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(active - 1)}
              className="absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-soft backdrop-blur transition hover:bg-white"
              aria-label="Previous image"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path
                  d="M15 5l-7 7 7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              className="absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow-soft backdrop-blur transition hover:bg-white"
              aria-label="Next image"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <span className="absolute bottom-4 right-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-cream-50 backdrop-blur">
              {active + 1} / {images.length}
            </span>
          </>
        ) : null}
      </div>

      {images.length > 1 ? (
        <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActive(index)}
              className={`relative h-[68px] w-[92px] shrink-0 overflow-hidden rounded-2xl ring-1 transition ${
                index === active
                  ? "ring-2 ring-brand-500"
                  : "opacity-70 ring-ink/10 hover:opacity-100"
              }`}
              aria-label={`Show image ${index + 1}`}
              aria-current={index === active}
            >
              <Image src={image} alt="" fill sizes="92px" className="object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
