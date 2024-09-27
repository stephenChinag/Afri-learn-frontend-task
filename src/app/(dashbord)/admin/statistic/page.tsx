// import ChartCard from "@/components/ChartCard";
import ProgressCard from "@/components/ChartCard";
import ScorePerQuestionTopic from "@/components/ScorePerQuestionTopic";
import { scoreData } from "@/lib/data";
import Image from "next/image";
import React from "react";

function Statistics() {
  return (
    <div className="flex flex-col gap-9 p-4 md:p-[50px] w-full max-w-[1402px] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-7 items-center">
        {/* Image and title */}
        <Image
          src="/statisics-dash.svg"
          alt="statistics"
          width={20}
          height={20}
        />
        <h4 className="font-wix-madefor font-bold text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] text-gray-700 text-center">
          Class performance statistics
        </h4>
      </div>

      {/* Progress cards container */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-between">
        <ProgressCard
          current={30}
          percentage={100}
          title="Attended"
          total={30}
        />
        <ProgressCard
          current={50}
          percentage={75}
          title="Above Avg"
          total={30}
        />
        <ProgressCard title="Average score" percentage={50} />
      </div>

      {/* Score per question topic */}
      {/* <div className="text-center md:text-left">Score Per Question Topic</div> */}

      <div>
        <ScorePerQuestionTopic scoreItems={scoreData} />
      </div>
    </div>
  );
}

export default Statistics;
