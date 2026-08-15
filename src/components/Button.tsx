import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'gold-outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = false,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-full cursor-pointer relative overflow-hidden group';
  
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs sm:text-sm gap-1.5',
    md: 'px-7 py-3.5 text-sm sm:text-base gap-2',
    lg: 'px-9 py-4 text-base sm:text-lg gap-2.5 shadow-xl',
  };

  const variantStyles = {
    primary: 'bg-studio-100 text-studio-950 hover:bg-studio-200 shadow-md font-extrabold uppercase tracking-wider text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 active:scale-[0.98]',
    outline: 'border border-studio-100 bg-white text-studio-100 hover:bg-studio-900 font-semibold uppercase tracking-wider text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 active:scale-[0.98]',
    'gold-outline': 'border border-studio-850 bg-white text-studio-100 hover:bg-studio-900 font-semibold uppercase tracking-wider text-xs sm:text-sm transition-all transform hover:-translate-y-0.5 active:scale-[0.98]',
    ghost: 'text-studio-400 hover:text-studio-100 hover:bg-studio-900 font-semibold text-xs sm:text-sm transition-all',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};
