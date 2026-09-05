import { lazy } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";

const CodeDisplay = lazy(
  () => import("@/src/components/molecules/CodeDisplay"),
);
import pageSource from "./Currying.jsx?raw";

// #region implementation
// ============================================================
// Q1. Basic Currying
// ============================================================

const basicAdd = (first) => {
  return (second) => {
    return (third) => {
      return first + second + third;
    };
  };
};

const basicCurryingResult = basicAdd(1)(2)(3);

// ============================================================
// Q2. Generic curry() implementation
// ============================================================

const add = (first, second, third) => first + second + third;

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return function (...nextArgs) {
      return curried(...args, ...nextArgs);
    };
  };
}

const curriedAdd = curry(add);

const genericCurryingResult = curriedAdd(1)(2)(3);

// ============================================================
// Q3. Curry with multiple arguments per call
// ============================================================

const multipleArgumentsResults = [
  curriedAdd(1)(2)(3),
  curriedAdd(1, 2)(3),
  curriedAdd(1)(2, 3),
  curriedAdd(1, 2, 3),
];

// ============================================================
// Q4. Infinite Currying
// ============================================================

function sum(first) {
  return function (next) {
    if (next === undefined) {
      return first;
    }

    return sum(first + next);
  };
}

const infiniteCurryingResult = sum(1)(2)(3)(4)();

// ============================================================
// Q5. Uncurry
// ============================================================

function uncurry(fn) {
  return function (...args) {
    let result = fn;

    for (const arg of args) {
      result = result(arg);
    }

    return result;
  };
}

const uncurriedAdd = uncurry(curry(add));

const uncurryResult = uncurriedAdd(1, 2, 3);
// #endregion implementation

// ============================================================
// Component
// ============================================================

const Currying = () => {
  return (
    <>
      <LearningBox className="gap-3 shadow-xs text-white text-sm text-left">
        <p>
          <strong>Currying Interview Questions</strong>
        </p>

        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Q1. Basic Currying:</strong> <code>basicAdd(1)(2)(3)</code>{" "}
            → {basicCurryingResult}
          </li>

          <li>
            <strong>Q2. Generic curry():</strong>{" "}
            <code>curriedAdd(1)(2)(3)</code> → {genericCurryingResult}
          </li>

          <li>
            <strong>Q3. Multiple arguments per call:</strong>
            <br />
            <code>curriedAdd(1)(2)(3)</code>
            <br />
            <code>curriedAdd(1, 2)(3)</code>
            <br />
            <code>curriedAdd(1)(2, 3)</code>
            <br />
            <code>curriedAdd(1, 2, 3)</code>
            <br />
            All return: {multipleArgumentsResults.join(", ")}
          </li>

          <li>
            <strong>Q4. Infinite Currying:</strong>{" "}
            <code>sum(1)(2)(3)(4)()</code> → {infiniteCurryingResult}
          </li>

          <li>
            <strong>Q5. Uncurry:</strong> <code>uncurriedAdd(1, 2, 3)</code> →{" "}
            {uncurryResult}
          </li>
        </ul>
      </LearningBox>

      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

// ============================================================
// Code displayed in the UI
// ============================================================

export default Currying;
