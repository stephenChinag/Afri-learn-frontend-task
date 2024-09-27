import QuestionList from "@/components/QuestionList";
import { sampleQuestions } from "@/lib/data";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-9 p-4 md:p-[50px] w-full max-w-[1402px] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-7 items-center">
        {/* Image and title */}
        <Image src="/setting.svg" alt="statistics" width={20} height={20} />
        <h4 className="font-wix-madefor font-bold text-[20px] md:text-[24px] leading-[30px] md:leading-[36px] text-gray-700 text-center">
          Test info
        </h4>
      </div>
      <div>
        <QuestionList questions={sampleQuestions} />
      </div>
    </div>
  );
}

export default page;
