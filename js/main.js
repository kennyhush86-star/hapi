const heroFrame = document.querySelector('[data-frame-animation]');

if (heroFrame && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const frameCount = Number(heroFrame.dataset.frameCount) || 1;
  const frameSources = Array.from(
    { length: frameCount },
    (_, index) => `public/images/animate/${index + 1}.webp`
  );
  const frameDuration = 140;
  let frames = [frameSources[0]];
  let frameIndex = 0;
  let lastFrameTime = 0;
  let animationFrameId = 0;
  let isVisible = true;
  let isReady = false;

  const stopAnimation = () => {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = 0;
  };

  const animate = (time) => {
    if (!isVisible || document.hidden) {
      stopAnimation();
      return;
    }

    if (time - lastFrameTime >= frameDuration) {
      frameIndex = (frameIndex + 1) % frames.length;
      heroFrame.src = frames[frameIndex];
      lastFrameTime = time;
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  const startAnimation = () => {
    if (!isReady || !isVisible || document.hidden || animationFrameId) return;

    lastFrameTime = performance.now();
    animationFrameId = requestAnimationFrame(animate);
  };

  Promise.all(frameSources.map((source) => new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(source);
    image.onerror = () => resolve(null);
    image.src = source;
  }))).then((loadedFrames) => {
    frames = loadedFrames.filter(Boolean);
    isReady = frames.length > 1;
    startAnimation();
  });

  if ('IntersectionObserver' in window) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else stopAnimation();
    }, { threshold: 0.05 });

    heroObserver.observe(heroFrame);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAnimation();
    else startAnimation();
  });
}

const interactiveBox = document.querySelector('.interactive-box');
const whatLinks = document.querySelectorAll('a[href="#why"]');

if (interactiveBox) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const liftDuration = reduceMotion ? 0 : 800;
  let boxObserver;
  let revealTimer;
  let scrollEndTimer;
  let scrollFallbackTimer;
  let suppressObserver = false;
  let sequenceComplete = false;

  const setBoxState = (isOpen) => {
    interactiveBox.setAttribute('aria-expanded', String(isOpen));
    interactiveBox.setAttribute('aria-label', isOpen ? 'Close the Hapi charcoal box' : 'Open the Hapi charcoal box');
  };

  const clearRevealTimers = () => {
    clearTimeout(revealTimer);
    clearTimeout(scrollEndTimer);
    clearTimeout(scrollFallbackTimer);
  };

  const revealBox = () => {
    if (sequenceComplete) return;

    sequenceComplete = true;
    suppressObserver = false;
    boxObserver?.unobserve(interactiveBox);
    interactiveBox.classList.add('is-positioned');
    revealTimer = setTimeout(() => setBoxState(true), liftDuration);
  };

  const resetBox = () => {
    clearRevealTimers();
    sequenceComplete = false;
    suppressObserver = true;
    interactiveBox.classList.remove('is-positioned');
    setBoxState(false);
    boxObserver?.observe(interactiveBox);
  };

  const revealAfterAnchorSettles = () => {
    if (sequenceComplete) return;

    resetBox();
    let settled = false;

    const finishAnchorSequence = () => {
      if (settled) return;

      settled = true;
      window.removeEventListener('scroll', handleAnchorScroll);
      clearTimeout(scrollEndTimer);
      clearTimeout(scrollFallbackTimer);
      revealTimer = setTimeout(revealBox, reduceMotion ? 0 : 300);
    };

    const handleAnchorScroll = () => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(finishAnchorSequence, 180);
    };

    window.addEventListener('scroll', handleAnchorScroll, { passive: true });
    scrollFallbackTimer = setTimeout(finishAnchorSequence, reduceMotion ? 0 : 1600);
  };

  interactiveBox.addEventListener('click', () => {
    const isOpen = interactiveBox.getAttribute('aria-expanded') === 'true';

    clearRevealTimers();
    sequenceComplete = true;
    suppressObserver = false;
    boxObserver?.unobserve(interactiveBox);
    interactiveBox.classList.add('is-positioned');
    setBoxState(!isOpen);
  });

  if ('IntersectionObserver' in window) {
    boxObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting || suppressObserver || sequenceComplete) return;

      revealBox();
    }, { threshold: 0.6 });

    boxObserver.observe(interactiveBox);
  }

  whatLinks.forEach((link) => {
    link.addEventListener('click', revealAfterAnchorSettles);
  });
}

const featureList = document.querySelector('.feature-list');
const whySection = document.querySelector('#product');

if (featureList && whySection && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const featureItems = [...featureList.querySelectorAll('li')];
  let animationFrame;
  let hasRevealed = false;

  const getAnchorOffset = () => (window.innerWidth <= 780 ? 76 : 60);

  const revealFeatures = () => {
    hasRevealed = true;
    window.removeEventListener('scroll', requestFeatureUpdate);
    window.removeEventListener('resize', requestFeatureUpdate);

    featureItems.forEach((item, index) => {
      window.setTimeout(() => item.classList.add('is-visible'), index * 140);
    });

    window.setTimeout(() => {
      featureList.classList.add('is-reveal-complete');
    }, featureItems.length * 140 + 500);
  };

  const checkFeaturePosition = () => {
    animationFrame = undefined;
    if (hasRevealed) return;

    const anchorOffset = getAnchorOffset();
    if (whySection.getBoundingClientRect().top < anchorOffset - 2) revealFeatures();
  };

  const requestFeatureUpdate = () => {
    if (animationFrame !== undefined) return;
    animationFrame = requestAnimationFrame(checkFeaturePosition);
  };

  featureList.classList.add('is-reveal-ready');
  window.addEventListener('scroll', requestFeatureUpdate, { passive: true });
  window.addEventListener('resize', requestFeatureUpdate);
  requestFeatureUpdate();
}

document.querySelectorAll('a[href="#page-end"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const root = document.scrollingElement || document.documentElement;

    history.replaceState(null, '', '#page-end');
    window.scrollTo({
      top: root.scrollHeight - window.innerHeight,
      behavior: 'smooth'
    });
  });
});
