import { lazy } from "react";

export const machineCodingItems = [
  {
    slug: "infinite-scroll",
    title: "Infinite Scroll",
    description:
      "Implement an infinite scrolling list that loads more items on demand.",
    Component: lazy(() => import("./InfiniteScroll")),
  },
  {
    slug: "auto-complete",
    title: "AutoComplete/Typehead",
    description:
      "Search-as-you-type auto-complete input with filtered suggestions.",
    Component: lazy(() => import("./AutoComplete")),
  },
  {
    slug: "nested-comments",
    title: "Nested Comments",
    description:
      "Render and interact with a nested comment/thread structure.",
    Component: lazy(() => import("./NestedComments")),
  },
  {
    slug: "pagination",
    title: "Pagination",
    description:
      "Paginate a large dataset with client-side page controls and state.",
    Component: lazy(() => import("./Pagination")),
  },
  {
    slug: "multi-step-form",
    title: "Multi Step Form",
    description:
      "Build a multi-step form experience with simple progress tracking.",
    Component: lazy(() => import("./MultiStepForm")),
  },
  {
    slug: "traffic-light",
    title: "Traffic Light",
    description:
      "Implement traffic light with 3 states: red, yellow, green.",
    Component: lazy(() => import("./TrafficLight")),
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "Classic tic-tac-toe board with winner detection and reset.",
    Component: lazy(() => import("./Tic-Tac-Toe")),
  },
  {
    slug: "stop-watch",
    title: "Stopwatch",
    description:
      "Stopwatch with start, pause and reset using intervals.",
    Component: lazy(() => import("./Stopwatch")),
  },
  {
    slug: "memory-game",
    title: "Memory Game",
    description:
      "Flip cards to match pairs in a simple memory card game.",
    Component: lazy(() => import("./MemoryGame")),
  },
  {
    slug: "mouse-hold-counter-app",
    title: "Mouse Hold Counter App",
    description:
      "Counter that accelerates when you hold down increment and decrement.",
    Component: lazy(() => import("./MouseHoldCounterApp")),
  },
  {
    slug: "overlapping-circles",
    title: "Overlapping Circles",
    description:
      "Visual exercise to practice layout, positioning and animations.",
    Component: lazy(() => import("./OverlappingCircles")),
  },
];