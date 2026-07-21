import { useEffect, useState } from "react";

const INTERVAL_MS = 4500;

export default function Slideshow({ images }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || prefersReducedMotion || images.length <= 1) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, images.length]);

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slideshow-frame">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`slideshow-image ${i === index ? "is-active" : ""}`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="slideshow-dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`slideshow-dot ${i === index ? "is-active" : ""}`}
              aria-label={`Show photo ${i + 1} of ${images.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
