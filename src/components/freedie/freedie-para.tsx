import { useLenis } from '@studio-freight/react-lenis';
import { useRef, useEffect } from "react";

interface LerpFunction {
  (start: number, end: number, factor: number): number;
}

const lerp: LerpFunction = (start, end, factor) => start + (end - start) * factor;

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FreediePara: React.FC<ParallaxImageProps> = ({ src, alt, className }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const bounds = useRef<{ top: number; bottom: number } | null>(null);
  const currentTranslateY = useRef(0);
  const targetTranslateY = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const updateBounds = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        bounds.current = {
          top: rect.top + window.scrollY ,
          bottom: rect.bottom + window.scrollY ,
        };
      }
    };

    const animate = () => {
      if (imageRef.current) {
        currentTranslateY.current = lerp(
          currentTranslateY.current,
          targetTranslateY.current,
          0.1
        );
        if (Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.01) {
          imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.1)`;
        }
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const onDomContentLoaded = () => {
      updateBounds();
      animate();
      window.addEventListener("resize", updateBounds);
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", onDomContentLoaded);
    } else {
      onDomContentLoaded();
    }

    return () => {
      window.removeEventListener("resize", updateBounds);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      document.removeEventListener("DOMContentLoaded", onDomContentLoaded);
    };
  }, []);

  useLenis(({ scroll }) => {
    if (!bounds.current) return;
    const relativeScroll = scroll - bounds.current.top;
    targetTranslateY.current = relativeScroll * 0.2;
  });

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        willChange: "transform",
        transform: "translateY(0) scale(1.25)",
        // backgroundImage: `url(${src})`,
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "100%",
        // backgroundPosition: "100% 100%",
      }}
    />
  );
};

export default FreediePara;
