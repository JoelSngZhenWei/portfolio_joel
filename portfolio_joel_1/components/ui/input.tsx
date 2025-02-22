import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[30px] lg:h-[48px] rounded-md border border-primary-foreground/10 focus:border-accent font-light bg-primary px-4 py-4 lg:py-5  placeholder:text-primary-foreground/60 outline-none w-full text-sm lg:text-base",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
