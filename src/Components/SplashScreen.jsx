import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import logoIcon from '../Assets/logo-icon.svg';

/*
 * Animation timeline
 * ─────────────────────────────────────────────────
 * 0 ms      Logo fades in + starts spin + pulse
 * 2200 ms   Dramatic zoom-in begins (logo fills screen)
 * 3000 ms   Navigate to "/" while still zoomed in
 * ─────────────────────────────────────────────────
 */

const LOGO_SIZE        = 130;   // px — resting size
const SPIN_DURATION    = 2.2;   // s  — one full rotation
const PULSE_DURATION   = 1.4;   // s  — one pulse cycle
const ZOOM_START_DELAY = 2200;  // ms — when zoom-in fires
const NAV_DELAY        = 3000;  // ms — when we navigate away

/* How large the logo needs to grow to visually cover the viewport.
   vmax-based scale: 200vmax / LOGO_SIZE gives a comfortable overdrive. */
const ZOOM_SCALE = `calc(200vmax / ${LOGO_SIZE}px)`;

const SplashScreen = () => {
  const navigate          = useNavigate();
  const [zooming, setZooming] = useState(false);

  useEffect(() => {
    /* Start the dramatic zoom-in */
    const zoomTimer = setTimeout(() => setZooming(true), ZOOM_START_DELAY);

    /* Navigate after the zoom covers the screen */
    const navTimer  = setTimeout(() => navigate('/'), NAV_DELAY);

    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    /* ── Full-screen backdrop ─────────────────────────────────── */
    <motion.div
      style={styles.backdrop}
      /* Fade the whole backdrop out just before nav so there's
         no flash when the new page mounts */
      animate={zooming ? { opacity: 0 } : { opacity: 1 }}
      transition={zooming
        ? { duration: 0.35, delay: 0.45, ease: 'easeInOut' }
        : { duration: 0 }
      }
    >
      {/* ── Logo ──────────────────────────────────────────────── */}
      <motion.img
        src={logoIcon}
        alt="App logo"
        style={{ width: LOGO_SIZE, height: LOGO_SIZE, ...styles.logo }}

        /* 1. Entrance fade-in */
        initial={{ opacity: 0, scale: 0.6 }}
        animate={zooming
          /* 3. Dramatic full-screen zoom */
          ? {
              opacity  : 1,
              scale    : ZOOM_SCALE,
              rotate   : 0,
            }
          /* 2. Idle: spin + pulse (composited via separate variants) */
          : {
              opacity  : 1,
              scale    : [1, 1.12, 1],          // pulse
              rotate   : [0, 360],              // continuous spin
            }
        }
        transition={zooming
          ? {
              scale   : { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
              opacity : { duration: 0.2,  ease: 'easeIn' },
              rotate  : { duration: 0 },
            }
          : {
              opacity : { duration: 0.5, ease: 'easeOut' },
              scale   : {
                duration  : PULSE_DURATION,
                ease      : 'easeInOut',
                repeat    : Infinity,
                repeatType: 'loop',
              },
              rotate  : {
                duration  : SPIN_DURATION,
                ease      : 'linear',
                repeat    : Infinity,
                repeatType: 'loop',
              },
            }
        }
      />
    </motion.div>
  );
};

/* ── Styles ───────────────────────────────────────────────────── */
const styles = {
  backdrop: {
    position       : 'fixed',
    inset          : 0,
    backgroundColor: '#141414',
    display        : 'flex',
    alignItems     : 'center',
    justifyContent : 'center',
    zIndex         : 9999,
    overflow       : 'hidden',
  },
  logo: {
    display        : 'block',
    objectFit      : 'contain',
    willChange     : 'transform',
  },
};

export default SplashScreen;
