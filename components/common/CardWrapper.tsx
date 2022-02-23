import { TextField } from '@mui/material';
import React from 'react';

interface CardWrapperProps {
  className?: string;
  title?: string;
  children: React.ReactChild;
  suffix?: React.ReactNode;
}
const CardWrapper = ({
  title,
  className,
  suffix,
  children,
}: CardWrapperProps) => {
  return (
    <div className={`${className} card`}>
      <div className="flex w-full items-center justify-between">
        <div>{title && <p>{title}</p>}</div>
        {suffix ?? (
          <TextField id="standard-basic" label="Search" variant="standard" />
        )}
      </div>
      {children}
    </div>
  );
};

export default CardWrapper;
