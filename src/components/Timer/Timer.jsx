import React, { useEffect, useState } from "react";
import clock from "../../imgs/clock-three-svgrepo-com.svg";
export default function Timer(props) {
  let {  sec, setSec, min, setMin, count, handdleSubmit , mile , setMile } =
    props;

  //timer logic
  let timer = setTimeout(() => {
    if (mile === 0 && sec !== 0) {
      setMile(990);
      setSec(sec - 1);
    } else if (mile === 0 && sec === 0 && min !== 0) {
      setSec(59);
      setMile(990);
      setMin(min - 1);
    }else{
      setMile(mile - 10)
    }

  }, 10);

  useEffect(() => {
    if (sec !== 0 || min !== 0 || mile !== 0) {
      timer
    } else {
      clearTimeout(timer);
      handdleSubmit();
    }
  }, [mile]);

  let dangerStyle = () => {
    if (sec <= 30 && min === 0) {
      return "text-red-500";
    }
  };

  let barProgress = () => {
    if (count === 0) {
      return "w-[10%]";
    } else if (count === 1) {
      return "w-[20%]";
    } else if (count === 2) {
      return "w-[30%]";
    } else if (count === 3) {
      return "w-[40%]";
    } else if (count === 4) {
      return "w-[50%]";
    } else if (count === 5) {
      return "w-[60%]";
    } else if (count === 6) {
      return "w-[70%]";
    } else if (count === 7) {
      return "w-[80%]";
    } else if (count === 8) {
      return "w-[90%]";
    } else if (count === 9) {
      return "w-[100%]";
    }
  };

  return (
    <>
      <div className="flex justify-between w-full relative items-center  ">
        <div className="text-2xl h-fit text-black/60 text-center">
          {count + 1} of 10 Questions
        </div>

        <div className="text-white flex gap-1 text-xl items-center p-2 bg-[#333a48] rounded-lg">
          <div className={`${dangerStyle()}`}>
            0{min}:{sec < 10 ? "0" + sec : sec}
          </div>

          <img src={clock} alt="clock" className="w-7 ms-2" />

          <div className="text-center">Time Left</div>
        </div>
        <div className="absolute h-1 w-full bg-[#b2b1b3] left-0 -bottom-5  rounded-xl">
          <div
            className={`h-full transition-all duration-1000 ${barProgress()} bg-[#0f6eff]`}
          ></div>
        </div>
      </div>
    </>
  );
}
