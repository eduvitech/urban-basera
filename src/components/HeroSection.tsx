import { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

import houseVideo1 from "@/assets/videos/house.mp4";
import houseVideo2 from "@/assets/videos/house1.mp4";
import DesignVideo from "@/assets/videos/design/design.mp4";

import { redirectWhatsApp } from "@/shared/helper";
import { Phone } from "lucide-react";

type VideoItem = { src: string; type?: string; poster?: string };

const videoPlaylist: VideoItem[] = [
  // { src: houseVideo1, type: "video/mp4" },
  // { src: houseVideo2, type: "video/mp4" },
  { src: DesignVideo, type: "video/mp4" },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [useImageFallback, setUseImageFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const current = videoPlaylist[index];

  const handleEnded = useCallback(() => {
    if (!videoPlaylist.length) return;
    setIndex((i) => (i + 1) % videoPlaylist.length);
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !videoPlaylist.length) return;

    const playAttempt = async () => {
      try {
        el.currentTime = 0;
        await el.play();
        setUseImageFallback(false);
      } catch {
        setUseImageFallback(true);
      }
    };
    const t = setTimeout(playAttempt, 0);
    return () => clearTimeout(t);
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setUseImageFallback(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] md:min-h-[78vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {!useImageFallback && videoPlaylist.length ? (
          <video
            key={current?.src}
            ref={videoRef}
            className="w-full h-full object-cover object-center"
            src={current?.src}
            poster={current?.poster ?? heroImage}
            autoPlay
            muted
            loop={false}
            playsInline
            preload="auto"
            onEnded={handleEnded}
            onError={() => setUseImageFallback(true)}
          />
        ) : (
          <img
            src={heroImage}
            alt="Luxury interior design and properties by Urban Basera"
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding pt-20">
        <div className="max-w-4xl">
          {/* ✅ Balanced, multi-line, responsive headline */}
          <h1 className="
              text-white
              mb-6
              leading-[1.05]
              text-4xl sm:text-5xl lg:text-6xl xl:text-7xl
              font-serif font-semibold
              [text-wrap:balance]
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]
            ">
            Your Home, Your Story Crafted with Care
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            From smart property deals to signature interior design, Urban Basera makes every step effortless and elevated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="hero"
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5"
              onClick={() => redirectWhatsApp()}
            >
              Book Consultation
            </Button>

            {/* Optional secondary CTA
            <Button
              variant="minimal"
              size="lg"
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-primary"
            >
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
