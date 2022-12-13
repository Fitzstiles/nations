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
            ALL NATIONS CHRISTIAN YOUTH PRAYER INTERCESSOR FOUNDATION is a
            non-governmental organisation (NGO),non-political and a non-profit
            organisation.ANCYPF is a group of people that fuctions independently
            at the community ,national and international level of to serve the
            Nigerian Christian Youths because of the burdenshe has
          </p>
          <p>
            ANCYPF is set up by a group of people driven by a common interest
            which is improving the lives of Christian Youths in Nigeria and in
            all Nations arround the World by providing the needed services free
            of charge. We are living in a country where many youths are subject
            to untold hardship, Emotional trauma,poverty ,unemployment ,sin etc.
            Our emergence and presence is to proffer solutions to these
            problems.
          </p>
          <p>
            There are many youths out there who are seeking for help and
            assistance, calling on the government of the to come to their rescue
            but their voices are not heard. The Nigerian government has failed
            at this therefore , this NGO is established to not only help and
            attend to these areas by equiping Nigerian christian Youths but also
            to raise rugged youths that are burning for christ with a view to
            generating work force for end time revival
          </p>
        </div>
      </Parallax>
    </div>
  );
};

export default About;
