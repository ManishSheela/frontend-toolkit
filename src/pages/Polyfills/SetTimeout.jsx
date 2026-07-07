/* eslint-disable react/no-unescaped-entities */
import { lazy, useEffect, useState } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(() => import("@/src/components/molecules/CodeDisplay"));

import pageSource from "./SetTimeout.jsx?raw";

// Scoped under different names so this demo doesn't clobber the real window.setTimeout.
let timerId = 1;
const timers = {};

function processTimers() {
	const now = Date.now();

	Object.keys(timers).forEach((key) => {
		const { callback, start, args } = timers[key];
		if (now >= start) {
			callback(...args);
			delete timers[key];
		}
	});

	if (Object.keys(timers).length > 0) {
		requestAnimationFrame(processTimers);
	}
}

function customSetTimeout(callback, delay, ...args) {
	const id = timerId++;
	timers[id] = {
		callback,
		start: Date.now() + delay,
		args,
	};

	requestAnimationFrame(processTimers);
	return id;
}

function customClearTimeout(id) {
	delete timers[id];
}

const SetTimeout = () => {
	const [message, setMessage] = useState("waiting...");

	useEffect(() => {
		customSetTimeout(() => setMessage("working fine"), 1000);
	}, []);

	return (
		<>
			<LearningBox className="gap-2 shadow-xs text-white text-sm text-left">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5 space-y-2">
					<li>
						<code>setTimeout(callback, delay, ...args)</code> stores a timer
						with its delay and arguments.
					</li>
					<li>
						The timer is assigned an incrementing <code>id</code> using{" "}
						<code>window.timerId</code>.
					</li>
					<li>
						The <code>window.timers</code> object stores all active timers.
					</li>
					<li>
						<code>processTimers()</code> checks all timers, and if the current
						time has passed their target time, it calls the callback.
					</li>
					<li>
						If there are still timers left, <code>requestAnimationFrame()</code>{" "}
						recursively schedules <code>processTimers()</code>.
					</li>
					<li>
						<code>clearTimeout(id)</code> removes a timer manually.
					</li>
					<li>
						<code>requestAnimationFrame()</code> is used instead of{" "}
						<code>setInterval</code> to reduce CPU usage and improve sync with
						UI frame rates.
					</li>
					<li>
						This mimics native <code>setTimeout</code> behavior using a custom
						mechanism and is a functional polyfill.
					</li>
				</ul>
							<p>
					<strong>Live example (customSetTimeout(callback, 1000)):</strong>
				</p>
				<p>{message}</p>
			</LearningBox>

			<CodeDisplay codeString={pageSource} />
		</>
	);
};

export default SetTimeout;
