import "./contact.css";

const Contact = () => {
  return (
    <div className="contact__container">
      <h1>Contact us</h1>
      <div className="input_section">
        <div className="wrapper">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Describe yourself here..."
        ></textarea>
        <div className="submitButton">
          <button>Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
