import { Button } from "./ui/button";
import Link from "next/link";
import { SplineModel } from "./SplineModel";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Spline 3D model container */}
      <SplineModel />

      {/* Content positioned above the 3D model */}
      <div className="text-center z-10 max-w-4xl relative animate-fade-in-up opacity-0">
        <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">MICHEL HERRERA {"{"}</h5>
        <h1 className="hero-title font-bold mb-8">&lt;Software Engineer/&gt;</h1>
        <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-16">{"}"}</h5>

        <Link href="#about">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 border-neutral-700 hover:bg-neutral-800 animate-fade-in-up opacity-0 animate-delay-200"
          >
            View My Work
          </Button>
        </Link>
      </div>
    </section>
  );
}
