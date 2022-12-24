import React from "react";
import { Parallax } from "react-parallax";

// styling in styles.css folder

const Computer = () => {
  return (
    <div className="position">
      <Parallax
        className="image"
        bgImage="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWUphA?ver=e7f7"
        strength={200}
        bgImageStyle={{ height: "100vh", width: "100%" }}
      >
        <div className="theText">
          <h1> ICT and Computer Training</h1>
          <p></p>
          <p>
            ANCYPF is equiped with highly trained computer operators who will be
            responsible for teaching and equiping the youth with the needed
            computer skills
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Computer;
