import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import React, { useMemo, useState } from "react";
import pageSource from "./VirtualizedList.jsx?raw";

// #region implementation
const ITEMS = Array.from({ length: 50000 }, (_, index) => index + 1);

const CONTAINER_HEIGHT = 550
const ITEM_HEIGHT = 50;
const overscan = 3;

const VirtualizedList = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = ITEM_HEIGHT * ITEMS.length;

  const startIndex = Math.max(
    0,
    Math.floor(scrollTop / ITEM_HEIGHT) - overscan,
  );

  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + overscan;

  const endIndex = Math.min(ITEMS.length, startIndex + visibleCount);

  const visibleItems = useMemo(() => {
    return ITEMS.slice(startIndex, endIndex);
  }, [ITEMS, startIndex, endIndex]);

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <>
      <LearningBox className="">
        <div
          style={{
            height: CONTAINER_HEIGHT,
            overflow: "auto",
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 0,
            backgroundColor: "#fafafa",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
          onScroll={handleScroll}
        >
          <div
            style={{
              height: totalHeight,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: startIndex * ITEM_HEIGHT,
              }}
            >
              {visibleItems.map((item) => (
                <div
                  key={item}
                  style={{
                    height: ITEM_HEIGHT,
                    display: "flex",
                    alignItems: "center",
                    boxSizing: "border-box",
                    paddingLeft: 16,
                    backgroundColor: item % 2 === 0 ? "#f5f5f5" : "#ffffff",
                    borderBottom: "1px solid #e0e0e0",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      item % 2 === 0 ? "#e8e8e8" : "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      item % 2 === 0 ? "#f5f5f5" : "#ffffff")
                  }
                >
                  <span
                    style={{ fontSize: 14, fontWeight: 500, color: "#333" }}
                  >
                    Item {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </LearningBox>
      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

export default VirtualizedList;
// #endregion implementation
