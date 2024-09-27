"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

// Dynamically import CircularProgressbar for client-side rendering
const CircularProgressbar = dynamic(
  () =>
    import("react-circular-progressbar").then((mod) => mod.CircularProgressbar),
  { ssr: false }
);
import "react-circular-progressbar/dist/styles.css";

interface ProgressCardProps {
  title: string;
  percentage: number;
  total: number;
  current: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  percentage,
  total,
  current,
}) => {
  return (
    <div className="w-full max-w-[300px] md:max-w-[350px] h-auto bg-white shadow-lg flex flex-col md:flex-row items-center justify-between rounded-lg p-4 md:p-6">
      {/* Title */}
      <div className="text-gray-500 font-medium mb-4 flex h-full md:h-auto md:mb-0">
        <h4 className="text-base md:text-lg">{title}</h4>
      </div>

      {/* Circular Progress Bar */}
      <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]">
        <CircularProgressbarWithChildren
          value={percentage}
          backgroundPadding={6} // Adjust as necessary
          circleRatio={0.75} // Adjust as necessary
        >
          <div className="text-gray-400 mt-2 flex flex-col justify-center gap-2 text-center text-xs md:text-sm">
            <h1 className="font-semibold text-[20px] md:text-[25px] leading-[30px] md:leading-[36px]">
              {percentage}%
            </h1>
            {current !== undefined && total !== undefined && (
              <span>{`${current} / ${total}`}</span>
            )}
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default ProgressCard;
