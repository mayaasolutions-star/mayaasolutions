import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

// Web Audio API Synthesizer Class for Subtle Cinematic Sound Experience
class HeroSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private ambientOsc: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;

  constructor() {
    const savedSound = sessionStorage.getItem('mayaa_hero_sound_enabled');
    // Default muted to respect browser autoplay policies unless user previously unmuted
    this.isMuted = savedSound !== 'true';
  }

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    const newMuteState = !this.isMuted;
    this.isMuted = newMuteState;
    sessionStorage.setItem('mayaa_hero_sound_enabled', newMuteState ? 'false' : 'true');

    if (newMuteState) {
      if (this.ambientGain && this.ctx) {
        this.ambientGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.1);
      }
    } else {
      this.initCtx();
      this.startAmbient();
    }
    return this.isMuted;
  }

  // 0.0 - 1.5s: Subtle dark ambient atmosphere drone
  public startAmbient() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      if (this.ambientOsc) return;

      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(55, this.ctx.currentTime); // Low 55Hz sub tone

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(110, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.025, this.ctx.currentTime + 2.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      this.ambientOsc = osc;
      this.ambientGain = gain;
    } catch {
      // Autoplay policy fallback
    }
  }

  // Typewriter key click sound per character
  public playKeyClick() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.012);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1900 + (Math.random() * 400 - 200), now);
      filter.Q.setValueAtTime(3.5, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
    } catch {
      // Autoplay policy fallback
    }
  }

  // 4.8s: Cinematic rising whoosh
  public playWhoosh() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const duration = 0.65;
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, now);
      filter.frequency.exponentialRampToValueAtTime(750, now + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.028, now + duration * 0.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
    } catch {
      // Autoplay policy fallback
    }
  }

  // 5.3s: Low cinematic impact reveal
  public playImpact() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(85, now);
      osc.frequency.exponentialRampToValueAtTime(38, now + 0.6);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.7);
    } catch {
      // Autoplay policy fallback
    }
  }

  // 6.2s: Soft UI confirmation click
  public playUIConfirmation() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.setValueAtTime(1320, now + 0.035);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // Autoplay policy fallback
    }
  }

  public stopAll() {
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setValueAtTime(0, this.ctx.currentTime);
    }
    if (this.ambientOsc) {
      try {
        this.ambientOsc.stop();
      } catch {}
      this.ambientOsc = null;
    }
  }
}

export const Hero: React.FC<HeroProps> = () => {
  const line1Full = 'Want to build a brand?';
  const line2Full = 'A digital experience?';
  const line3Full = 'A better business system?';

  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [line3, setLine3] = useState('');

  const [activeCursorLine, setActiveCursorLine] = useState<number | null>(1);
  const [transitionStarted, setTransitionStarted] = useState(false);
  const [mainStatementRevealed, setMainStatementRevealed] = useState(false);
  const [ctaRevealed, setCtaRevealed] = useState(false);

  // Sound Engine Instance
  const soundEngineRef = useRef<HeroSoundEngine | null>(null);
  if (!soundEngineRef.current) {
    soundEngineRef.current = new HeroSoundEngine();
  }
  const [isMuted, setIsMuted] = useState(soundEngineRef.current.getIsMuted());

  const toggleSound = () => {
    if (soundEngineRef.current) {
      const newMuted = soundEngineRef.current.toggleMute();
      setIsMuted(newMuted);
    }
  };

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    const soundEngine = soundEngineRef.current;

    // 0.0s: Ambient atmosphere sound starts
    if (soundEngine) {
      soundEngine.startAmbient();
    }

    // Line 1 typing: 0ms to 1100ms
    const charDelay1 = 1100 / line1Full.length;
    for (let i = 1; i <= line1Full.length; i++) {
      timeoutIds.push(
        setTimeout(() => {
          setLine1(line1Full.slice(0, i));
          if (soundEngine) soundEngine.playKeyClick();
        }, i * charDelay1)
      );
    }

    // Switch cursor to line 2 at 1500ms
    timeoutIds.push(
      setTimeout(() => {
        setActiveCursorLine(2);
      }, 1500)
    );

    // Line 2 typing: 1500ms to 2550ms
    const charDelay2 = 1050 / line2Full.length;
    for (let i = 1; i <= line2Full.length; i++) {
      timeoutIds.push(
        setTimeout(() => {
          setLine2(line2Full.slice(0, i));
          if (soundEngine) soundEngine.playKeyClick();
        }, 1500 + i * charDelay2)
      );
    }

    // Switch cursor to line 3 at 2800ms
    timeoutIds.push(
      setTimeout(() => {
        setActiveCursorLine(3);
      }, 2800)
    );

    // Line 3 typing: 2800ms to 3970ms
    const charDelay3 = 1170 / line3Full.length;
    for (let i = 1; i <= line3Full.length; i++) {
      timeoutIds.push(
        setTimeout(() => {
          setLine3(line3Full.slice(0, i));
          if (soundEngine) soundEngine.playKeyClick();
        }, 2800 + i * charDelay3)
      );
    }

    // Remove active cursor at 4200ms
    timeoutIds.push(
      setTimeout(() => {
        setActiveCursorLine(null);
      }, 4200)
    );

    // 4.8s: Questions shift upward & dim + cinematic whoosh sound
    timeoutIds.push(
      setTimeout(() => {
        setTransitionStarted(true);
        if (soundEngine) soundEngine.playWhoosh();
      }, 4800)
    );

    // 5.3s: Reveal "We build it." + low cinematic impact sound
    timeoutIds.push(
      setTimeout(() => {
        setMainStatementRevealed(true);
        if (soundEngine) soundEngine.playImpact();
      }, 5300)
    );

    // 6.2s: Reveal CTA "Let's Build ->" + soft UI confirmation sound
    timeoutIds.push(
      setTimeout(() => {
        setCtaRevealed(true);
        if (soundEngine) soundEngine.playUIConfirmation();
      }, 6200)
    );

    return () => {
      timeoutIds.forEach(clearTimeout);
      if (soundEngine) soundEngine.stopAll();
    };
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] bg-black text-white flex flex-col justify-center items-center overflow-hidden select-none">
      {/* Subtle monochrome cursor tracking glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(850px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.035), transparent 75%)`,
        }}
      />

      {/* Main Centered Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 mx-auto flex flex-col items-center justify-center text-center">

        {/* STEP 1 & 2: Questions Block (Scaled up by ~1.5x for strong legibility and presence) */}
        <motion.div
          animate={{
            y: transitionStarted ? -24 : 0,
            opacity: transitionStarted ? 0.4 : 1,
            scale: transitionStarted ? 0.97 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 sm:space-y-4 md:space-y-5 font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl text-neutral-100 tracking-tight leading-relaxed font-normal"
        >
          <div className="min-h-[1.5em] flex items-center justify-center">
            <span>{line1}</span>
            {activeCursorLine === 1 && (
              <span className="inline-block w-[3px] h-[1.05em] bg-white ml-2 align-middle animate-blink" />
            )}
          </div>

          <div className="min-h-[1.5em] flex items-center justify-center">
            <span>{line2}</span>
            {activeCursorLine === 2 && (
              <span className="inline-block w-[3px] h-[1.05em] bg-white ml-2 align-middle animate-blink" />
            )}
          </div>

          <div className="min-h-[1.5em] flex items-center justify-center">
            <span>{line3}</span>
            {activeCursorLine === 3 && (
              <span className="inline-block w-[3px] h-[1.05em] bg-white ml-2 align-middle animate-blink" />
            )}
          </div>
        </motion.div>

        {/* STEP 3: Main Statement ("WE BUILD IT." / "We build it.") */}
        <div className="mt-8 sm:mt-12 md:mt-14 min-h-[1.2em] flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{
              opacity: mainStatementRevealed ? 1 : 0,
              y: mainStatementRevealed ? 0 : 32,
              scale: mainStatementRevealed ? 1 : 0.97,
            }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-none select-none font-sans"
            style={{
              letterSpacing: '-0.04em',
            }}
          >
            We build it.
          </motion.h1>
        </div>

        {/* STEP 4: CTA Button ("Let's Build →") */}
        <div className="mt-10 sm:mt-12 md:mt-14 min-h-[3.5rem] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: ctaRevealed ? 1 : 0,
              y: ctaRevealed ? 0 : 20,
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/business-tools"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-9 sm:py-4 bg-white text-black font-extrabold text-sm sm:text-base tracking-wide rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:shadow-[0_0_45px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <span>Let's Build</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

      </div>

      {/* AUDIO UX: Minimal Sound Toggle Button */}
      <button
        onClick={toggleSound}
        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300 text-white text-xs font-mono uppercase tracking-wider group shadow-lg cursor-pointer"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            <span className="text-neutral-400 group-hover:text-white transition-colors hidden sm:inline">
              Sound Off
            </span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-white animate-pulse" />
            <span className="text-white hidden sm:inline">Sound On</span>
          </>
        )}
      </button>
    </section>
  );
};
