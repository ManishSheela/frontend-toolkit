import React, { useState } from "react";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./CShape.jsx?raw";

// #region implementation
const boxes = [
  { id: 1, area: "a" },
  { id: 2, area: "b" },
  { id: 3, area: "c" },
  { id: 4, area: "d" },
  { id: 5, area: "e" },
  { id: 6, area: "f" },
  { id: 7, area: "g" },
];

const CShape = () => {
  const [selectedCells, setSelectedCells] = useState([]);
  const [isResetting, setIsResetting] = useState(false);

  const handleClick = (index) => {
    if (isResetting) return;

    if (selectedCells.includes(index)) return;

    const updated = [...selectedCells, index];

    setSelectedCells(updated);

    if (updated.length === 7) {
      resetBoxes(updated);
    }
  };

  const resetBoxes = async (clickedOrder) => {
    setIsResetting(true);

    for (const boxIndex of clickedOrder) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSelectedCells((prev) => prev.filter((item) => item !== boxIndex));
    }

    setIsResetting(false);
  };
  return (
    <>
      <LearningBox className="gap-4">
        <p className="text-white">C Shape</p>

        <div
          className="w-[300px] grid grid-cols-3 grid-rows-3 gap-2"
          style={{
            gridTemplateAreas: `
                "a b c"
                "d . ."
                "e f g"
             `,
          }}
        >
          {boxes.map((box) => (
            <div
              onClick={() => handleClick(box?.id)}
              key={box.id}
              style={{
                gridArea: box.area,
                background: selectedCells.includes(box.id) ? "green" : "",
              }}
              className="h-20 w-20 border-2 border-black cursor-pointer"
            />
          ))}
        </div>
      </LearningBox>
      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

export default CShape;
// #endregion implementation
