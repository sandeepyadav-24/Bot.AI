import React from "react";
import Card from "./Card";

const Banner = () => {
  return (
    <div>
      <div className="text-white text-7xl font-bold mx-20">
        YOUR AI CHAT <br />
        SQUAD.{" "}
        <span className="text-green-500">
          LEARN NEW <br /> THINGS
        </span>{" "}
        OR SIMPLY <br /> HAVE FUN
      </div>
      <Card />
    </div>
  );
};

export default Banner;
