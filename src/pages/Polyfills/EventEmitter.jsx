/* eslint-disable react/no-unescaped-entities */

import { lazy } from "react";
import LearningBox from "@/src/components/organisms/LearningBox";

const CodeDisplay = lazy(
  () => import("@/src/components/molecules/CodeDisplay"),
);

import { extractSnippet } from "@/src/utils/extractCodeSnippet";
import pageSource from "./EventEmitter.jsx?raw";

// #region implementation
class MyEventEmitter {
  constructor() {
    this.events = new Map();
  }

  on(eventName, listener) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, new Set());
    }

    this.events.get(eventName).add(listener);
  }

  off(eventName, listener) {
    const listeners = this.events.get(eventName);

    if (!listeners) return;

    listeners.delete(listener);

    if (listeners.size === 0) {
      this.events.delete(eventName);
    }
  }

  emit(eventName, ...args) {
    const listeners = this.events.get(eventName);

    if (!listeners) return;

    listeners.forEach((listener) => {
      listener(...args);
    });
  }
}

const log = [];
const emitter = new MyEventEmitter();

const greet = (message) => {
  log.push(`Greet: ${message}`);
};

const farewell = (message) => {
  log.push(`Farewell: ${message}`);
};

emitter.on("hello", greet);
emitter.on("goodbye", farewell);

emitter.emit("hello", "Hello, World!");
emitter.emit("goodbye", "Goodbye, World!");

emitter.off("hello", greet);

emitter.emit("hello", "This should not call greet");
// #endregion implementation

const EventEmitter = () => {
  return (
    <>
      {" "}
      <LearningBox className="gap-2 shadow-xs text-sm text-left text-white">
        {" "}
        <p>
          {" "}
          <strong>What is an EventEmitter?</strong>{" "}
        </p>
        <p>
          An EventEmitter allows you to register functions for an event and
          execute them when that event occurs.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <code>on()</code> → Register a listener.
          </li>

          <li>
            <code>off()</code> → Remove a listener.
          </li>

          <li>
            <code>emit()</code> → Trigger all listeners for an event.
          </li>
        </ul>
        <p>
          <strong>Example flow:</strong>
        </p>
        <div className="rounded-lg bg-white/10 p-3 font-mono text-xs">
          <p>on("hello", greet)</p>
          <p>emit("hello", "Hello, World!")</p>
          <p>off("hello", greet)</p>
        </div>
        <p>
          <strong>Live output:</strong>
        </p>
        <div className="rounded-lg bg-white/10 p-3">
          {log.map((entry, index) => (
            <p key={index}>{entry}</p>
          ))}
        </div>
      </LearningBox>
      <CodeDisplay codeString={extractSnippet(pageSource)} />
    </>
  );
};

export default EventEmitter;
