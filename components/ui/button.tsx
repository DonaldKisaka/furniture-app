import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'default' | 'outline' | 'glow';
    size?: 'sm' | 'md' | 'lg';
  }
  


const MyButton = ({ 
    children, 
    className,
    variant = 'default',
    size = 'md',
    ...props 
  }: MyButtonProps) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-black text-white border-2 border-white hover:bg-transparent hover:text-black hover:border-white shadow-lg hover:shadow-black/30",
    outline: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white",
    glow: "bg-black text-white hover:bg-black/90 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.45)]"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };
  return (
    <>
       <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "after:absolute after:inset-0 after:rounded-full after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100",
        variant === 'default' && "after:bg-gradient-to-r after:from-black/5 after:to-transparent after:mix-blend-overlay",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
    </>
  )
}

export default MyButton;
