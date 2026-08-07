/* eslint-disable react/no-unescaped-entities */
import { lazy } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(() => import("@/src/components/molecules/CodeDisplay"));

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./EventEmitter.jsx?raw";

// #region implementation
class MyEventEmitter {
	constructor() {
		this.events = {};
	}

	on(eventName, fn) {
		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}
		this.events[eventName].push(fn);

		return {
			unsubscribe: () => {
				const updatedFn = this.events[eventName].filter(
					(listener) => listener !== fn,
				);
				this.events[eventName] = updatedFn;
			},
		};
	}

	emit(eventName, ...args) {
		const allEvents = this.events[eventName];
		if (allEvents) {
			allEvents.forEach((fn) => {
				fn(...args);
			});
		}
	}
}
// #endregion implementation

const log = [];
const emitter = new MyEventEmitter();

const greet = (message) => log.push(`Greet: ${message}`);
const farewell = (message) => log.push(`Farewell: ${message}`);

const greetSub = emitter.on("hello", greet);
emitter.on("goodbye", farewell);

emitter.emit("hello", "Hello, World!");
emitter.emit("goodbye", "Goodbye, World!");

greetSub.unsubscribe();

emitter.emit("hello", "This should not call greet");

const EventEmitter = () => {
	return (
		<>
			<LearningBox className="gap-2 shadow-xs text-white text-sm text-left">
				<p>
					<strong>Explanation:</strong>
				</p>
				<ul className="list-disc pl-5">
					<li>
						<code>EventEmitter</code> is a custom event handling class.
					</li>
					<li>
						<code>constructor</code> initializes an empty object{" "}
						<code>events</code> to store event names and their listeners.
					</li>
					<li>
						<code>on(eventName, fn)</code>: Registers a listener <code>fn</code>{" "}
						for a given <code>eventName</code>. Returns an{" "}
						<code>unsubscribe</code> method to remove that specific listener
						later.
					</li>
					<li>
						<code>emit(eventName, ...args)</code>: Triggers all listeners for a
						given <code>eventName</code>, passing in any additional arguments.
					</li>
					<li>
						Example Usage:
						<ul className="list-disc pl-5">
							<li>
								Two functions (<code>greet</code> and <code>farewell</code>) are
								subscribed to <code>'hello'</code> and <code>'goodbye'</code>{" "}
								events.
							</li>
							<li>
								<code>emit('hello', 'Hello, World!')</code> calls{" "}
								<code>greet</code> and logs a greeting.
							</li>
							<li>
								<code>greetSub.unsubscribe()</code> removes the{" "}
								<code>greet</code> listener.
							</li>
							<li>
								Further <code>'hello'</code> emits won’t call <code>greet</code>{" "}
								anymore.
							</li>
						</ul>
					</li>
				</ul>
							<p>
					<strong>Live example (log of emitted events):</strong>
				</p>
				{log.map((entry, i) => (
					<p key={i}>{entry}</p>
				))}
			</LearningBox>
			<CodeDisplay codeString={extractSnippet(pageSource)} />
		</>
	);
};

export default EventEmitter;
