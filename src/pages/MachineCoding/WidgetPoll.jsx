import { lazy, useMemo, useState } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(
  () => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./WidgetPoll.jsx?raw";

const QUESTION = "What do you think about our latest product?";

const INITIAL_OPTIONS = [
  { id: 1, title: "Amazing", votes: 350, color: "green" },
  { id: 2, title: "Good, but could be better", votes: 251, color: "blue" },
  { id: 3, title: "Neutral", votes: 250, color: "gray" },
  { id: 4, title: "Not satisfied", votes: 150, color: "red" },
];

const WidgetPoll = () => {
  const [options, setOptions] = useState(INITIAL_OPTIONS);
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  const totalVotes = useMemo(
    () => options.reduce((sum, option) => sum + option.votes, 0),
    [options],
  );

  const handleVote = (optionId) => {
    if (optionId === selectedOptionId) return;

    setOptions((prevOptions) =>
      prevOptions.map((option) => {
        if (option.id === selectedOptionId) {
          return { ...option, votes: Math.max(option.votes - 1, 0) };
        }

        if (option.id === optionId) {
          return { ...option, votes: option.votes + 1 };
        }

        return option;
      }),
    );

    setSelectedOptionId(optionId);
  };

  const handleReset = () => {
    setOptions(INITIAL_OPTIONS);
    setSelectedOptionId(null);
  };

  return (
    <>
      <LearningBox className="px-6 py-8 text-slate-900">
        <div className="w-full max-w-3xl rounded-md bg-white p-6 shadow-md">
          <h3 className="mb-6 text-[32px] font-medium tracking-[-0.04em] text-slate-900">
            {QUESTION}
          </h3>

          <div className="flex flex-col gap-3">
            {options.map((option) => {
              const percentage = (option.votes / totalVotes) * 100;
              const isSelected = option.id === selectedOptionId;

              return (
                <div
                  key={option.id}
                  className={`flex w-full cursor-pointer items-start gap-3 rounded-lg border p-3 transition ${
                    isSelected
                      ? "border-black bg-blue-50"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                  onClick={() => handleVote(option.id)}
                  role="radio"
                  tabIndex={0}
                  aria-checked={isSelected}
                >
                  {/* Radio */}
                  <input
                    type="radio"
                    id={`option-${option.id}`}
                    name="poll"
                    checked={isSelected}
                    onChange={() => handleVote(option.id)}
                    readOnly
                    className="mt-1 h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-slate-400 bg-white checked:border-blue-600 checked:bg-blue-600 focus:ring-2 focus:ring-blue-200"
                  />

                  {/* Content */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    {/* Title + percentage */}
                    <div className="flex w-full items-center justify-between gap-4">
                      <label
                        htmlFor={`option-${option.id}`}
                        className="cursor-pointer truncate text-[15px] font-medium text-slate-900"
                      >
                        {option.title}
                      </label>

                      <span className="shrink-0 text-sm font-semibold text-slate-700">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: option.color,
                        }}
                      />
                    </div>

                    {/* Votes */}
                    <span className="mt-1 text-sm text-slate-500">
                      {option.votes.toLocaleString()} votes
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center text-[15px] font-medium text-slate-500">
            {totalVotes.toLocaleString()} votes
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-100"
            >
              Reset
            </button>
          </div>
        </div>
      </LearningBox>

      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

export default WidgetPoll;
