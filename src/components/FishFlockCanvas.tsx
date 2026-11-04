import React, { useEffect, useRef } from "react";

// Fish Swarm / Flocking Physics adapted from Arsenal repo: Image-Flock
export const FishFlockCanvas: React.FC = () => {
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

    // Flocking parameters
    interface MarineFish {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      finColor: string;
      wiggle: number;
      wiggleSpeed: number;
      glowIntensity: number;
    }

    const fishPalette = [
      { body: "#ff5e36", fin: "#ff9f1c", glow: "rgba(255, 94, 54, 0.45)" }, // Fire clownfish
      { body: "#e61c78", fin: "#f72585", glow: "rgba(230, 28, 120, 0.45)" }, // Magenta Anthias
      { body: "#00f5d4", fin: "#70e000", glow: "rgba(0, 245, 212, 0.45)" }, // Cyan Damselfish
      { body: "#ffd166", fin: "#f48c06", glow: "rgba(255, 209, 102, 0.4)" }, // Gold Tang
      { body: "#7209b7", fin: "#4cc9f0", glow: "rgba(114, 9, 183, 0.45)" }, // Royal Gramma
    ];

    const fishCount = 26;
    const fishes: MarineFish[] = Array.from({ length: fishCount }, (_, i) => {
      const palette = fishPalette[i % fishPalette.length];
      return {
        x: Math.random() * width,
        y: height * 0.45 + Math.random() * (height * 0.5),
        vx: -(Math.random() * 1.6 + 0.8), // Swim generally leftward as in reference
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 9 + 11,
        color: palette.body,
        finColor: palette.fin,
        wiggle: Math.random() * Math.PI * 2,
        wiggleSpeed: Math.random() * 0.15 + 0.1,
        glowIntensity: Math.random() * 0.4 + 0.6,
      };
    });

    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < fishes.length; i++) {
        const f = fishes[i];
        f.wiggle += f.wiggleSpeed;

        // Mouse avoidance & curiosity
        const dx = mouseX - f.x;
        const dy = mouseY - f.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 180) {
          // Gently dart away
          f.vx -= (dx / dist) * 0.25;
          f.vy -= (dy / dist) * 0.25;
        }

        // Flock cohesion (gentle centering towards neighbors)
        const neighbor = fishes[(i + 1) % fishes.length];
        f.vx += (neighbor.vx - f.vx) * 0.02;
        f.vy += (neighbor.vy - f.vy) * 0.02;

        // Apply speed limits
        const speed = Math.hypot(f.vx, f.vy);
        const maxSpeed = 3.2;
        const minSpeed = 0.9;
        if (speed > maxSpeed) {
          f.vx = (f.vx / speed) * maxSpeed;
          f.vy = (f.vy / speed) * maxSpeed;
        } else if (speed < minSpeed) {
          f.vx = (f.vx / speed) * minSpeed;
        }

        // Natural undulating drift
        f.vy += Math.sin(f.wiggle * 0.5) * 0.04;

        // Move fish
        f.x += f.vx;
        f.y += f.vy;

        // Wrap around screen horizontally
        if (f.x < -60) {
          f.x = width + 60;
          f.y = height * 0.35 + Math.random() * (height * 0.6);
        }
        if (f.x > width + 60) f.x = -60;
        if (f.y < height * 0.15) f.vy += 0.1;
        if (f.y > height * 0.95) f.vy -= 0.1;

        // Angle of orientation
        const angle = Math.atan2(f.vy, f.vx);

        // Draw Bioluminescent Fish
        ctx.save();
        ctx.translate(f.x, f.y);
        ctx.rotate(angle);

        // Bioluminescent aura
        ctx.shadowBlur = 14;
        ctx.shadowColor = f.color;

        // Tail fin (undulating with wiggle)
        const tailOffset = Math.sin(f.wiggle) * 4;
        ctx.beginPath();
        ctx.moveTo(-f.size * 0.8, 0);
        ctx.lineTo(-f.size * 1.5, -f.size * 0.55 + tailOffset);
        ctx.lineTo(-f.size * 1.25, 0);
        ctx.lineTo(-f.size * 1.5, f.size * 0.55 + tailOffset);
        ctx.closePath();
        ctx.fillStyle = f.finColor;
        ctx.fill();

        // Dorsal & Pectoral fins
        ctx.beginPath();
        ctx.moveTo(-f.size * 0.2, -f.size * 0.4);
        ctx.quadraticCurveTo(0, -f.size * 0.8, f.size * 0.3, -f.size * 0.3);
        ctx.fillStyle = f.finColor;
        ctx.fill();

        // Fish Body (streamlined torpedo shape)
        ctx.beginPath();
        ctx.ellipse(0, 0, f.size, f.size * 0.46, 0, 0, Math.PI * 2);
        ctx.fillStyle = f.color;
        ctx.fill();

        // Eye
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(f.size * 0.55, -f.size * 0.12, f.size * 0.14, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(f.size * 0.58, -f.size * 0.12, f.size * 0.07, 0, Math.PI * 2);
        ctx.fillStyle = "#020915";
        ctx.fill();

        // Bioluminescent horizontal stripe
        ctx.beginPath();
        ctx.moveTo(-f.size * 0.7, 0);
        ctx.quadraticCurveTo(0, f.size * 0.15, f.size * 0.4, 0);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.restore();
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
      className="pointer-events-none fixed inset-0 z-[2] w-full h-full"
    />
  );
};
