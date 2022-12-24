import React from "react";
import { Parallax } from "react-parallax";

// styling in styles.css folder

const Forex = () => {
  return (
    <div className="position">
      <Parallax
        className="image"
        bgImage="https://independent.ng/wp-content/uploads/Forex-2-678x430.jpg"
        strength={200}
        bgImageStyle={{ height: "100vh", width: "100%" }}
      >
        <div className="Forex">
          <h1> Forex Trading Courses</h1>
          <p>
            At ANCYPF you'll receive Trainings on how to trade. our skilled
            professional traders will guide and take you from beginner to an
            advanced professional forex trader
          </p>
          <p>
            This is done at ALL NATIONS CHRISTIAN YOUTH PRAYER INTERCESSOR
            FOUNDATION to ensure that christian youths are nutured and raised in
            the way of the Lord as well as being equiped with the necessary
            skills so they don't go seeking it in the wrong places or being
            influeced by their peers.
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Forex;
