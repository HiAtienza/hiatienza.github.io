"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { projects, route, slugs, type Locale } from "@/lib/site-data";

type Point = { x: number; y: number; vx: number; vy: number; radius: number; phase: number };

export function SignalField({ locale }: { locale: Locale }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    let animationFrame = 0;
    let visible = true;
    let width = 0;
    let height = 0;
    let pointerX = -1000;
    let pointerY = -1000;

    const count = window.innerWidth < 700 ? 20 : 54;
    const points: Point[] = Array.from({ length: count }, (_, index) => ({
      x: ((index * 47) % 101) / 100,
      y: ((index * 31 + 13) % 97) / 100,
      vx: ((index % 5) - 2) * 0.000025,
      vy: ((index % 7) - 3) * 0.000018,
      radius: index % 9 === 0 ? 2.4 : 1.35,
      phase: index * 0.73
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const density = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.round(width * density);
      canvas.height = Math.round(height * density);
      context.setTransform(density, 0, 0, density, 0, 0);
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      context.lineWidth = 0.7;

      for (let i = 0; i < points.length; i += 1) {
        const point = points[i];
        if (!reducedMotion.matches) {
          point.x += point.vx;
          point.y += point.vy;
          if (point.x < 0.02 || point.x > 0.98) point.vx *= -1;
          if (point.y < 0.02 || point.y > 0.98) point.vy *= -1;
        }
        const x = point.x * width;
        const y = point.y * height;
        const distance = Math.hypot(pointerX - x, pointerY - y);
        const influence = coarsePointer.matches ? 0 : Math.max(0, 1 - distance / 150);
        const pulse = reducedMotion.matches ? 0 : Math.sin(time * 0.00065 + point.phase) * 0.35;

        for (let j = i + 1; j < points.length; j += 1) {
          const other = points[j];
          const ox = other.x * width;
          const oy = other.y * height;
          const gap = Math.hypot(x - ox, y - oy);
          if (gap < 96) {
            context.strokeStyle = `rgba(57, 118, 168, ${0.18 * (1 - gap / 96)})`;
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(ox, oy);
            context.stroke();
          }
        }

        context.fillStyle = influence > 0 ? "rgba(228, 134, 90, .9)" : "rgba(57, 118, 168, .58)";
        context.beginPath();
        context.arc(x, y, point.radius + pulse + influence * 1.8, 0, Math.PI * 2);
        context.fill();
      }

      if (!reducedMotion.matches && visible) animationFrame = requestAnimationFrame(draw);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
    };
    const onPointerLeave = () => {
      pointerX = -1000;
      pointerY = -1000;
    };
    const onResize = () => {
      resize();
      if (reducedMotion.matches) draw();
    };
    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      cancelAnimationFrame(animationFrame);
      if (visible) draw();
    };
    const onMotionChange = () => {
      cancelAnimationFrame(animationFrame);
      draw();
    };

    resize();
    draw();
    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  const nodeLabels =
    locale === "en" ? ["Coordinate", "Learn", "Reflect"] : ["Coordinar", "Aprender", "Reflexionar"];
  const concepts =
    locale === "en"
      ? ["Behavior", "Learning", "Evidence", "Decisions"]
      : ["Conducta", "Aprendizaje", "Evidencia", "Decisiones"];

  return (
    <div className="signal-field">
      <canvas ref={canvasRef} aria-hidden="true" />
      <p className="signal-kicker" aria-hidden="true">
        Human signals <span>→</span> useful systems
      </p>
      <ul
        className="signal-concepts"
        aria-label={
          locale === "en"
            ? "Concepts linking human signals to useful systems"
            : "Conceptos que conectan señales humanas con sistemas útiles"
        }
      >
        {concepts.map((concept) => (
          <li key={concept}>{concept}</li>
        ))}
      </ul>
      <div
        className="signal-route"
        aria-label={locale === "en" ? "Featured projects" : "Proyectos destacados"}
      >
        {slugs.map((slug, index) => (
          <Link
            key={slug}
            className={`signal-node signal-node-${index + 1}`}
            href={route(locale, `/projects/${slug}/`)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{nodeLabels[index]}</strong>
            <small>{projects[locale][slug].name}</small>
          </Link>
        ))}
      </div>
    </div>
  );
}
