/* eslint-disable react/no-unescaped-entities */
import { lazy } from "react";

const CodeDisplay = lazy(() => import("@/src/components/molecules/CodeDisplay"));

const exampleCode = `
class EventEmitter {
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
        const updatedFn = this.events[eventName].filter(listener => listener !== fn);
        this.events[eventName] = updatedFn;
      }
    };
  }

  emit(eventName, ...args) {
    const allEvents = this.events[eventName];
    if (allEvents) {
      allEvents.forEach(fn => {
        fn(...args);
      });
    }
  }
}

const emitter = new EventEmitter();

const greet = (message) => console.log(\`Greet: \${message}\`);
const farewell = (message) => console.log(\`Farewell: \${message}\`);

const greetSub = emitter.on('hello', greet);
emitter.on('goodbye', farewell);

emitter.emit('hello', 'Hello, World!');
emitter.emit('goodbye', 'Goodbye, World!');

greetSub.unsubscribe(); 

emitter.emit('hello', 'This should not call greet');
`.trim();

const EventEmitter = () => {
	return (
		<>
			<div className="h-full flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs text-white text-sm">
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
			</div>
			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default EventEmitter;
