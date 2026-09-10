import { FC } from 'react';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: FC<CardProps> = ({
  className = '',
  children,
  header,
  footer,
}) => {
  return (
    <div className={`rounded-lg border border-bg bg-card text-card-foreground shadow-sm ${className}`}>
      {header && <div className="pb-4">{header}</div>}
      <div className="p-6">{children}</div>
      {footer && <div className="pt-4">{footer}</div>}
    </div>
  );
};