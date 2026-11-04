import React, { useEffect, useRef } from "react";

export const WaterCausticsCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Micro-bubbles rising
    interface Bubble {
      x: number;
      y: number;
      radius: number;
      speed: number;
      wobble: number;
      wobbleSpeed: number;
      alpha: number;
    }

    const bubbles: Bubble[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 0.8 + 0.3,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: Math.random() * 0.03 + 0.01,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    // Mouse coordinates for gentle water ripple
    let mouseX = width / 2;
    let mouseY = height / 3;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Volumetric Sunbeams (God Rays) piercing from surface top center
      const rayCount = 7;
      for (let i = 0; i < rayCount; i++) {
        const spread = (i - rayCount / 2) * 110;
        const drift = Math.sin(time * 0.6 + i * 1.2) * 45;
        const beamX = width * 0.5 + spread + drift;
        const mouseShift = (mouseX - width * 0.5) * 0.05 * (i + 1);

        const grad = ctx.createLinearGradient(width * 0.5, 0, beamX + mouseShift, height * 0.85);
        grad.addColorStop(0, "rgba(80, 210, 255, 0.22)");
        grad.addColorStop(0.35, "rgba(0, 245, 212, 0.09)");
        grad.addColorStop(0.7, "rgba(2, 9, 21, 0.02)");
        grad.addColorStop(1, "rgba(2, 9, 21, 0)");

        ctx.beginPath();
        ctx.moveTo(width * 0.5 - 20, 0);
        ctx.lineTo(width * 0.5 + 20, 0);
        ctx.lineTo(beamX + mouseShift + 80, height * 0.85);
        ctx.lineTo(beamX + mouseShift - 80, height * 0.85);
        ctx.closePath();
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // 2. Draw Rising Ocean Bubbles
      for (const b of bubbles) {
        b.y -= b.speed;
        b.wobble += b.wobbleSpeed;
        const currentX = b.x + Math.sin(b.wobble) * 8;

        if (b.y < -10) {
          b.y = height + 10;
          b.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 240, 255, ${b.alpha * 0.4})`;
        ctx.fill();

        // Bubble rim light
        ctx.lineWidth = 0.75;
        ctx.strokeStyle = `rgba(0, 245, 212, ${b.alpha * 0.7})`;
        ctx.stroke();

        // Tiny specular glint
        ctx.beginPath();
        ctx.arc(currentX - b.radius * 0.35, b.y - b.radius * 0.35, b.radius * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.8})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1] w-full h-full mix-blend-screen"
    />
  );
};
