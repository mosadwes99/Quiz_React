import React, { useEffect, useRef, useState } from "react";
import clock from "../../imgs/clock-three-svgrepo-com.svg";
import prevArrow from "../../imgs/arrow-prev-small-svgrepo-com.svg";
import nextArrow from "../../imgs/arrow-next-small-svgrepo-com.svg";
import Reset from "../../imgs/reset-reload-refresh-sync-arrow-update-svgrepo-com.svg";
import { CSSTransition } from "react-transition-group";
import Dagree from "./Dagree";
import QuestResult from "./QuestResult";

export default function Result(props) {
  let { sec, min, dagree, startQuiz, data } = props;

  let [count, setCount] = useState(0);
  let [animateComponent, setAnimateComponent] = useState(false);
  let [dagreeStyle, setDagreeStyle] = useState(null);
  let [showResult, setShowResult] = useState(false);
  let [animate, setAnimate] = useState({
    number: 0,
    class: "",
  });

  let result = useRef(null);

  useEffect(() => {
    setAnimateComponent(true);
  }, []);

  let dangerStyle = () => {
    if (sec <= 30 && min === 0) {
      return "text-red-500";
    }
  };

  let handdleNext = () => {
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

  return (
    <CSSTransition
      in={animateComponent}
      nodeRef={result}
      timeout={300}
      classNames="examContainer"
      unmountOnExit
    >
      <div
        ref={result}
        className="text-center bg-white p-10 flex rounded-lg flex-col justify-center items-center text-black gap-4 w-full lg:w-1/2 h-full lg:h-fit"
      >
        <div className="flex justify-between w-full relative items-center  ">
          {showResult ? (
            <div className="flex flex-col lg:flex-row gap-2">
              <p className="text-3xl font-semibold">Your Degree </p>
              <p className="text-3xl font-semibold -ms-1 lg:block hidden">:</p>
              <p className={`text-3xl ${dagreeStyle} `}>{dagree} / 10 </p>
            </div>
          ) : (
            <p className="font-semibold text-3xl">Awesome Quiz Application.</p>
          )}

          <div className="text-white flex gap-1 text-xl items-center p-2 bg-[#333a48] rounded-lg">
            <div className={`${dangerStyle()}`}>
              0{min}:{sec < 10 ? "0" + sec : sec}
            </div>

            <img src={clock} alt="clock" className="w-7 ms-2" />

            <div className="text-center">Time Left</div>
          </div>

          <div className="absolute h-1 w-full bg-[#b2b1b3] left-0 -bottom-5  rounded-xl"></div>
        </div>
        {showResult ? (
          <>
            {data
              .filter((item, index) => index === count)
              .map((item, index) => (
                <QuestResult
                  key={index}
                  item={item}
                  count={count}
                  data={data}
                  animate={animate}
                  setDagreeStyle={setDagreeStyle}
                />
              ))}
          </>
        ) : (
          <Dagree
            dagree={dagree}
            setShowResult={setShowResult}
            startQuiz={startQuiz}
            dagreeStyle={dagreeStyle}
            setDagreeStyle={setDagreeStyle}
          />
        )}

        {showResult && (
          <>
            <div className="h-[0.1rem] w-full  bg-[#333a48] "></div>

            <div className="flex justify-between w-full px-4 ">
              <button
                disabled={count === 0}
                onClick={handdlePrev}
                className="w-9 rounded-full hover:scale-105 active:scale-95  bg-[#333a48] disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100 "
              >
                <img src={prevArrow} alt="prev" />
              </button>
              <button
                onClick={startQuiz}
                className="w-9 rounded-full hover:scale-105 active:scale-95  bg-white disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100 "
              >
                <img src={Reset} alt="prev" />
              </button>
              <button
                onClick={handdleNext}
                disabled={count === data.length - 1}
                className="w-9 rounded-full hover:scale-105 active:scale-95  bg-[#333a48] disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100"
              >
                <img src={nextArrow} alt="next" />
              </button>
            </div>
          </>
        )}
      </div>
    </CSSTransition>
  );
}
