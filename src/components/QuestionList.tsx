import Image from "next/image";
import React from "react";

interface Question {
  id: number;
  text: string;
  topic: string;
  type: string;
  points: number;
  options: string[];
  selectedOption: number | null; // For tracking selected option
}

interface QuestionListProps {
  questions: Question[];
}

const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div className=" mx-auto p-29 ">
      <div className="flex justify-between bg-white p-[20px] items-center mb-4">
        <span className="text-lg font-semibold">
          QUESTIONS {questions.length} / 60
        </span>

        <div className="flex gap-2 items-center justify-center ">
          <span className="flex gap-2">
            <Image src="/sort.svg" alt="sort" width={12} height={12} />
            Recorder question
          </span>
          <button className="bg-green-500 text-white flex items-center justify-center gap-2 py-2 px-4 rounded-md">
            <Image src="/add.svg" alt="sort" width={12} height={12} /> Add
            question
          </button>
        </div>
      </div>
      {questions.map((question) => (
        <div
          key={question.id}
          className="mb-6 p-4 bg-white shadow-md rounded-lg border border-gray-200"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Q. {question.id}</span>
            <div className="text-sm text-gray-500">
              <span>Topic: {question.topic}</span>
              <span className="mx-2">|</span>
              <span>Type: {question.type}</span>
              <span className="mx-2">|</span>
              <span>Points: {question.points}</span>
            </div>
          </div>

          <p className="mb-4">{question.text}</p>

          {/* Display options */}
          <div className="space-y-2 flex flex-col gap-5">
            {question.options.map((option, index) => (
              <label
                key={index}
                className={`flex gap-2 items-center cursor-pointer p-2 rounded-md ${
                  index === 1 ? "bg-green-100 text-green-700" : "" // Highlight the second option
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={index}
                  //   checked={question.selectedOption === index}
                  className="form-radio h-5 w-5 text-green-600"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
