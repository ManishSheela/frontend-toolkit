/* eslint-disable react/no-unescaped-entities */
import CodeDisplay from "@/src/components/CodeDisplay";

const exampleCode = `

window.timerId = 1;
window.timers = {};

function processTimers() {
    const now = Date.now();

    Object.keys(window.timers).forEach((key) => {
        const { callback, start, args } = window.timers[key];
        if (now >= start) {
            callback(...args);
            delete window.timers[key];
        }
    });

    if (Object.keys(window.timers).length > 0) {
        requestAnimationFrame(processTimers); // keep checking
    }
}

window.setTimeout = (callback, delay, ...args) => {
    const id = window.timerId++;
    window.timers[id] = {
        callback,
        start: Date.now() + delay,
        args
    };

    requestAnimationFrame(processTimers);
    return id;
};

window.clearTimeout = (id) => {
    delete window.timers[id];
};


setTimout(()=> console.log('working fine'), 1000)

`.trim();

const SetTimeout = () => {
	return (
		<>
			<div className="h-full flex flex-col gap-2 rounded-sm w-full p-4 bg-stone-700 overflow-auto shadow-xs text-white text-sm">
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
			</div>

			<CodeDisplay codeString={exampleCode} />
		</>
	);
};

export default SetTimeout;
