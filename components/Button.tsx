import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  icon,
  href,
  external,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-300 uppercase tracking-widest text-xs md:text-sm rounded-sm";
  
  const variants = {
    primary: "bg-royal-600 text-white hover:bg-royal-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-transparent hover:-translate-y-1",
    secondary: "bg-midnight-800 text-white hover:bg-midnight-700 border border-midnight-700 hover:border-royal-500/30",
    outline: "bg-transparent text-royal-400 border border-royal-600 hover:bg-royal-600/10 hover:text-royal-300"
  };

  const widthStyles = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthStyles} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {icon && <span>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};