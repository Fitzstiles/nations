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
          <p>
            ANCYPF has the mandate of transforming and raising the youth via
            EMPOWERMENT and Kingdom PRIESTHOOD. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsa corporis quia dolorum quidem
            dicta mollitia voluptate unde iusto dolorem, at repellendus
            necessitatibus nulla qui corrupti quis! Distinctio facere modi
            quidem.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            aliquam, cumque nisi quae doloribus, nesciunt modi nobis
            reprehenderit, quam debitis incidunt assumenda veritatis soluta odio
            unde dolorum voluptatibus! Voluptatum, nam.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            provident tempore iste sint dolore voluptates aliquid repudiandae
            quia, nisi veritatis possimus odit voluptas doloremque minus
            corporis, rerum facere nulla odio?
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default Computer;
