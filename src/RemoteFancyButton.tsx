import React, { useState, CSSProperties } from 'react';

interface RippleStyle extends CSSProperties {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface Ripple {
  left: number;
  top: number;
  width: number;
  height: number;
  key: number;
}

interface RemoteFancyButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  [key: string]: any;
}

const buttonStyles: CSSProperties = {
  padding: '12px 24px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  background: 'linear-gradient(45deg, #FF6B6B, #FF8E53)',
  color: 'white',
  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
  position: 'relative',
  overflow: 'hidden',
};

const hoverStyles: CSSProperties = {
  transform: 'translateY(-2px)',
  boxShadow: '0 6px 20px rgba(255, 107, 107, 0.4)',
};

const rippleStyles: CSSProperties = {
  position: 'absolute',
  borderRadius: '50%',
  transform: 'scale(0)',
  animation: 'ripple 0.6s linear',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
};

const RemoteFancyButton: React.FC<RemoteFancyButtonProps> = ({ 
  children = 'Click Me!',
  onClick = () => {},
  className = '',
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    const ripple: Ripple = {
      left: event.clientX - button.offsetLeft - radius,
      top: event.clientY - button.offsetTop - radius,
      width: diameter,
      height: diameter,
      key: Date.now(),
    };

    setRipples([...ripples, ripple]);
    onClick(event);

    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter((r) => r.key !== ripple.key));
    }, 600);
  };

  return (
    <button
      style={{
        ...buttonStyles,
        ...(isHovered ? hoverStyles : {}),
      }}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.key}
          style={{
            ...rippleStyles,
            left: ripple.left,
            top: ripple.top,
            width: ripple.width,
            height: ripple.height,
          } as RippleStyle}
        />
      ))}
      <style>
        {`
          @keyframes ripple {
            to {
              transform: scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </button>
  );
};

export default RemoteFancyButton; 