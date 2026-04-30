import { cn } from "@/src/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { LucideProps, StarIcon } from "lucide-react";

const inputVariants = cva(
  "group border-[1.5px] border-secondary-200 rounded-sm flex items-center gap-3 has-[:disabled]:text-gray-400 has-[:disabled]:bg-gray-50 has-[:disabled]:border-secondary-200",
  {
    variants: {
      intent: {
        default: "focus-within:border-primary-500 border-secondary-400",
        success: "border-success-primary",
        error: "border-error-primary",
        warning: "border-warning-primary",
        info: "border-info-primary",
      },

      mode: {
        solid: "",
        outline: "",
      },

      inputSize: {
        larger: "p-3",
        medium: "text-sm px-3 py-2 rounded-xs",
      },
    },

    compoundVariants: [
      // default
      {
        intent: "default",
        mode: "solid",
        className: "bg-secondary-100 focus-within:bg-primary-50",
      },
      {
        intent: "default",
        mode: "outline",
        className: "bg-transparent",
      },

      // success
      {
        intent: "success",
        mode: "solid",
        className: "bg-success-secondary",
      },
      {
        intent: "success",
        mode: "outline",
        className: "bg-transparent",
      },

      // error
      {
        intent: "error",
        mode: "solid",
        className: "bg-error-secondary",
      },
      {
        intent: "error",
        mode: "outline",
        className: "bg-transparent",
      },

      // warning
      {
        intent: "warning",
        mode: "solid",
        className: "bg-warning-secondary",
      },
      {
        intent: "warning",
        mode: "outline",
        className: "bg-transparent",
      },

      // info
      {
        intent: "info",
        mode: "solid",
        className: "bg-info-secondary",
      },
      {
        intent: "info",
        mode: "outline",
        className: "bg-transparent",
      },
    ],

    defaultVariants: {
      intent: "default",
      mode: "outline",
      inputSize: "larger",
    },
  },
);

interface InputTextProps
  extends
    React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  icon?: React.FC<LucideProps>;
  labelText?: string;
  helperText?: string;
}

export function InputText({
  intent,
  inputSize,
  mode,
  className,
  icon: Icon,
  labelText = "Label Text",
  helperText = "Helper Text",
  ...props
}: InputTextProps) {
  const colorTextMap = {
    default: "text-secondary-400",
    success: "text-success-primary",
    warning: "text-warning-primary",
    info: "text-info-primary",
    error: "text-error-primary",
  };

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label htmlFor={props.id} className="text-secondary-900 font-medium">
          {labelText}
        </label>
      )}

      <div className={cn(inputVariants({ intent, mode, inputSize }), "peer")}>
        {Icon ? (
          <Icon
            size={24}
            className={cn(
              cn(
                colorTextMap[intent || "default"],
                "group-has-disabled:text-secondary-300",
              ),
            )}
          />
        ) : (
          <StarIcon
            size={24}
            className={cn(
              cn(
                colorTextMap[intent || "default"],
                "group-has-disabled:text-secondary-300",
              ),
            )}
          />
        )}
        <input
          type="text"
          className={cn("w-full outline-none", className)}
          id={props.id}
          {...props}
        />
      </div>

      {helperText && (
        <span
          className={cn(
            colorTextMap[intent || "default"],
            "text-sm peer-has-disabled:text-secondary-300",
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
}
