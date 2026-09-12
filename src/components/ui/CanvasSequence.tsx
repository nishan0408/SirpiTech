"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";

interface CanvasSequenceProps {
  frameCount: number;
  progress?: MotionValue<number>;
  className?: string;
}

const drawImageCentered = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;
  
  const dpr = window.devicePixelRatio || 1;
  if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.scale(dpr, dpr);
  } else {
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.scale(dpr, dpr);
  }

  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, displayWidth, displayHeight);

  const imgRatio = img.width / img.height;
  const canvasRatio = displayWidth / displayHeight;
  
  let drawWidth, drawHeight, offsetX, offsetY;

  if (imgRatio > canvasRatio) {
    drawWidth = displayWidth;
    drawHeight = displayWidth / imgRatio;
    offsetX = 0;
    offsetY = (displayHeight - drawHeight) / 2;
  } else {
    drawHeight = displayHeight;
    drawWidth = displayHeight * imgRatio;
    offsetX = (displayWidth - drawWidth) / 2;
    offsetY = 0;
  }

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
};

export default function CanvasSequence({ frameCount = 300, progress, className }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const defaultScroll = useScroll();
  const activeProgress = progress || defaultScroll.scrollYProgress;

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.decoding = 'async';
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/animation/ezgif-frame-${frameNumber}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setIsLoaded(true);
          if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx && loadedImages[0]) {
              drawImageCentered(ctx, canvasRef.current, loadedImages[0]);
            }
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount]);



  useMotionValueEvent(activeProgress, "change", (latest: number) => {
    if (!isLoaded || images.length === 0 || !canvasRef.current) return;
    
    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );
    
    const ctx = canvasRef.current.getContext("2d");
    if (ctx && images[frameIndex]) {
      requestAnimationFrame(() => {
        if (canvasRef.current && images[frameIndex]) {
          drawImageCentered(ctx, canvasRef.current, images[frameIndex]);
        }
      });
    }
  });

  return (
    <div ref={containerRef} className={className || "fixed inset-0 pointer-events-none -z-10 w-full h-full flex items-center justify-center bg-white"}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm tracking-widest font-mono z-50 bg-white">
          LOADING CORE...
        </div>
      )}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-contain"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 1s ease" }}
      />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
