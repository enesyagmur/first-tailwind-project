import React, { useContext } from "react";
import pp from "../Assets/pp2.jpg";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";
import { MyContext } from "../context/Context";

const About = () => {
  const { state } = useContext(MyContext);

  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div
      className="w-full xl:h-[650px] h-[1200px] flex xl:flex-row flex-col items-center"
      style={{ backgroundColor: state.bgColor, color: state.textColor }}
    >
      <div
        ref={ref}
        className={`w-full xl:w-1/2 h-1/2 xl:h-full flex flex-col justify-center xl:pr-10 ${
          isIntersecting ? `animate-position-change` : `pl-0 opacity-0 `
        }
      `}
      >
        <div className="w-3/6 xl:w-[400px] h-1/6 sm:h-2/6 flex flex-col items-start xl:items-start justify-center uppercase font-black text-5xl ">
          <p>about</p>
          <p>Me</p>
        </div>

        <div className="w-full xl:w-[400px] h-4/6 lg:h-2/6 flex flex-col  items-start justify-center text-sm">
          <p className="w-4/6 sm:w-3/6 sm:h-3/6 h-3/6 xl:w-5/6 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo soluta
            repudiandae assumenda omnis nemo a harum magnam. Sapiente, voluptate
            porro? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quae, in!
          </p>
          <p className="w-4/6 sm:w-3/6 sm:h-3/6 h-2/6 xl:w-5/6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam
            delectus veniam molestias magni ea doloremque aut soluta inventore
            non.
          </p>
        </div>

        <div className="sm:w-4/6 md:w-3/6 xl:w-[400px] h-1/6 flex items-center justify-start xl:justify-start ">
          <button className="w-2/6 h-2/6 bg-black text-customYellow ">
            Read More
          </button>
          <button className="sm:w-3/6 lg:w-2/6 h-2/6 ml-4 border-2 border-customYellow">
            Free Consulation
          </button>
        </div>
      </div>
      <img
        src={pp}
        alt=""
        className="w-full xl:w-1/2 h-1/2 xl:h-full object-cover"
      />
    </div>
  );
};

export default About;

//animasyon yapmaya çalışıyorum
