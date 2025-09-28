import { forwardRef } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const VARIANT_STYLES = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600",
  secondary:
    "border border-blue-600 text-blue-700 hover:bg-blue-50 focus-visible:outline-blue-600",
  ghost:
    "text-blue-700 hover:text-blue-800 focus-visible:outline-blue-600",
};

const SIZE_STYLES = {
  md: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
  lg: "px-8 py-3 text-lg",
};

const Button = forwardRef(function Button(
  { className = "", variant = "primary", size = "md", type = "button", ...props },
  ref
) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  return (
    <button
      ref={ref}
      type={type}
      className={cn(baseStyles, VARIANT_STYLES[variant] ?? VARIANT_STYLES.primary, SIZE_STYLES[size] ?? SIZE_STYLES.md, className)}
      {...props}
    />
  );
});

export default Button;
