import React from "react";

interface ScoreItem {
  topic: string;
  percentage: number;
  current: number;
  total: number;
  color: string;
}

interface ScorePerQuestionTopicProps {
  scoreItems: ScoreItem[];
}

const ScorePerQuestionTopic: React.FC<ScorePerQuestionTopicProps> = ({
  scoreItems,
}) => {
  // Split the score items into two halves
  const halfwayIndex = Math.ceil(scoreItems.length / 2);
  const firstColumnItems = scoreItems.slice(0, halfwayIndex);
  const secondColumnItems = scoreItems.slice(halfwayIndex);

  return (
    <div className="max-w-8xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h4 className="font-semibold text-lg text-gray-800 mb-4">
        Score Per Question Topic ({scoreItems.length})
      </h4>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
        {/* First Column */}
        <div className="w-full md:w-1/2 space-y-4">
          {firstColumnItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              {/* Progress bar with text inside */}
              <div className="relative w-full h-8 bg-gray-200 rounded-md">
                <div
                  className="h-8 rounded-md"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
                {/* Centered text inside the progress bar */}
                <div className="absolute inset-0 flex items-center p-4 justify-between text-sm font-medium text-gray-900">
                  <span> {item.topic} </span>

                  <span>
                    {item.percentage}% ({item.current} / {item.total})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/2 space-y-4">
          {secondColumnItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              {/* Progress bar with text inside */}
              <div className="relative w-full h-8 bg-gray-200 rounded-md">
                <div
                  className="h-8 rounded-md"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
                {/* Centered text inside the progress bar */}
                <div className="absolute inset-0 flex items-center p-4 justify-between text-sm font-medium text-gray-900">
                  <span> {item.topic} </span>

                  <span>
                    {item.percentage}% ({item.current} / {item.total})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScorePerQuestionTopic;
