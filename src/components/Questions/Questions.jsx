import { useEffect, useRef, useState } from "react";
import Timer from "../Timer/Timer";
import Quset from "../Quest/Quset";
import prevArrow from "../../imgs/arrow-prev-small-svgrepo-com.svg";
import nextArrow from "../../imgs/arrow-next-small-svgrepo-com.svg";
import { CSSTransition } from "react-transition-group";

export default function Questions(props) {
  let {
    setIsEnd,
    sec,
    setSec,
    min,
    setMin,
    data,
    setData,
    setIsStart,
    setDagree,
    mile,
    setMile,
  } = props;
  let [count, setCount] = useState(0);
  let [answer, answerSet] = useState(null);
  let [thisAnimate, setThisAnimate] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  let [animate, setAnimate] = useState({
    number: 0,
    class: "",
  });
  let exam = useRef(null);

  useEffect(() => {
    setThisAnimate(true);
    return () => {
      setThisAnimate(false);
    };
  });

  let handdleNext = () => {
    answerSet(null);
    setAnimate({
      number: count + 1,
      class: "next",
    });
    setTimeout(() => {
      setCount(count + 1);
    }, 100);
  };

  let handdlePrev = () => {
    setAnimate({
      number: count - 1,
      class: "prev",
    });
    setTimeout(() => {
      setCount(count - 1);
    }, 100);
  };

  let checkNext = () => {
    if (data[count].userAnswer === "") {
      if (answer === null) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  let handdleSubmit = () => {
    if (sec !== 0 || min !== 0) {
      setIsLoading(true);
      console.log("if condition");
    }
    data.map((item) => {
      if (item.correctAnswer === item.userAnswer) {
        setDagree((prev) => prev + 1);
      }
    });
    setIsEnd(true);
    setIsStart(false);
  };

  return (
    <>
      <CSSTransition
        in={thisAnimate}
        nodeRef={exam}
        timeout={300}
        classNames="examContainer"
        unmountOnExit
      >
        <div
          ref={exam}
          className="w-full lg:w-1/2 h-full lg:h-fit  lg:justify-center bg-white rounded-xl p-8 flex flex-col justify-center gap-8 overflow-hidden"
        >
          <Timer
            setIsEnd={setIsEnd}
            sec={sec}
            setMin={setMin}
            min={min}
            mile={mile}
            setMile={setMile}
            setSec={setSec}
            count={count}
            handdleSubmit={handdleSubmit}
          />

          {data
            .filter((item, index) => index === count)
            .map((item, index) => (
              <Quset
                answer={answer}
                answerSet={answerSet}
                item={item}
                key={index}
                count={count}
                animate={animate}
                setAnimate={setAnimate}
                data={data}
                setData={setData}
              />
            ))}

          <div className="h-[0.1rem] w-full bg-[#333a48] "></div>

          <div className="flex justify-between px-6">
            <button
              disabled={count === 0}
              onClick={handdlePrev}
              className="w-9 rounded-full hover:scale-105 active:scale-95  bg-[#333a48] disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100 "
            >
              <img src={prevArrow} alt="prev" />
            </button>
            {count === data.length - 1 ? (
              <button
                onClick={handdleSubmit}
                disabled={checkNext()}
                className=" p-1 text-white px-2 rounded-full hover:scale-105 active:scale-95  bg-[#333a48] disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100"
              >
                {isLoading ? <div className="loader">loader</div> : "Submit"}
              </button>
            ) : (
              <button
                onClick={handdleNext}
                disabled={checkNext()}
                className="w-9 rounded-full hover:scale-105 active:scale-95  bg-[#333a48] disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100"
              >
                <img src={nextArrow} alt="next" />
              </button>
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
