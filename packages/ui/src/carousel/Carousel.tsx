"use client";

import { cn } from "@repo/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  useState,
  useCallback,
  useEffect,
  useRef,
  ReactNode,
  forwardRef,
  HTMLAttributes,
} from "react";

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  autoplay?: boolean;
  interval?: number;
  loop?: boolean;
  showIndicators?: boolean;
  showControls?: boolean;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      autoplay = false,
      interval = 5000,
      loop = true,
      showIndicators = true,
      showControls = true,
      className,
      ...props
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const childrenArray = Array.isArray(children) ? children : [children];
    const totalSlides = childrenArray.length;

    const goTo = useCallback(
      (index: number) => {
        if (loop) {
          setCurrentIndex(((index % totalSlides) + totalSlides) % totalSlides);
        } else {
          setCurrentIndex(Math.max(0, Math.min(index, totalSlides - 1)));
        }
      },
      [totalSlides, loop],
    );

    const next = useCallback(
      () => goTo(currentIndex + 1),
      [currentIndex, goTo],
    );
    const prev = useCallback(
      () => goTo(currentIndex - 1),
      [currentIndex, goTo],
    );

    useEffect(() => {
      if (!autoplay) return;
      const timer = setInterval(next, interval);
      return () => clearInterval(timer);
    }, [autoplay, interval, next]);

    const handlePointerDown = (e: React.PointerEvent) => {
      setIsDragging(true);
      setStartX(e.clientX);
    };

    const handlePointerMove = (_e: React.PointerEvent) => {
      if (!isDragging) return;
    };

    const handlePointerUp = (e: React.PointerEvent) => {
      if (!isDragging) return;
      setIsDragging(false);
      const diff = startX - e.clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
      }
    };

    return (
      <div ref={ref} className={cn("relative w-full", className)} {...props}>
        <div
          ref={containerRef}
          className="overflow-hidden rounded-lg"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={() => setIsDragging(false)}
        >
          <div
            className="flex transition-transform duration-fast ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {childrenArray.map((child, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${totalSlides}`}
              >
                {child}
              </div>
            ))}
          </div>
        </div>

        {showControls && totalSlides > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-surface/80 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!loop && currentIndex === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-surface/80 text-foreground shadow-md backdrop-blur-sm transition-all hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!loop && currentIndex === totalSlides - 1}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {showIndicators && totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-fast",
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-muted hover:bg-muted-foreground",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  },
);

Carousel.displayName = "Carousel";

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center justify-center p-6", className)}
      {...props}
    >
      {children}
    </div>
  ),
);

CarouselItem.displayName = "CarouselItem";
