import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "tailwind.config.tsinline-flex tailwind.config.tsitems-center tailwind.config.tsjustify-center tailwind.config.tswhitespace-nowrap tailwind.config.tsrounded-md tailwind.config.tstext-sm tailwind.config.tsfont-medium tailwind.config.tsring-offset-white tailwind.config.tstransition-colors focus-visible:tailwind.config.tsoutline-none focus-visible:tailwind.config.tsring-2 focus-visible:tailwind.config.tsring-slate-950 focus-visible:tailwind.config.tsring-offset-2 disabled:tailwind.config.tspointer-events-none disabled:tailwind.config.tsopacity-50 dark:tailwind.config.tsring-offset-slate-950 dark:focus-visible:tailwind.config.tsring-slate-300",
  {
    variants: {
      variant: {
        default: "tailwind.config.tsbg-slate-900 tailwind.config.tstext-slate-50 hover:tailwind.config.tsbg-slate-900/90 dark:tailwind.config.tsbg-slate-50 dark:tailwind.config.tstext-slate-900 dark:hover:tailwind.config.tsbg-slate-50/90",
        destructive:
          "tailwind.config.tsbg-red-500 tailwind.config.tstext-slate-50 hover:tailwind.config.tsbg-red-500/90 dark:tailwind.config.tsbg-red-900 dark:tailwind.config.tstext-slate-50 dark:hover:tailwind.config.tsbg-red-900/90",
        outline:
          "tailwind.config.tsborder tailwind.config.tsborder-slate-200 tailwind.config.tsbg-white hover:tailwind.config.tsbg-slate-100 hover:tailwind.config.tstext-slate-900 dark:tailwind.config.tsborder-slate-800 dark:tailwind.config.tsbg-slate-950 dark:hover:tailwind.config.tsbg-slate-800 dark:hover:tailwind.config.tstext-slate-50",
        secondary:
          "tailwind.config.tsbg-slate-100 tailwind.config.tstext-slate-900 hover:tailwind.config.tsbg-slate-100/80 dark:tailwind.config.tsbg-slate-800 dark:tailwind.config.tstext-slate-50 dark:hover:tailwind.config.tsbg-slate-800/80",
        ghost: "hover:tailwind.config.tsbg-slate-100 hover:tailwind.config.tstext-slate-900 dark:hover:tailwind.config.tsbg-slate-800 dark:hover:tailwind.config.tstext-slate-50",
        link: "tailwind.config.tstext-slate-900 tailwind.config.tsunderline-offset-4 hover:tailwind.config.tsunderline dark:tailwind.config.tstext-slate-50",
      },
      size: {
        default: "tailwind.config.tsh-10 tailwind.config.tspx-4 tailwind.config.tspy-2",
        sm: "tailwind.config.tsh-9 tailwind.config.tsrounded-md tailwind.config.tspx-3",
        lg: "tailwind.config.tsh-11 tailwind.config.tsrounded-md tailwind.config.tspx-8",
        icon: "tailwind.config.tsh-10 tailwind.config.tsw-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
