import React, { useEffect, useState } from "react";

export default function Dagree(props) {
  let {
    dagree,
    setShowResult,
    startQuiz,
    setDagreeStyle,
    dagreeStyle,
    setAnimateComponent,
  } = props;

  let [dagreeText, setDagreeText] = useState(null);

  let dagreeStyleFunc = () => {
    if (dagree < 5) {
      setDagreeStyle("text-red-500");
    } else if (dagree < 7) {
      setDagreeStyle("text-yellow-500");
    } else {
      setDagreeStyle("text-green-500");
    }
  };

  let dagreeTextFunc = () => {
    if (dagree < 5) {
      setDagreeText("oops! You need to work hard.");
    } else if (dagree < 7) {
      setDagreeText("acceptable!");
    } else if (dagree < 9) {
      setDagreeText("good job!");
    } else if ((dagree = 9)) {
      setDagreeText("good job!");
    } else {
      setDagreeText("Excellent!");
    }
  };

  useEffect(() => {
    dagreeStyleFunc();
    dagreeTextFunc();
  }, []);
  let ShowResultFunc = () => {
    setAnimateComponent(false);
    setShowResult(true);
  };
  return (
    <>
      <div className="p-8">
        <p className={`text-2xl p-3 font-semibold ${dagreeStyle}`}>
          {dagreeText}
        </p>

        <p className="text-2xl p-3">Your Degree: {dagree} / 10 </p>

        <div className="flex text-2xl content-end text-white gap-5 p-2  ">
          <div
            onClick={ShowResultFunc}
            className="p-2 active:scale-95 cursor-pointer px-4 rounded-md bg-[#666a6f] "
          >
            Show results
          </div>

          <div
            onClick={() => startQuiz()}
            className="p-2 active:scale-95 cursor-pointer px-4 rounded-md bg-[#0f6eff]  "
          >
            Re examination
          </div>
        </div>
      </div>
    </>
  );
}
