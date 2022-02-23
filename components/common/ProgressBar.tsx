import React from 'react';

interface ProgressBarProps {
  percentage: number;
  color?: string;
}

const ProgressBar = (props: ProgressBarProps) => {
  const { percentage, color } = props;
  return (
    <div className="flex items-center">
      <div className="bg-gray-100 rounded-full relative min-h-[10px] min-w-[50px] w-full mr-3">
        <div
          style={{ width: `${percentage}%`, backgroundColor: color || '' }}
          className="absolute left-0 top-0 rounded-full bottom-0 z-50 bg-blue-500"
        ></div>
      </div>
      <p className="text-2xl font-semibold">{percentage}%</p>
    </div>
  );
};

export default ProgressBar;
