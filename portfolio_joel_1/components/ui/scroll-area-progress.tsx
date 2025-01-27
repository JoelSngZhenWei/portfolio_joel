"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

const ScrollAreaWithProgress = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const viewportRef = React.useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    const viewport = viewportRef.current
    if (viewport) {
      const scrollTop = viewport.scrollTop
      const scrollHeight = viewport.scrollHeight
      const clientHeight = viewport.clientHeight
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
      setScrollProgress(progress)
    }
  }

  return (
    <ScrollAreaPrimitive.Root ref={ref} className={cn("relative overflow-auto", className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        className="h-full w-full rounded-[inherit]"
        ref={viewportRef}
        onScroll={handleScroll}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent/20" aria-hidden="true">
        <div
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </ScrollAreaPrimitive.Root>
  )
})
ScrollAreaWithProgress.displayName = "ScrollAreaWithProgress"

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className="relative flex-1 rounded-full bg-accent"
      style={{ opacity: 1, visibility: "visible" }} // Ensure thumb is always visible
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollAreaWithProgress, ScrollBar }

