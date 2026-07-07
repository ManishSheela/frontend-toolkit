import { useEffect, useState } from "react";
import CodeDisplay from "@/src/components/molecules/CodeDisplay";
import LearningBox from "@/src/components/organisms/LearningBox";
import pageSource from "./Promise.jsx?raw";

class MyPromise {
	constructor(executor) {
		this.state = "pending";
		this.value = undefined;
		this.callbacks = [];

		const resolve = (value) => {
			if (this.state !== "pending") return;
			this.state = "fulfilled";
			this.value = value;
			this.callbacks.forEach(({ onFulfilled }) => onFulfilled?.(value));
		};

		const reject = (error) => {
			if (this.state !== "pending") return;
			this.state = "rejected";
			this.value = error;
			this.callbacks.forEach(({ onRejected }) => onRejected?.(error));
		};

		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}

	then(onFulfilled, onRejected) {
		if (this.state === "fulfilled") {
			setTimeout(() => onFulfilled?.(this.value), 0);
		} else if (this.state === "rejected") {
			setTimeout(() => onRejected?.(this.value), 0);
		} else {
			this.callbacks.push({ onFulfilled, onRejected });
		}
		return this;
	}
}

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

			<CodeDisplay codeString={pageSource} />
		</>
	);
};

export default Promise;
