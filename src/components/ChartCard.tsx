"use client";

import dynamic from "next/dynamic";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

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
  // Determine color based on percentage
  const getColor = (percentage: number) => {
    if (percentage >= 75) return "#00FF00"; // Green for 100% and 75%
    if (percentage >= 50) return "#FFD700"; // Yellow for 50%
    return "#FF0000"; // Red for below 50%
  };

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
          circleRatio={1} // Keep gray background circle always complete
          styles={buildStyles({
            pathColor: getColor(percentage), // Dynamic path color
            trailColor: "#d6d6d6", // Gray background
            strokeLinecap: "round", // Make the ends of the progress path rounded
            rotation: 0, // Make sure the path starts at the top
          })}
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
