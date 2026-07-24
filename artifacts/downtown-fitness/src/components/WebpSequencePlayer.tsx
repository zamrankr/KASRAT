import { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 240;
const FPS = 30;
const PAD = 5;

function framePath(i: number) {
  const n = String(i).padStart(PAD, '0');
  return `/webp_frames/frame_${n}.webp`;
}

export default function WebpSequencePlayer({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const rafRef = useRef<number>(0);
  const playingRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false })!;

    const imgs: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded === 1) {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          ctx.drawImage(img, 0, 0);
        }
      };
      img.src = framePath(i);
      imgs.push(img);
    }
    framesRef.current = imgs;

    let frame = 0;
    let lastTime = performance.now();
    const interval = 1000 / FPS;

    function tick(now: number) {
      if (!playingRef.current) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      const delta = now - lastTime;
      if (delta >= interval && loaded > 0) {
        frame = (frame + 1) % TOTAL_FRAMES;
        ctx.drawImage(framesRef.current[frame], 0, 0);
        lastTime = now - (delta % interval);
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    const observer = new IntersectionObserver(
      ([entry]) => { playingRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
