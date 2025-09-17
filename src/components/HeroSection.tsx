import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg"; // fallback poster

// ⬇️ Add your downloaded videos here
// Example:
import houseVideo1 from "@/assets/videos/house.mp4";
 import houseVideo2 from"@/assets/videos/house.mp4";

import { ArrowRight, Phone } from "lucide-react";

type VideoItem = {
  src: string;
  type?: string;   
  poster?: string; 
};

const videoPlaylist: VideoItem[] = [
  { src: houseVideo1, type: "video/mp4", poster: heroImage },
  { src: houseVideo2, type: "video/mp4", poster: heroImage },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [useImageFallback, setUseImageFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const current = videoPlaylist[index];

  const handleEnded = useCallback(() => {
    if (videoPlaylist.length === 0) return;
    setIndex((i) => (i + 1) % videoPlaylist.length);
  }, []);

  // Try autoplay; if blocked, gracefully fall back to image
  useEffect(() => {
    const el = videoRef.current;
    if (!el || videoPlaylist.length === 0) return;

    // Reset and attempt play on src change
    const playAttempt = async () => {
      try {
        el.currentTime = 0;
        await el.play();
        setUseImageFallback(false);
      } catch {
        setUseImageFallback(true);
      }
    };

    // In case metadata not ready, wait a tick
    const t = setTimeout(playAttempt, 0);
    return () => clearTimeout(t);
  }, [index]);

  // If user prefers reduced motion, use the image
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setUseImageFallback(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        {/* Video Background (with graceful fallback) */}
        {!useImageFallback && videoPlaylist.length > 0 ? (
          <video
            key={current?.src} // force reload when src changes
            ref={videoRef}
            className="w-full h-full object-cover"
            src={current?.src}
            poster={current?.poster ?? heroImage}
            autoPlay
            muted
            loop={false}         // we handle sequencing manually
            playsInline
            preload="auto"
            onEnded={handleEnded}
            onError={() => setUseImageFallback(true)}
          />
        ) : (
          <img
            src={heroImage}
            alt="Luxury interior design and properties by Urban Basera"
            className="w-full h-full object-cover"
          />
        )}

        {/* Readability overlay (left→right gradient) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        {/* Optional subtle vignette for extra polish */}
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding pt-20">
        <div className="max-w-5xl">
          <h1 className="text-white mb-8 whitespace-nowrap leading-tight text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight">
            Buy It. Sell It. Style It.
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-7 max-w-3xl leading-relaxed">
            From smart property deals to signature interior design, Urban Basera makes every step effortless and elevated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-10 py-5">
              <Phone className="mr-2 h-6 w-6" />
              Book Consultation
            </Button>

            {/* Optional secondary CTA */}
            {/* <Button
              variant="minimal"
              size="lg"
              className="text-lg px-10 py-5 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Explore Properties
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
