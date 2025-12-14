import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-cyan-600 text-white hover:bg-cyan-700 shadow-lg shadow-cyan-600/25",
        secondary:
          "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200",
        success:
          "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/25",
        warning:
          "bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-500/25",
        ghost: "hover:bg-slate-100 text-slate-600 hover:text-slate-900",
        link: "text-cyan-600 underline-offset-4 hover:underline",
        outline:
          "border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
