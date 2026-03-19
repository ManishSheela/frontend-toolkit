import CodeDisplay from "@/src/components/molecules/CodeDisplay";

const Promise = () => {
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

			<CodeDisplay codeString={``} />
		</>
	);
};

export default Promise;
