import React from "react";
import { useState } from "react";
import Start from "./components/Start/Start";
import Questions from "./components/Questions/Questions";
import Result from "./components/Result/Result";

export default function App() {
  let [data, setData] = useState([
    {
      number: 0,
      question: "What is the primary purpose of HTML in web development?",
      choices: [
        {
          choiceId: "one",
          text: "To define the structure and content of a web page",
        },
        { choiceId: "two", text: "To style the web page using CSS" },
        { choiceId: "three", text: "To handle server-side logic" },
        {
          choiceId: "four",
          text: "To manage user interactions with JavaScript",
        },
      ],
      correctAnswer: "To define the structure and content of a web page",
      userAnswer: "To define the structure and content of a web page",
    },
    {
      number: 1,
      question:
        "Which of the following CSS selectors targets all h1 elements within a specific div with the class 'container'?",
      choices: [
        { choiceId: "one", text: "div h1" },
        { choiceId: "two", text: ".container h1" },
        { choiceId: "three", text: "div + h1" },
        { choiceId: "four", text: "div > h1" },
      ],
      correctAnswer: ".container h1",
      userAnswer: "",
    },
    {
      number: 2,
      question: "What does CSS stand for?",
      choices: [
        { choiceId: "one", text: "Cascading Style Script" },
        { choiceId: "two", text: "Central Style System" },
        { choiceId: "three", text: "Cascading Style Sheets" },
        { choiceId: "four", text: "Computer Style Standards" },
      ],
      correctAnswer: "Cascading Style Sheets",
      userAnswer: "",
    },
    {
      number: 3,
      question: "In React, what is the purpose of the useState hook?",
      choices: [
        { choiceId: "one", text: "To fetch data from an API" },
        { choiceId: "two", text: "To manage and update component state" },
        { choiceId: "three", text: "To define and render HTML elements" },
        { choiceId: "four", text: "To create reusable components" },
      ],
      correctAnswer: "To manage and update component state",
      userAnswer: "",
    },
    {
      number: 4,
      question:
        "Which component lifecycle method is used for fetching data from an API in a React class component?",
      choices: [
        { choiceId: "one", text: "componentDidMount" },
        { choiceId: "two", text: "componentWillUnmount" },
        { choiceId: "three", text: "render" },
        { choiceId: "four", text: "constructor" },
      ],
      correctAnswer: "componentDidMount",
      userAnswer: "",
    },
    {
      number: 5,
      question: "What is JSX in the context of React?",
      choices: [
        {
          choiceId: "one",
          text: "JavaScript XML, a syntax extension for writing HTML-like code in JavaScript",
        },
        {
          choiceId: "two",
          text: "JavaScript eXtended, a new version of JavaScript",
        },
        {
          choiceId: "three",
          text: "JavaScript for XML, a way to include XML data in JavaScript",
        },
        {
          choiceId: "four",
          text: "JavaScript for XML Styles, a CSS extension for JavaScript",
        },
      ],
      correctAnswer:
        "JavaScript XML, a syntax extension for writing HTML-like code in JavaScript",
      userAnswer: "",
    },
    {
      number: 6,
      question:
        "Which React hook is used to perform side effects in a functional component?",
      choices: [
        { choiceId: "one", text: "useEffect" },
        { choiceId: "two", text: "useCallback" },
        { choiceId: "three", text: "useState" },
        { choiceId: "four", text: "useContext" },
      ],
      correctAnswer: "useEffect",
      userAnswer: "",
    },
    {
      number: 7,
      question:
        "What is the purpose of the map function in JavaScript when working with arrays in the context of React?",
      choices: [
        { choiceId: "one", text: "To filter out elements from an array" },
        {
          choiceId: "two",
          text: "To create a new array by transforming each element",
        },
        {
          choiceId: "three",
          text: "To check if an array contains a specific value",
        },
        { choiceId: "four", text: "To sort the elements in an array" },
      ],
      correctAnswer: "To create a new array by transforming each element",
      userAnswer: "",
    },
    {
      number: 8,
      question:
        "Which of the following is not a valid way to style React components?",
      choices: [
        { choiceId: "one", text: "Inline styles using the style prop" },
        { choiceId: "two", text: "Using CSS classes and stylesheets" },
        {
          choiceId: "three",
          text: "Writing CSS directly within the JavaScript file",
        },
        { choiceId: "four", text: "Using the props object to define styles" },
      ],
      correctAnswer: "Using the props object to define styles",
      userAnswer: "",
    },
    {
      number: 9,
      question: "What is the purpose of the npm command in a React project?",
      choices: [
        { choiceId: "one", text: "To start the development server" },
        { choiceId: "two", text: "To create a new React component" },
        {
          choiceId: "three",
          text: "To manage project dependencies and scripts",
        },
        {
          choiceId: "four",
          text: "To build the final production version of the application",
        },
      ],
      correctAnswer: "To manage project dependencies and scripts",
      userAnswer: "",
    },
  ]);

  let [isStart, setIsStart] = useState(false);
  let [isWait, setIsWait] = useState(true);
  let [isEnd, setIsEnd] = useState(false);
  let [sec, setSec] = useState(30);
  let [min, setMin] = useState(0);
  let [mile, setMile] = useState(0);
  let [dagree, setDagree] = useState(0);

  let startQuiz = () => {
    data.forEach((item) => {
      item.userAnswer = "";
    });
    setDagree(0);
    setMile(990)
    setSec(30);
    setIsEnd(false);
    setIsWait(false);
    setIsStart(true);
  };
  return (
    <div className="w-full h-screen text-black bg-[#0f6eff] flex justify-center items-center">
      {isWait && <Start startQuiz={startQuiz} />}
      {isStart && (
        <Questions
          data={data}
          setData={setData}
          setIsEnd={setIsEnd}
          sec={sec}
          setMin={setMin}
          min={min}
          setSec={setSec}
          setIsStart={setIsStart}
          setDagree={setDagree}
          mile={mile}
          setMile={setMile}
        />
      )}
      {isEnd && (
        <Result sec={sec} min={min} dagree={dagree} startQuiz={startQuiz}  data={data}/>
      )}
    </div>
  );
}
