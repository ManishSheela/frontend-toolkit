import React, { useState } from "react";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./UseLocalStorageHook.jsx?raw";

// #region implementation
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      return initialValue;
    }

    try {
      return JSON.parse(storedValue);
    } catch (error) {
      console.error("Invalid localStorage value:", error);
      return initialValue;
    }
  });

  const updateValue = (data) => {
    localStorage.setItem(key, JSON.stringify(data));
    setValue(data);
  };

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return {
    value,
    updateValue,
    removeValue,
  };
};

const UseLocalStorageHook = () => {
  const { value, updateValue, removeValue } = useLocalStorage("theme", "dark");
  return (
    <>
      <LearningBox>
        <p>Current theme: {value}</p>
        <button
          onClick={() => updateValue(value === "light" ? "dark" : "light")}
        >
          Switch to {value === "light" ? "dark" : "light"} Theme
        </button>

        <button onClick={removeValue}>Reset Theme</button>
      </LearningBox>
      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

export default UseLocalStorageHook;
// #endregion implementation
