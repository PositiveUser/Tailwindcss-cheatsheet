import React, { useContext, useEffect } from "react";
import Title from "../Title";
import { TailwindContext } from "../../context/TailwindContext";

let responsiveJsx = (res) => (
  <div className="flex pb-8 md:pb-6 ">
    {Object.values(res).map((v) => {
      return (
        <div className="flex-1 bg-purple-100 uppercase md:p-3 " key={v}>
          {v.map((j, key) => {
            return (
              <div className="p-2 tracking-wide lowercase" key={key}>
                <div
                  className={
                    key === 0
                      ? "text-gray-700 italic border-b-2 border-purple-300 pb-2"
                      : "ffamily-b text-red-800 font-normal px-2"
                  }
                >
                  {j}
                </div>
              </div>
            );
          })}
        </div>
      );
    })}
  </div>
);

function Breakpoints({ title }) {
  const { responsive, responsiveIcons } = useContext(TailwindContext);
  const ref = React.createRef(null);

  useEffect(() => {
    ref.current.innerHTML = responsiveIcons;
  }, []);

  return (
    <div className="">
      <Title title="Breakpoints" />
      <div className="grid text-center overflow-x-scroll lg:overflow-hidden">
        <div
          className="grid grid-cols-6  bg-purple-100 text-blue-500 py-6 "
          ref={ref}
        ></div>
        {responsiveJsx(responsive)}
      </div>
    </div>
  );
}

export default Breakpoints;
