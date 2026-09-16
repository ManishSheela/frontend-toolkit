import LearningBox from "@/src/components/organisms/LearningBox";
import { lazy } from "react";

const CodeDisplay = lazy(
	() => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./Memoization.jsx?raw";

// #region implementation
function memoize(fn) {
	const cache = new Map();

	return (...args) => {
		const key = JSON.stringify(args);

		if (cache.has(key)) {
			return cache.get(key);
		}

		const result = fn(...args);

		cache.set(key, result);

		return result;
	};
}

let calculationCount = 0;

const addNumbers = (firstNumber, secondNumber) => {
	calculationCount += 1;

	return firstNumber + secondNumber;
};

const memoizedAdd = memoize(addNumbers);

const firstResult = memoizedAdd(2, 3);
const secondResult = memoizedAdd(2, 3);
// #endregion implementation

const Memoization = () => {
	return (
		<>
			<LearningBox className="flex-col text-left text-sm text-white">
				<div className="space-y-4">
					<div>
						<p className="mb-2 font-semibold text-base">
							What is Memoization?
						</p>

						<p className="text-white/80 leading-relaxed">
							Memoization is an optimization technique where we store the result
							of a function call and reuse it when the same arguments are passed
							again.
						</p>
					</div>

					<div>
						<p className="mb-2 font-semibold">
							How it works
						</p>

						<ul className="list-disc space-y-2 pl-5 text-white/80">
							<li>
								A <code className="text-white">Map</code> is used as a cache.
							</li>

							<li>
								The function arguments are converted into a unique cache key.
							</li>

							<li>
								If the result already exists, it is returned directly from the
								cache.
							</li>

							<li>
								If it doesn't exist, the original function runs and its result is
								stored.
							</li>
						</ul>
					</div>

					<div>
						<p className="mb-2 font-semibold">
							Execution flow
						</p>

						<div className="rounded-lg bg-white/10 p-3 font-mono text-xs leading-6">
							<p>
								<span className="text-green-400">memoizedAdd(2, 3)</span>
								{" → "}
								Cache Miss → Calculate → Store Result
							</p>

							<p>
								<span className="text-green-400">memoizedAdd(2, 3)</span>
								{" → "}
								Cache Hit → Return Cached Result
							</p>
						</div>
					</div>

					<div>
						<p className="mb-2 font-semibold">
							Live example
						</p>

						<div className="space-y-1 rounded-lg bg-white/10 p-3">
							<p>
								First result:{" "}
								<span className="font-semibold text-green-400">
									{firstResult}
								</span>
							</p>

							<p>
								Second result:{" "}
								<span className="font-semibold text-green-400">
									{secondResult}
								</span>
							</p>

							<p className="pt-1">
								Actual calculations performed:{" "}
								<span className="font-semibold text-yellow-400">
									{calculationCount}
								</span>
							</p>
						</div>

						<p className="mt-2 text-xs text-white/60">
							Even though the function was called twice, the calculation only ran
							once because the second call reused the cached result.
						</p>
					</div>
				</div>
			</LearningBox>

			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default Memoization;