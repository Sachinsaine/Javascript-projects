

const questions = [
  {
    category: "Basics",
    question:
      "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: 2,
  },
  {
    category: "Data Types",
    question: "What does typeof null return in JavaScript?",
    options: ["null", "undefined", "object", "string"],
    answer: 2,
  },
  {
    category: "Functions",
    question: "What is a closure in JavaScript?",
    options: [
      "A loop that closes itself",
      "A function with access to its outer scope",
      "A way to close the browser",
      "A method to end a program",
    ],
    answer: 1,
  },
  {
    category: "Arrays",
    question:
      "Which array method returns a new array with transformed elements?",
    options: ["filter()", "forEach()", "map()", "reduce()"],
    answer: 2,
  },
  {
    category: "DOM",
    question: "Which method selects an element by its ID?",
    options: [
      "querySelector()",
      "getElementById()",
      "getElement()",
      "selectById()",
    ],
    answer: 1,
  },
  {
    category: "Async",
    question: "What does async/await help you avoid?",
    options: ["Syntax errors", "Callback hell", "Memory leaks", "Type errors"],
    answer: 1,
  },
  {
    category: "Objects",
    question: "How do you create a copy of an object without reference?",
    options: [
      "let b = a",
      "let b = Object.copy(a)",
      "let b = {...a}",
      "let b = a.copy()",
    ],
    answer: 2,
  },
  {
    category: "ES6+",
    question: "What does the spread operator (...) do?",
    options: [
      "Multiplies values",
      "Expands an iterable into individual elements",
      "Creates a new function",
      "Declares a variable",
    ],
    answer: 1,
  },
  {
    category: "Events",
    question: "Which method prevents the default browser action on an event?",
    options: [
      "event.stop()",
      "event.cancel()",
      "event.preventDefault()",
      "event.block()",
    ],
    answer: 2,
  },
  {
    category: "Storage",
    question:
      "Which localStorage method converts an object to a string for storage?",
    options: [
      "localStorage.save()",
      "JSON.stringify()",
      "JSON.parse()",
      "object.toString()",
    ],
    answer: 1,
  },
];
