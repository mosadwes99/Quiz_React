import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import correct from "../../imgs/correct-success-tick-svgrepo-com.svg";
import wrong from "../../imgs/cancel-delete-remove-svgrepo-com.svg";

export default function QuestResult(props) {
  let { item, count, data, animate, setAnimateComponent } = props;
  let formRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setAnimateComponent(true);
    }, 100);
  }, []);

  let checkAnswerStyle = (ans) => {
    if (ans.text === item.userAnswer && ans.text === item.correctAnswer) {
      return {
        color: "bg-[#d2e9da]",
        img: correct,
      };
    } else if (
      ans.text === item.userAnswer &&
      ans.text !== item.correctAnswer
    ) {
      return {
        color: "bg-[#fbdadc]",
        img: wrong,
      };
    } else if (ans.text === item.correctAnswer) {
      return {
        color: "bg-[#d2e9da]",
        img: correct,
      };
    } else {
      return {
        color: "bg-[#eff7ff]",
        img: null,
      };
    }
  };

  return (
    <CSSTransition
      in={item.number === animate.number}
      nodeRef={formRef}
      timeout={1000}
      classNames={animate.class}
      unmountOnExit
    >
      <div
        className="flex w-full  flex-col lg:h-fit h-[55%] py-2"
        ref={formRef}
      >
        <div className=" 2xl:text-3xl xl:text-2xl text-xl font-semibold flex  text-start min-h-[5rem]">
          <div className="me-2">{count + 1}.</div>
          <div>
            {item.question}
            {!item.userAnswer && <span className="text-red-500 ms-1">*</span>}
          </div>
        </div>

        <div className="text-start">
          <form className="flex flex-col gap-2">
            {item.choices.map((ans, index) => (
              <div
                key={index}
                className={`flex items-center relative gap-3 px-2 rounded-md ${
                  checkAnswerStyle(ans).color
                }`}
              >
                <input
                  type="radio"
                  disabled
                  id={ans.choiceId}
                  value={ans.text}
                  checked={ans.text === data[count].userAnswer}
                  className="radio radio-info radio-sm"
                />

                <label
                  htmlFor={ans.choiceId}
                  className="text-lg p-2 2xl:text-2xl xl:text-xl "
                >
                  {ans.text}
                </label>

                <img
                  src={checkAnswerStyle(ans).img}
                  className="w-6 absolute end-2"
                />
              </div>
            ))}
          </form>
        </div>
      </div>
    </CSSTransition>
  );
}
