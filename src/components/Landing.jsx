import React, { useState, useEffect, useRef } from "react";
import '../index.css';
import weddingVideo from '../components/Original.mp4';
import { FaImage, FaHeart, FaShareAlt, FaArrowUp, FaVolumeMute } from 'react-icons/fa';
import engagementRing from '../components/file.png';

import A1 from '../components/images/1.jpg';
import A2 from '../components/images/2.jpg';
import A3 from '../components/images/3.jpg';
import A4 from '../components/images/4.jpg';
import A5 from '../components/images/5.jpg';
import A6 from '../components/images/6.jpg';
import A7 from '../components/images/7.jpg';
import A8 from '../components/images/8.jpg';
import A9 from '../components/images/9.jpg';
import A10 from '../components/images/10.jpg';
import A11 from '../components/images/11.jpg';
import A12 from '../components/images/12.jpg';
import A13 from '../components/images/13.jpg';
import A14 from '../components/images/14.jpg';
import A15 from '../components/images/15.jpg';
import A16 from '../components/images/16.jpg';
import A17 from '../components/images/17.jpg';
import A18 from '../components/images/18.jpg';
import A20 from '../components/images/20.jpg';
import A21 from '../components/images/21.jpg';
import A22 from '../components/images/22.jpg';
import A23 from '../components/images/23.jpg';
import A24 from '../components/images/24.jpg';
import A25 from '../components/images/25.jpg';
import A26 from '../components/images/26.jpg';
import A27 from '../components/images/27.jpg';
import A28 from '../components/images/28.jpg';
import A29 from '../components/images/29.jpg';
import A30 from '../components/images/30.jpg';
import A31 from '../components/images/31.jpg';
import A32 from '../components/images/32.jpg';
import A33 from '../components/images/33.jpg';
import A34 from '../components/images/34.jpg';
import A35 from '../components/images/35.jpg';
import A36 from '../components/images/36.jpg';
import Tejaswi from '../components/images/Tejaswis.jpg';
import Bride from '../components/images/Bride.jpg';
import Groom from '../components/images/Groom.jpg';
import Family from '../components/images/Family.jpg';
import Anand from '../components/images/Sangeet.jpg';

// ---------------------------------------------------------------------------
// Small reusable pieces
// ---------------------------------------------------------------------------

// Fades + slides an element up into place the first time it enters the viewport.
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// Doesn't render its children at all until the section is about to scroll
// into view. This is what actually fixes the slow/laggy load: instead of
// every photo on the page (100+ images) being requested the instant the
// page mounts, each heavy block only starts downloading its images once the
// visitor is genuinely about to reach it.
function LazyMount({ children, rootMargin = "400px 0px", className = "" }) {
  const ref = useRef(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : null}
    </div>
  );
}

// A photo that shows a soft themed placeholder (instead of a blank/broken
// box) until it finishes loading, then fades in smoothly. This is what
// fixes photos looking "empty" — there's now always something on screen,
// and the real photo never just pops in.
function GalleryImage({ src, alt = "", className = "", eager = true }) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`bg-gradient-to-br from-pink-100 to-pink-200 ${className}`}
    />
  );
}

// The "time since forever began" display, reused on the video hero (dark)
// and on the light pink section (light).
function ForeverTimer({ elapsed, variant = "dark", className = "" }) {
  const segments = [
    { label: "Days", value: elapsed.days },
    { label: "Hrs", value: elapsed.hours },
    { label: "Min", value: elapsed.minutes },
    { label: "Sec", value: elapsed.seconds },
  ];

  const shell =
    variant === "dark"
      ? "bg-black/30 border-white/20 text-white"
      : "bg-white/70 border-pink-300 text-pink-900";

  const labelColor = variant === "dark" ? "text-pink-100/80" : "text-pink-600/80";
  const dividerColor = variant === "dark" ? "text-white/30" : "text-pink-300";

  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-3 backdrop-blur-md border rounded-2xl px-3 py-2 sm:px-5 sm:py-3 shadow-lg ${shell} ${className}`}
    >
      <FaHeart className="text-pink-400 text-sm sm:text-base animate-pulse motion-reduce:animate-none shrink-0" />
      <div className="flex items-center gap-1.5 sm:gap-3">
        {segments.map((segment, i) => (
          <React.Fragment key={segment.label}>
            <div className="flex flex-col items-center leading-none min-w-[1.6rem] sm:min-w-[2.2rem]">
              <span className="font-bold tabular-nums text-sm sm:text-xl">
                {String(segment.value).padStart(2, "0")}
              </span>
              <span className={`text-[8px] sm:text-[10px] uppercase tracking-wider mt-0.5 ${labelColor}`}>
                {segment.label}
              </span>
            </div>
            {i < segments.length - 1 && (
              <span className={`text-xs sm:text-base -mt-2 ${dividerColor}`}>:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// A single lightbox, reused for every photo on the page.
function Lightbox({ image, onClose }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (image) {
      const id = requestAnimationFrame(() => setShow(true));
      return () => cancelAnimationFrame(id);
    }
    setShow(false);
  }, [image]);

  useEffect(() => {
    if (!image) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300 motion-reduce:transition-none ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative max-w-3xl w-full transition-all duration-300 motion-reduce:transition-none ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt="Expanded view"
          className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
        />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -top-3 -right-3 sm:top-3 sm:right-3 bg-white text-pink-700 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg hover:bg-pink-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

// A row of photos sliding continuously in one direction. Sized off the
// viewport height (not just width breakpoints) so it fills the row nicely
// on tall phones too, not just wide ones.
function SlidingRow({ photos, direction = "left", speed = 45, onPhotoClick }) {
  const doubled = [...photos, ...photos];
  const animationClass = direction === "left" ? "marquee-track" : "marquee-track-reverse";

  return (
    <div className="w-full overflow-hidden py-1.5 sm:py-2">
      <div
        className={`${animationClass} flex w-max items-center gap-2 sm:gap-3`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((photo, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onPhotoClick(photo)}
            tabIndex={index < photos.length ? 0 : -1}
            aria-hidden={index >= photos.length}
            className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 rounded-xl"
          >
            <GalleryImage
              src={photo}
              alt=""
              eager={index < 8}
              className="h-[16vh] w-[16vh] sm:h-[18vh] sm:w-[18vh] md:h-40 md:w-40 lg:h-48 lg:w-48 object-cover rounded-xl shadow-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

const WEDDING_START = new Date(Date.UTC(2025, 2, 15, 0, 0, 0));

function computeElapsed(startDate) {
  const difference = Date.now() - startDate.getTime();
  if (difference < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

// Ticks once a second, forever. Kept out of LandingPage's own state on
// purpose: every consumer of this hook re-renders every second, so it's
// only ever used inside small leaf components (below), never in the page
// component itself — otherwise every section, including the photo
// galleries, would re-render every second too.
function useElapsedTime() {
  const [elapsed, setElapsed] = useState(() => computeElapsed(WEDDING_START));

  useEffect(() => {
    const update = () => setElapsed(computeElapsed(WEDDING_START));
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return elapsed;
}

// The dark countdown pill fixed to the corner of the hero video.
function HeroTimer() {
  const elapsed = useElapsedTime();
  return (
    <div className="fixed bottom-4 right-4 z-30">
      <ForeverTimer elapsed={elapsed} variant="dark" />
    </div>
  );
}

// The light countdown pill + milestone line on the gallery section.
function GalleryTimer() {
  const elapsed = useElapsedTime();
  const years = Math.floor(elapsed.days / 365);
  const months = Math.floor(elapsed.days / 30.44);
  const milestoneText =
    years >= 1
      ? `🎉 Celebrating ${years} year${years > 1 ? "s" : ""} of marriage and counting!`
      : months >= 1
      ? `💍 ${months} month${months > 1 ? "s" : ""} of marriage and counting!`
      : `💍 ${elapsed.days} day${elapsed.days !== 1 ? "s" : ""} of marriage and counting!`;

  return (
    <>
      <ForeverTimer elapsed={elapsed} variant="light" className="mb-3" />
      <p className="text-pink-700 font-semibold text-sm sm:text-base mb-10 text-center px-4">
        {milestoneText}
      </p>
    </>
  );
}

// ---------------------------------------------------------------------------
// Landing page
// ---------------------------------------------------------------------------

function LandingPage() {
  // Photos used across the two sliding rows on the gallery page.
  const allGalleryPhotos = [
    A1, A2, A3, A4, A5, A6, A7, A8, A9, A10,
    A11, A12, A13, A14, A15, A16, A17, A18,
    A20, A21, A22, A23, A24, A25, A26, A27, A28, A29, A30,
    A31, A32, A33, A34, A35,
  ];
  const galleryHalf = Math.ceil(allGalleryPhotos.length / 2);
  const galleryRow1 = allGalleryPhotos.slice(0, galleryHalf);
  const galleryRow2 = allGalleryPhotos.slice(galleryHalf);

  // Photos shown in the footer's filmstrip.
  const footerImages = [
    A1, A2, A3, A4, A5, A6, A7, A8, A9, A10,
    A11, A12, A13, A14, A15, A16, A17, A18,
    A20, A21, A22, A23, A24, A25, A26, A27, A28, A29, A30,
    A31, A32, A33, A34, A35, Family, A36,
  ];

  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [textVisible, setTextVisible] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const openLightbox = (image) => setLightboxImage(image);
  const closeLightbox = () => setLightboxImage(null);

  // Hide the "scroll down" hint after a stretch of no interaction, bring it
  // back on the next interaction, and — since browsers block autoplay with
  // sound until the visitor interacts with the page — unmute the hero video
  // on that first interaction too.
  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let hideTimer = null;

    const handleInteraction = () => {
      setTextVisible(true);

      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setTextVisible(false), 15000);

      if (videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef.current
          .play()
          .then(() => setSoundOn(true))
          .catch(() => {
            videoRef.current.muted = true;
          });
      }
    };

    window.addEventListener("mousemove", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });
    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("click", handleInteraction);

    return () => {
      if (hideTimer) clearTimeout(hideTimer);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  // Show the "back to top" button once the visitor has scrolled past the hero.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => setShowBackToTop(el.scrollTop > window.innerHeight * 0.6);
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: "Koushik & Sushma's Wedding",
      text: "Relive Koushik & Sushma's wedding celebration!",
      url: window.location.href,
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        // visitor cancelled the share sheet — nothing to do
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareCopied(true);
        setTimeout(() => setShareCopied(false), 2000);
      } catch (e) {
        // clipboard may be unavailable — fail quietly
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-proximity scroll-smooth font-sans [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track {
          animation-name: marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-track-reverse {
          animation-name: marquee-reverse;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-track:hover,
        .marquee-track-reverse:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track, .marquee-track-reverse { animation: none; }
        }
      `}</style>

      {/* ------------------------------------------------------------- */}
      {/* Section 1: Hero                                                */}
      {/* ------------------------------------------------------------- */}
      <div
        id="hero"
        className="snap-start relative flex flex-col items-center justify-center h-screen w-full overflow-hidden bg-gray-600"
      >
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={A1}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={weddingVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
        </div>

        {/* Fixed corner timer */}
        <HeroTimer />

        {/* Sound hint — browsers block autoplaying audio until the visitor
            interacts with the page, so let them know a tap turns it on. */}
        {!soundOn && (
          <div className="fixed top-4 right-4 z-30 flex items-center gap-1.5 bg-black/30 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium rounded-full pl-2.5 pr-3.5 py-1.5 shadow-lg animate-pulse motion-reduce:animate-none">
            <FaVolumeMute className="text-pink-100 shrink-0" />
            <span>Tap for sound</span>
          </div>
        )}

        {/* Fixed back-to-top button */}
        <button
          type="button"
          onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Back to top"
          className={`fixed bottom-4 left-4 z-30 bg-black/30 backdrop-blur-md border border-white/20 text-white rounded-full w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-black/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 ${
            showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
          }`}
        >
          <FaArrowUp />
        </button>

        {/* Scroll cue */}
        <div
          className={`absolute bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 text-pink-100 text-sm sm:text-base font-semibold flex items-center gap-2 transition-opacity duration-700 ${
            textVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="animate-bounce motion-reduce:animate-none">👇</span>
          <span>Scroll Down</span>
        </div>

        {/* Hero content */}
        <div
          className={`relative z-10 text-center text-white px-6 flex flex-col items-center max-w-xl sm:max-w-2xl transition-all duration-1000 ${
            textVisible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-2"
          }`}
        >
          <span className="uppercase tracking-[0.3em] text-pink-200/80 text-xs sm:text-sm mb-3">
            Est. March 15, 2025
          </span>
          <h1 className="font-[Dancing_Script] text-4xl sm:text-6xl md:text-7xl font-bold mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span>Koushik & Sushma's Wedding</span>
            <FaHeart className="text-pink-500 text-2xl sm:text-3xl animate-bounce motion-reduce:animate-none" />
          </h1>
          <p className="text-base sm:text-xl text-pink-50/90 max-w-md sm:max-w-lg mx-auto">
            Together with their families, you're invited to celebrate their magical day!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold text-base sm:text-lg py-3 px-7 sm:px-8 rounded-full shadow-lg hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
            >
              <FaImage className="text-white text-xl" />
              View Gallery
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-pink-200/50 text-white font-medium text-sm sm:text-base py-2.5 px-5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                >
                  <FaShareAlt />
                  Share
                </button>
                {shareCopied && (
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-pink-700 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    Link copied!
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Section 2: Gallery — two sliding rows                          */}
      {/* ------------------------------------------------------------- */}
      <div
        id="schedule"
        className="snap-start relative bg-gradient-to-r from-pink-100 via-white to-pink-100 min-h-screen w-full py-16 sm:py-20 overflow-hidden flex flex-col items-center"
      >
        {/* Decorative background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden">
          <div className="absolute bottom-10 right-10 animate-float-reverse">
            <img src={engagementRing} alt="" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
          </div>
          <div className="absolute top-0 left-1/4 text-pink-500 text-4xl animate-heart-fall">❤️</div>
          <div className="absolute top-0 right-1/4 text-red-400 text-5xl animate-heart-fall delay-200">💖</div>
          <div className="absolute top-1/4 left-1/3 text-pink-300 text-6xl animate-heart-fall delay-400">💕</div>
          <div className="absolute top-1/2 left-2/5 text-purple-500 text-4xl animate-heart-fall">💝</div>
          <div className="absolute top-1/3 right-1/4 text-red-400 text-3xl animate-heart-fall delay-300">💘</div>
          <div className="absolute top-2/3 left-1/5 text-pink-300 text-5xl animate-heart-fall delay-500">💓</div>
          <div className="absolute top-1/4 right-1/5 text-red-600 text-6xl animate-heart-fall delay-600">💞</div>
          <div className="absolute top-3/4 left-2/3 text-purple-400 text-4xl animate-heart-fall delay-700">❤️</div>
          <div className="absolute top-1/2 left-1/4 text-pink-400 text-5xl animate-heart-fall delay-800">💖</div>
          <div className="absolute top-2/3 right-1/5 text-red-500 text-4xl animate-heart-fall delay-900">💘</div>
        </div>

        <div className="relative z-10 px-4 flex flex-col items-center">
          <span className="uppercase tracking-[0.25em] text-pink-500 text-xs sm:text-sm font-semibold mb-3">
            Since the big day
          </span>
          <GalleryTimer />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-pink-700 mb-8 sm:mb-10">
            Wedding Photos Gallery
          </h2>
        </div>

        {/* Sliding rows — full width, no side padding, so they use every pixel */}
        <div className="relative z-10 w-full flex flex-col gap-3 sm:gap-4">
          <LazyMount rootMargin="600px 0px">
            <Reveal>
              <SlidingRow photos={galleryRow1} direction="left" speed={48} onPhotoClick={openLightbox} />
            </Reveal>
            <Reveal delay={100}>
              <SlidingRow photos={galleryRow2} direction="right" speed={55} onPhotoClick={openLightbox} />
            </Reveal>
          </LazyMount>
        </div>

        <div className="relative z-10 px-4 flex flex-col items-center">
          <p className="italic text-center text-pink-700/80 text-base sm:text-lg mt-12 sm:mt-16 max-w-xl">
            "Love is a journey we create, one memory at a time."
          </p>

          <button
            type="button"
            onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
            className="mt-8 bg-pink-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-600 hover:scale-110 transform transition-all duration-300 ease-in-out border-2 border-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
          >
            Meet the Families
          </button>

          <div
            className={`mt-10 text-pink-800 text-sm font-semibold flex items-center gap-1 transition-opacity duration-700 ${
              textVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <span className="animate-bounce motion-reduce:animate-none">👇</span>
            <span>Scroll Down</span>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Section 3: Families + filmstrip                                */}
      {/* ------------------------------------------------------------- */}
      <div
        id="footer"
        className="snap-start relative bg-gradient-to-t from-pink-600 via-pink-400 to-pink-300 w-full min-h-screen py-16 sm:py-20 text-white text-center"
      >
        <div className="px-4">
          <p className="text-xl sm:text-2xl font-bold font-serif text-pink-900 tracking-wider">
            ❤️ Koushik & Sushma's Wedding
          </p>
          <p className="text-base sm:text-lg mt-2 text-pink-50">
            Celebrating Love on March 15, 2025
          </p>

          <div className="w-16 sm:w-20 h-1 bg-pink-800 mx-auto my-6 rounded-full" />

          <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-10">
            <Reveal className="w-[45%] sm:w-56">
              <button
                type="button"
                onClick={() => openLightbox(Bride)}
                className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 rounded-xl"
              >
                <GalleryImage
                  src={Bride}
                  alt="Bride's family"
                  className="rounded-xl shadow-lg w-full h-auto aspect-[3/4] object-cover border-4 border-pink-700 transition-transform duration-300 hover:scale-[1.03]"
                />
                <p className="mt-3 text-sm sm:text-base font-medium text-pink-900">Bride's Family</p>
              </button>
            </Reveal>
            <Reveal className="w-[45%] sm:w-56" delay={100}>
              <button
                type="button"
                onClick={() => openLightbox(Groom)}
                className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 rounded-xl"
              >
                <GalleryImage
                  src={Groom}
                  alt="Groom's family"
                  className="rounded-xl shadow-lg w-full h-auto aspect-[3/4] object-cover border-4 border-pink-700 transition-transform duration-300 hover:scale-[1.03]"
                />
                <p className="mt-3 text-sm sm:text-base font-medium text-pink-900">Groom's Family</p>
              </button>
            </Reveal>
          </div>

          <p className="italic text-base sm:text-lg mt-10 px-4 sm:px-6 text-pink-50 max-w-2xl mx-auto">
            "A successful marriage requires falling in love many times, always with the same person."
          </p>
        </div>

        <div className="mt-12 sm:mt-16">
          <LazyMount rootMargin="600px 0px">
            <SlidingRow photos={footerImages} direction="left" speed={50} onPhotoClick={openLightbox} />
          </LazyMount>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Section 4: Locations                                           */}
      {/* ------------------------------------------------------------- */}
      <div
        id="locations"
        className="snap-start relative bg-gradient-to-t from-pink-600 via-pink-400 to-pink-300 w-full min-h-screen py-16 sm:py-20 text-white text-center px-4"
      >
        <p className="text-xl sm:text-2xl font-bold font-serif text-pink-900 tracking-wider">
          🗺️ Locations
        </p>
        <div className="w-16 sm:w-20 h-1 bg-pink-800 mx-auto my-6 rounded-full" />
        <p className="text-base sm:text-lg text-pink-900 font-extrabold tracking-wide mb-10">
          Wedding Date: March 15, 2025 💖
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          <Reveal>
            <button
              type="button"
              onClick={() => openLightbox(Tejaswi)}
              className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 rounded-xl"
            >
              <GalleryImage
                src={Tejaswi}
                alt="Wedding ceremony venue"
                className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover border-4 border-pink-700 transition-transform duration-300 hover:scale-[1.02]"
              />
            </button>
            <p className="mt-3 text-sm sm:text-base font-medium text-pink-900">Hotel Tejaswi Grounds</p>
            <a
              href="https://maps.app.goo.gl/vv6stV4A4W2de2q56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-pink-100 hover:text-white underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 rounded"
            >
              View on Map
            </a>
          </Reveal>

          <Reveal delay={100}>
            <button
              type="button"
              onClick={() => openLightbox(Anand)}
              className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 rounded-xl"
            >
              <GalleryImage
                src={Anand}
                alt="Sangeet night"
                className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover border-4 border-pink-700 transition-transform duration-300 hover:scale-[1.02]"
              />
            </button>
            <p className="mt-3 text-sm sm:text-base font-medium text-pink-900">Sangeet Night (At Wedding Venue)</p>
            <a
              href="https://maps.app.goo.gl/vv6stV4A4W2de2q56"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-pink-100 hover:text-white underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200 rounded"
            >
              View on Map
            </a>
          </Reveal>
        </div>

        <p className="text-sm sm:text-base mt-10 text-pink-100 italic max-w-xl mx-auto">
          Come with your family and bless the couple with your love and best wishes.
        </p>
        <p className="text-sm sm:text-base mt-4 text-white font-semibold">
          For any queries, call{" "}
          <a
            href="tel:+917008482968"
            className="inline-block ml-1 bg-pink-700 text-white px-3 py-1 rounded-full shadow-lg hover:bg-pink-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-200"
          >
            7008482968
          </a>
        </p>
      </div>

      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </div>
  );
}

export default LandingPage;
