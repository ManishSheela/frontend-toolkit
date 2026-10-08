import { useEffect, useState } from "react";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./Promise.jsx?raw";

// #region implementation
class MyPromise {
	constructor(executor) {
		this.state = "pending";
		this.value = undefined;
		this.handlers = [];

		const resolve = (value) => {
			if (this.state !== "pending") return;

			this.state = "fulfilled";
			this.value = value;

			this.handlers.forEach((handler) => {
				handler.onFulfilled?.(value);
			});
		};

		const reject = (error) => {
			if (this.state !== "pending") return;

			this.state = "rejected";
			this.value = error;

			this.handlers.forEach((handler) => {
				handler.onRejected?.(error);
			});
		};

		executor(resolve, reject);
	}

	then(onFulfilled, onRejected) {
		return new MyPromise((resolve, reject) => {

			const handleFulfilled = (value) => {
				try {
					const result = onFulfilled
						? onFulfilled(value)
						: value;

					resolve(result);
				} catch (error) {
					reject(error);
				}
			};

			const handleRejected = (error) => {
				try {
					if (onRejected) {
						const result = onRejected(error);
						resolve(result);
					} else {
						reject(error);
					}
				} catch (error) {
					reject(error);
				}
			};

			if (this.state === "fulfilled") {
				handleFulfilled(this.value);
			}

			if (this.state === "rejected") {
				handleRejected(this.value);
			}

			if (this.state === "pending") {
				this.handlers.push({
					onFulfilled: handleFulfilled,
					onRejected: handleRejected,
				});
			}
		});
	}
}

const p = new MyPromise((resolve, reject) => {
	setTimeout(() => reject('manish'), 1000)
})

p.then((value) => {
	console.log(value)
}, (err) => {
	console.log(err, 'err')
})
// #endregion implementation

const Promise = () => {
	const [status, setStatus] = useState("pending");

	useEffect(() => {
		const promise = new MyPromise((resolve) => {
			setTimeout(() => resolve("resolved after 1s"), 1000);
		});

		promise.then((value) => setStatus(value));
	}, []);

	return (
		<>
			<LearningBox className="gap-2 shadow-xs text-white text-sm text-left">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>MyPromise</code> is a minimal custom Promise implementation
						built with a constructor <code>executor</code>, just like the native{" "}
						<code>Promise</code>.
					</li>
					<li>
						It tracks a <code>state</code> (<code>pending</code>,{" "}
						<code>fulfilled</code>, or <code>rejected</code>) and a{" "}
						<code>value</code>.
					</li>
					<li>
						<code>resolve(value)</code> and <code>reject(error)</code> are passed
						into the executor. Calling either transitions the state and stores
						the result.
					</li>
					<li>
						<code>then(onFulfilled, onRejected)</code> either runs immediately
						(via <code>setTimeout</code>, to stay async) if the promise has
						already settled, or queues the callback in{" "}
						<code>callbacks</code> to run once it settles.
					</li>
					<li>
						Any error thrown synchronously inside the executor is caught and
						turned into a rejection.
					</li>
				</ul>
				<p>
					<strong>Live example (resolves after 1s):</strong>
				</p>
				<p>Status: {status}</p>
			</LearningBox>

			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default Promise;
