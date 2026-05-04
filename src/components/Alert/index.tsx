import { cn } from "@/src/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { LucideProps } from "lucide-react";

const alertVariants = cva(
  "flex gap-4 p-4 rounded-sm text-white border-[1.5px]",
  {
    variants: {
      variant: {
        default: "bg-primary-500",
        success: "bg-success-primary",
        info: "bg-info-primary",
        warning: "bg-warning-primary",
        error: "bg-error-primary",
      },
      mode: {
        solid: "border-transparent",
        outline:
          "[&_h1]:text-black [&_p]:text-secondary-500 [&_button:last-child]:text-secondary-400 [&_button:last-child]:opacity-100",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        mode: "outline",
        className:
          "bg-primary-50 border-primary-500 [&_svg]:text-primary-500 [&_button:first-child]:text-primary-500",
      },
      {
        variant: "success",
        mode: "outline",
        className:
          "bg-success-secondary border-success-primary [&_svg]:text-success-primary [&_button:first-child]:text-success-primary",
      },
      {
        variant: "info",
        mode: "outline",
        className:
          "bg-info-secondary border-info-primary [&_svg]:text-info-primary [&_button:first-child]:text-info-primary",
      },
      {
        variant: "warning",
        mode: "outline",
        className:
          "bg-warning-secondary border-warning-primary [&_svg]:text-warning-primary [&_button:first-child]:text-warning-primary",
      },
      {
        variant: "error",
        mode: "outline",
        className:
          "bg-error-secondary border-error-primary [&_svg]:text-error-primary [&_button:first-child]:text-error-primary",
      },
    ],
  },
);

interface AlertProps extends VariantProps<typeof alertVariants> {
  title: string;
  description: string;
  icon: React.ElementType<LucideProps>;
}

export function Alert({
  variant,
  mode,
  title,
  description,
  icon: Icon,
}: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant, mode }))}>
      <div>{<Icon />}</div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold leading-none">{title}</h1>
          <p className="text-xs font-normal">{description}</p>
        </div>
        <div className="flex gap-4 font-semibold [&_button]:cursor-pointer">
          <button>Button</button>
          <button className="opacity-60">Button</button>
        </div>
      </div>
    </div>
  );
}
