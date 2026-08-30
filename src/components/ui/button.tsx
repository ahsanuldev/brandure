import React from "react";
import Image from "next/image";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "light" | "dark" | "primary" | "outline";
  showIcon?: boolean;
  iconSrc?: string;
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "light",
      showIcon = true,
      iconSrc = "/arrow-right.svg",
      size = "md",
      className = "",
      ...props
    },
    ref
  ) => {
    // Base styles (no shadows, flat clean aesthetic, exact Figma dimensions)
    const baseStyles =
      "group inline-flex items-center justify-between rounded-full font-sans tracking-[-0.01em] transition-all duration-500 ease-in-out cursor-pointer select-none focus:outline-none";

    // Button container background & text styles for default and hover states
    const variantStyles = {
      light:
        "bg-accent text-text-primary hover:bg-primary hover:text-white",
      dark:
        "bg-text-primary text-white hover:bg-primary hover:text-white",
      primary:
        "bg-primary text-white hover:bg-text-primary",
      outline:
        "bg-transparent text-text-primary border border-stroke hover:bg-primary hover:text-white hover:border-primary",
    };

    // Circle Icon Background styles (transitions to dark on hover for light/dark/outline)
    const iconBgStyles = {
      light: "bg-primary group-hover:bg-text-primary",
      dark: "bg-primary group-hover:bg-text-primary",
      primary: "bg-text-primary group-hover:bg-primary",
      outline: "bg-primary group-hover:bg-text-primary",
    };

    // Size specs matching Figma (56px container height, 48px circle, 4px right padding, 32px left padding)
    const sizeStyles = {
      sm: "h-[44px] pl-5 pr-1 py-1 text-[15px] gap-3 font-medium",
      md: "h-[56px] pl-8 pr-1 py-1 text-[18px] leading-[1.5] gap-4 font-normal",
      lg: "h-[64px] pl-10 pr-1.5 py-1.5 text-[20px] leading-[1.5] gap-6 font-normal",
    };

    const iconCircleSizes = {
      sm: "w-[36px] h-[36px]",
      md: "w-[48px] h-[48px]",
      lg: "w-[52px] h-[52px]",
    };

    const iconSizes = {
      sm: 14,
      md: 18,
      lg: 20,
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        <span className="whitespace-nowrap transition-colors duration-500 ease-in-out">
          {children}
        </span>

        {showIcon && (
          <span
            className={`flex items-center justify-center rounded-full shrink-0 transition-colors duration-500 ease-in-out ${iconBgStyles[variant]} ${iconCircleSizes[size]}`}
          >
            <Image
              src={iconSrc}
              alt="arrow icon"
              width={iconSizes[size]}
              height={iconSizes[size]}
              className="w-auto h-auto"
            />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
