'use client';

import { ButtonHTMLAttributes, ReactNode, memo, useMemo } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

// Memoized spinner component to prevent re-renders
const LoadingSpinner = memo(() => (
  <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
    <circle 
      className="opacity-25" 
      cx="12" 
      cy="12" 
      r="10" 
      stroke="currentColor" 
      strokeWidth="4"
    />
    <path 
      className="opacity-75" 
      fill="currentColor" 
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
));
LoadingSpinner.displayName = 'LoadingSpinner';

const Button = memo(function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  // Memoize styles to prevent recalculation on every render
  const combinedClassName = useMemo(() => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed gpu-accelerated';
    
    const variants = {
      primary: 'bg-[#10B981] hover:bg-[#059669] text-white focus:ring-[#10B981]',
      secondary: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 focus:ring-white',
      ghost: 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:ring-gray-500',
      outline: 'border-2 border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white focus:ring-[#10B981]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    };

    return [
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth ? 'w-full' : '',
      className,
    ].join(' ');
  }, [variant, size, fullWidth, className]);

  // Memoize motion props
  const motionProps = useMemo(() => ({
    whileHover: { scale: disabled || isLoading ? 1 : 1.02 },
    whileTap: { scale: disabled || isLoading ? 1 : 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  }), [disabled, isLoading]);

  return (
    <motion.button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...motionProps}
      {...(props as any)}
    >
      {isLoading && <LoadingSpinner />}
      
      {leftIcon && !isLoading && (
        <span className="mr-2">{leftIcon}</span>
      )}
      
      {children}
      
      {rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </motion.button>
  );
});

export default Button;