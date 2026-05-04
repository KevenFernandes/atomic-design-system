import { cn } from "@/src/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { LucideProps, StarIcon, XIcon } from "lucide-react";

const badgeVariant = cva(
  "flex inline-flex items-center justify-center font-semibold",
  {
    variants: {
      varirant: {
        default: "",
        success: "",
        error: "",
        info: "",
        warning: "",
      },

      mode: {
        solid: "text-white",
        outline: "border-[1.5px]",
      },

      size: {
        medium: "rounded-sm p-3 text-sm",
        small: "rounded-xs px-3 py-2 text-xs",
        tiny: "rounded-xs px-2 py-1.5 text-2xs [&_svg]:w-4 [&_svg]:h-4",
      },
    },
    compoundVariants: [
      // default
      {
        varirant: "default",
        mode: "solid",
        className: "bg-primary-500",
      },
      {
        varirant: "default",
        mode: "outline",
        className: "bg-primary-50 border-primary-500 text-primary-500",
      },

      // success
      {
        varirant: "success",
        mode: "solid",
        className: "bg-success-primary",
      },
      {
        varirant: "success",
        mode: "outline",
        className:
          "bg-success-secondary border-success-primary text-success-primary",
      },

      // error
      {
        varirant: "error",
        mode: "solid",
        className: "bg-error-primary",
      },
      {
        varirant: "error",
        mode: "outline",
        className: "bg-error-secondary border-error-primary text-error-primary",
      },

      // info
      {
        varirant: "info",
        mode: "solid",
        className: "bg-info-primary",
      },
      {
        varirant: "info",
        mode: "outline",
        className: "bg-info-secondary border-info-primary text-info-primary",
      },

      // warning
      {
        varirant: "warning",
        mode: "solid",
        className: "bg-warning-primary",
      },
      {
        varirant: "warning",
        mode: "outline",
        className:
          "bg-warning-secondary border-warning-primary text-warning-primary",
      },
    ],
    defaultVariants: {
      varirant: "default",
      mode: "solid",
      size: "medium",
    },
  },
);

interface BadgeProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof badgeVariant> {
  buttonText?: string;
  icon?: React.ElementType<LucideProps>;
}

export function Badge({
  buttonText,
  icon: Icon,
  varirant,
  className,
  mode,
  size,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariant({ varirant, mode, size, className }))}>
      {Icon ? <Icon /> : <StarIcon />}
      {buttonText && (
        <>
          <span className="px-2">{buttonText}</span>
          <button className="cursor-pointer" {...props}>
            <XIcon />
          </button>
        </>
      )}
    </div>
  );
}
