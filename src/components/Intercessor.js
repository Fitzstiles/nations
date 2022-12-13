import React from "react";
import { Parallax } from "react-parallax";

// styling in styles.css folder

const Intercessor = () => {
  return (
    <div className="position">
      <Parallax
        className="image"
        bgImage="https://i0.wp.com/renewaljournal.com/wp-content/uploads/2017/04/sth-africa.jpg?resize=600%2C283&ssl=1"
        strength={200}
        bgImageStyle={{ height: "100vh", width: "100%" }}
      >
        <div className="Forex">
          <h1> School of Intercessors</h1>
          <p>
            At ANCYPF We offer one of the best Forex Trading courses from
            beginner to advanced . Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Ipsa corporis quia dolorum quidem dicta mollitia
            voluptate unde iusto dolorem, at repellendus necessitatibus nulla
            qui corrupti quis! Distinctio facere modi quidem.
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

export default Intercessor;
