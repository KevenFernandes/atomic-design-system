import { cn } from "@/src/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  // isso deve ser feito por ultimo, pois é preenchido na medida que os estilos se repetem.
  "inline-flex justify-center items-center transition-colors disabled:text-secondary-400 focus:outline-3 focus:outline-primary-200 bg-transparent rounded-sm font-semibold text-primary-500 cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 hover:bg-primary-700 active:bg-primary-800 disabled:bg-secondary-200 text-white",
        outline:
          "border-[1.5px] border-primary-500 hover:bg-primary-50 active:bg-primary-100",
        ghost: "hover:bg-primary-50 active:bg-primary-100",
      },
      size: {
        xs: "px-2 py-1.5 rounded-xs text-xxs",
        sm: "px-3 py-2 rounded-xs text-xs",
        md: "px-4 py-3 text-sm",
        lg: "px-5 py-3.5 text-base",
        xl: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
