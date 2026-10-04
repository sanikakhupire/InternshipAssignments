import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin safely
gsap.registerPlugin(ScrollTrigger);

/**
 * Initializes intro reveal animations on page load
 * @param {Object} elements - DOM elements to animate
 * @param {boolean} prefersReducedMotion - accessibility flag
 * @returns {gsap.core.Timeline}
 */
export const initIntroAnimation = (elements, prefersReducedMotion = false) => {
  const {
    headlineChars,
    subheadline,
    statsItems,
    carContainer,
    badge,
    hudElements,
  } = elements;

  const tl = gsap.timeline({
    defaults: {
      ease: prefersReducedMotion ? 'none' : 'power3.out',
    }
  });

  if (prefersReducedMotion) {
    // Accessible instant fade for reduced motion preference
    tl.to([headlineChars, subheadline, statsItems, carContainer, badge, hudElements], {
      opacity: 1,
      duration: 0.4,
      stagger: 0.05
    });
    return tl;
  }

  // 1. Initial State Setup
  gsap.set(badge, { opacity: 0, y: -20 });
  gsap.set(headlineChars, { opacity: 0, y: 40, filter: 'blur(8px)' });
  gsap.set(subheadline, { opacity: 0, y: 25 });
  gsap.set(statsItems, { opacity: 0, y: 30, scale: 0.95 });
  gsap.set(carContainer, { opacity: 0, scale: 0.9, y: 50 });
  gsap.set(hudElements, { opacity: 0 });

  // 2. Staggered Sequence
  tl.to(badge, {
    opacity: 1,
    y: 0,
    duration: 0.8,
  })
  .to(headlineChars, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 0.9,
    stagger: 0.035,
  }, '-=0.5')
  .to(subheadline, {
    opacity: 1,
    y: 0,
    duration: 0.7,
  }, '-=0.4')
  .to(carContainer, {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 1.2,
    ease: 'power2.out',
  }, '-=0.6')
  .to(statsItems, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.7,
    stagger: 0.12,
    ease: 'back.out(1.2)',
  }, '-=0.8')
  .to(hudElements, {
    opacity: 1,
    duration: 0.6,
    stagger: 0.1,
  }, '-=0.4');

  return tl;
};

/**
 * Creates the Scroll-Driven ScrollTrigger pinning & motion timeline
 * Uses gsap.matchMedia() for pristine responsiveness across Desktop, Tablet, and Mobile.
 * 
 * @param {Object} refs - Object containing DOM refs
 * @param {Function} onProgressUpdate - Callback for scroll percentage indicator
 * @returns {gsap.Context}
 */
export const createHeroScrollTrigger = (refs, onProgressUpdate) => {
  const {
    pinContainerRef,
    carRef,
    trailRef,
    glowRef,
    speedBadgeRef,
    trackLinesRef,
    telemetryBoxRef,
    titleWrapperRef,
    statsWrapperRef,
  } = refs;

  if (!pinContainerRef.current || !carRef.current) return;

  const mm = gsap.matchMedia();

  // Handle accessibility check
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // In reduced motion mode, maintain clean layout without intense displacement
    ScrollTrigger.create({
      trigger: pinContainerRef.current,
      start: 'top top',
      end: '+=100%',
      onUpdate: (self) => {
        if (onProgressUpdate) onProgressUpdate(Math.round(self.progress * 100));
      }
    });
    return mm;
  }

  // --- DESKTOP BREAKPOINT (>= 1024px) ---
  mm.add('(min-width: 1024px)', () => {
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainerRef.current,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1.1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (onProgressUpdate) {
            onProgressUpdate(Math.round(self.progress * 100));
          }
        },
      },
    });

    // 0.0 -> 0.35: Initial launch acceleration & title fade
    mainTl
      .to(titleWrapperRef.current, {
        y: -60,
        opacity: 0.25,
        duration: 0.35,
        ease: 'power1.out',
      }, 0)
      .to(statsWrapperRef.current, {
        y: 40,
        opacity: 0.2,
        duration: 0.35,
        ease: 'power1.out',
      }, 0)
      .fromTo(carRef.current, 
        { xPercent: -50, yPercent: 0, rotation: 0, scale: 0.92 },
        { xPercent: 10, yPercent: -15, rotation: 4, scale: 1.08, duration: 0.45, ease: 'power2.inOut' },
        0
      )
      .to(trailRef.current, {
        scaleX: 1.4,
        opacity: 0.9,
        duration: 0.45,
        ease: 'power2.inOut',
      }, 0)
      .to(speedBadgeRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.2,
      }, 0.1)

    // 0.35 -> 0.70: High speed drift & dynamic track traversal
    mainTl
      .to(carRef.current, {
        xPercent: 75,
        yPercent: 10,
        rotation: -3,
        scale: 1.18,
        duration: 0.35,
        ease: 'power1.inOut',
      }, 0.45)
      .to(glowRef.current, {
        opacity: 0.85,
        scale: 1.3,
        duration: 0.35,
      }, 0.45)
      .to(telemetryBoxRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.3,
      }, 0.5)

    // 0.70 -> 1.0: Full throttle exit into second section
    mainTl
      .to(carRef.current, {
        xPercent: 160,
        yPercent: -25,
        rotation: 6,
        scale: 1.25,
        opacity: 0.9,
        duration: 0.3,
        ease: 'power2.in',
      }, 0.75)
      .to(trailRef.current, {
        scaleX: 2.2,
        opacity: 1,
        duration: 0.3,
      }, 0.75)
      .to([titleWrapperRef.current, statsWrapperRef.current], {
        opacity: 0,
        y: -100,
        duration: 0.25,
      }, 0.75);

    return () => {
      // Cleaned up automatically by matchMedia
    };
  });

  // --- TABLET BREAKPOINT (768px - 1023px) ---
  mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
    const tabletTl = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainerRef.current,
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: 1.1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (onProgressUpdate) onProgressUpdate(Math.round(self.progress * 100));
        },
      },
    });

    tabletTl
      .to(titleWrapperRef.current, {
        y: -40,
        opacity: 0.3,
        duration: 0.4,
      }, 0)
      .to(statsWrapperRef.current, {
        opacity: 0.2,
        duration: 0.3,
      }, 0)
      .fromTo(carRef.current,
        { xPercent: -50, yPercent: 0, scale: 0.9, rotation: 0 },
        { xPercent: 20, yPercent: -10, scale: 1.05, rotation: 3, duration: 0.5, ease: 'power2.inOut' },
        0
      )
      .to(carRef.current, {
        xPercent: 120,
        yPercent: -20,
        scale: 1.15,
        rotation: 5,
        duration: 0.5,
        ease: 'power2.in',
      }, 0.5);

    return () => {};
  });

  // --- MOBILE BREAKPOINT (< 768px) ---
  mm.add('(max-width: 767px)', () => {
    const mobileTl = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainerRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 1.0,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (onProgressUpdate) onProgressUpdate(Math.round(self.progress * 100));
        },
      },
    });

    // Mobile-optimized trajectory: diagonal vertical-forward glide that avoids text overlap and overflow
    mobileTl
      .to(titleWrapperRef.current, {
        y: -30,
        opacity: 0.2,
        duration: 0.4,
      }, 0)
      .to(statsWrapperRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.3,
      }, 0)
      .fromTo(carRef.current,
        { xPercent: -50, yPercent: 0, scale: 0.85, rotation: 0 },
        { xPercent: -30, yPercent: -25, scale: 1.0, rotation: 4, duration: 0.5, ease: 'power1.inOut' },
        0
      )
      .to(carRef.current, {
        xPercent: 30,
        yPercent: -60,
        scale: 1.05,
        rotation: 8,
        opacity: 0.7,
        duration: 0.5,
        ease: 'power2.in',
      }, 0.5);

    return () => {};
  });

  return mm;
};
