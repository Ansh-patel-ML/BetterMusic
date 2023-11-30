import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, type = "button", disabled, ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
        w-full
        rounded-full
        text-black
        bg-green-500
        px-3
        py-3
        font-bold
        border
        border-transparent
        disable:cursor-not-allowed
        disable:opacity-50
        hover:opacity-75
        transition
      `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
