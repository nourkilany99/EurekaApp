import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { animate, motion, useMotionValue } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CommonCard from './CommonCard';
import './CardContainer.css';

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const CardContainer = ({ steps = [], onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const navigate = useNavigate();

  const viewportRef = useRef(null);
  const firstSlideRef = useRef(null);

  // Motion value that directly drives the carousel position.
  const x = useMotionValue(0);

  const maxIndex = steps.length - 1;

  const centerOffset = useMemo(() => {
    if (!viewportWidth || !cardWidth) return 0;
    return (viewportWidth - cardWidth) / 2;
  }, [viewportWidth, cardWidth]);

  const getXForIndex = useCallback(
    (index) => {
      if (!cardWidth) return 0;
      return centerOffset - index * cardWidth;
    },
    [cardWidth, centerOffset]
  );

  useLayoutEffect(() => {
    const measure = () => {
      const viewportEl = viewportRef.current;
      const slideEl = firstSlideRef.current;
      if (!viewportEl || !slideEl) return;

      const vW = viewportEl.getBoundingClientRect().width;
      const sW = slideEl.getBoundingClientRect().width;

      setViewportWidth(vW);
      setCardWidth(sW);
    };

    measure();

    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (!cardWidth || !viewportWidth) return;
    // Spring animate to the new card position.
    animate(x, getXForIndex(currentIndex), {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    });
  }, [currentIndex, cardWidth, viewportWidth, centerOffset, getXForIndex, x]);

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((i) => i + 1);
      return;
    }
    if (typeof onComplete === 'function') onComplete();
    // Last step -> go to Home.
    navigate('/');
  };

  const handleDragEnd = (event, info) => {
    if (!cardWidth || !viewportWidth) return;

    const velocityX = info.velocity.x;
    const offsetX = info.offset.x;

    const swipeVelocity = 300; // px/s
    const swipeDistance = 60; // px

    let target = currentIndex;

    if (velocityX < -swipeVelocity || offsetX < -swipeDistance) {
      target = currentIndex + 1; // drag left -> next
    } else if (velocityX > swipeVelocity || offsetX > swipeDistance) {
      target = currentIndex - 1; // drag right -> previous
    } else {
      // Snap to nearest card when user releases without a strong swipe.
      const raw = Math.round((centerOffset - x.get()) / cardWidth);
      target = raw;
    }

    setCurrentIndex((i) => clamp(target, 0, maxIndex));
  };

  const dragConstraints = useMemo(() => {
    if (!cardWidth || !viewportWidth) return { left: 0, right: 0 };

    // dragConstraints are relative to the element's position at drag start.
    // So we convert the absolute allowed range into "delta" values relative to currentIndex.
    const minX = getXForIndex(maxIndex);
    const maxX = getXForIndex(0);
    const currentX = getXForIndex(currentIndex);
    return { left: minX - currentX, right: maxX - currentX };
  }, [cardWidth, viewportWidth, maxIndex, currentIndex, getXForIndex]);

  return (
    <div className="onboarding-container">
      <div ref={viewportRef} className="onboarding-viewport">
        <motion.div
          className="onboarding-track"
          style={{ x }}
          drag="x"
          dragConstraints={dragConstraints}
          dragElastic={0.18}
          onDragEnd={handleDragEnd}
        >
          {steps.map((step, i) => {
            const isActive = i === currentIndex;

            return (
              <motion.div
                // Keeps each slide measured consistently for dragging math.
                ref={i === 0 ? firstSlideRef : null}
                key={step.key ?? i}
                className="onboarding-slide"
                animate={{
                  scale: isActive ? 1 : 0.95,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                style={{ zIndex: isActive ? 2 : 1 }}
              >
                <CommonCard
                  title={step.title}
                  subtitle={step.subtitle}
                  fields={step.fields}
                >
                  {step.children}
                </CommonCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <button
        type="button"
        className="onboarding-next-btn"
        onClick={handleNext}
        aria-label="Next step"
      >
        <span className="onboarding-next-arrow" />
      </button>
    </div>
  );
};

export default CardContainer;

