import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

export default function Quset(props) {
  let { item, setData, count, animate, data } = props;
  let formRef = useRef(null);

  let handdleRadio = (e) => {
    let Data = [...data];
    Data[count].userAnswer = e;
    setData(Data);
    console.log(data);
  };

  return (
    <>
      <CSSTransition
        in={item.number === animate.number}
        nodeRef={formRef}
        timeout={1000}
        classNames={animate.class}
        unmountOnExit
      >
        <div className="flex flex-col lg:h-fit h-[55%]" ref={formRef}>
          <div className=" 2xl:text-3xl xl:text-2xl text-xl font-semibold flex  min-h-[5rem]">
            <div className="me-2">{count + 1}.</div>
            <div>{item.question}</div>
          </div>

          <div>
            <form className="flex flex-col gap-2 ms-6">
              {item.choices.map((ans, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="radio"
                    id={ans.choiceId}
                    value={ans.text}
                    checked={ans.text === data[count].userAnswer}
                    onChange={() => handdleRadio(ans.text)}
                    className="radio radio-info radio-sm"
                  />

                  <label
                    htmlFor={ans.choiceId}
                    className="text-lg p-2 2xl:text-2xl xl:text-xl "
                  >
                    {ans.text}
                  </label>
                </div>
              ))}
            </form>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
