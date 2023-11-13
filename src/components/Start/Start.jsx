import React from "react";

export default function Start({ startQuiz }) {
  return (
    <div className="text-center bg-white p-14 flex rounded-lg flex-col justify-center items-center text-black gap-4">
      <div className="text-5xl font-semibold mb-3">Take this Quiz...!</div>

      <div className="text-xl">
        you have{" "}
        <span className="font-semibold text-yellow-500">2 minutes</span> to take
        the experience...
      </div>

      <div
        onClick={startQuiz}
        className="bg-[#0f6eff] active:scale-95 text-2xl rounded-md w-fit cursor-pointer p-2 text-white"
      >
        Start Quiz
      </div>
    </div>
  );
}
