import { Parallax } from "react-parallax";
import "./about.css";

const About = () => {
  return (
    <div className="position">
      <Parallax
        className="image"
        bgImage="https://i0.wp.com/cms.babbel.news/wp-content/uploads/2019/09/CM_MagazineHeader_10MostSpokenLanguages.png"
        strength={200}
        // bgImageStyle={{ height: "100vh", width: "100%" }}
      >
        <div className="image__text">
          <h1>ANCYPF</h1>
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

export default About;
