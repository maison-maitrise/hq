import React, { useEffect, useMemo, useState } from "react";

const ContactDecoy = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isInTransition, setIsInTransition] = useState(false);
  useEffect(() => {
    if (isClicked && isInTransition) {
      setTimeout(() => {
        setIsInTransition(false);
      }, 1000);
    }
  });

  return (
    <div
      className={`flex flex-col gap-8 lg:gap-6 mt-6 lg:mt-12 -mb-16 z-10 relative items-center justify-center rounded-md  transition-all duration-1000 overflow-visible hide-scrollbar ${
        isClicked && !isInTransition ? "red-glow bg-[#000]" : ""
      }`}
    >
      <h1
        className={`italic text-tender-pink font-nympha font-[900] text-4xl flex flex-col justify-center items-center text-center transition-all duration-1000 pt-[126px] relative ${
          isInTransition
            ? "rotate-0 translate-y-[-50%]"
            : "rotate-0 translate-y-[0px] "
        }`}
      >
        tell me you're not{" "}
        <span
          className={`text-red-revolt relative z-10  ${
            isClicked && !isInTransition
              ? "drop-shadow-[1px_1px_2px_rgba(240, 0, 0, 1)]"
              : ""
          } text-6xl not-italic`}
        >
          intrigued(?)... don't lie.
          {/* <span
            className={`!font-nympha text-neon-red absolute left-0 top-0 z-0 ${
              isClicked && !isInTransition
                ? "opacity-100 translate-x-[1px] translate-y-[1px]"
                : "opacity-0"
            }  transition-all duration-1000 text-6xl not-italic`}
          >
            intrigued(?)... don't lie.
          </span> */}
        </span>
      </h1>

      <div className="flex flex-col items-center justify-center w-fit relative min-h-[126px] -mt-[20px]">
        {(!isClicked || isInTransition) && (
          <button
            className={`font-maison font-light text-tender-pink text-lg px-6 py-2 border-2 border-red-revolt hover:text-red-revolt hover:bg-opacity-20 bg-opacity-0 bg-tender-pink transition-all duration-500  ease-in ${
              isInTransition
                ? "opacity-0 translate-y-[-1300%] red-glow"
                : "opacity-100 translate-y-[0px]"
            }`}
            onClick={() => {
              setIsClicked(true);
              setIsInTransition(true);
            }}
          >
            Contact Us
          </button>
        )}
        {(isClicked || isInTransition) && (
          <div
            className={`!font-maison !text-base lg:!text-lg text-tender-pink p-4 text-center transition-all duration-1000  ${
              isInTransition
                ? "opacity-0 translate-y-[-36%]"
                : "opacity-100 translate-y-[0px] red-glow-mini"
            }`}
          >
            <div className="slider">
              <div className="edge"></div>
              <ul
                className="slideContainer text-red-revolt animate-slide"
                id="money_start"
              >
                <li className="slideItem">
                  <p className="text-red-revolt !decoration-red-revolt inline !text-base lg:!text-lg px-2 lg:px-6">
                    Our contact info is below.
                  </p>{" "}
                </li>
                <li className="slideItem text-tender-pink">
                  <p>You've come so far, might as well</p>
                </li>
                <li className="slideItem">
                  <span className="text-red-revolt !decoration-red-revolt inline !text-base lg:!text-lg px-2 lg:px-6">
                    reach out.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <a
        className={`animate-pulse text-red-revolt hover:text-red-revolt transition-all text-lg mb-16 duration-1000 ${
          isInTransition ? "opacity-0 text-xs" : "opacity-100 text-lg"
        } ${
          isClicked && !isInTransition
            ? "opacity-100 text-xl text-neon-red"
            : "-m-6"
        }`}
        href="mailto:ceo@summervalentine.co"
      >
        ceo@summervalentine.co
      </a>
    </div>
  );
};

export default ContactDecoy;
