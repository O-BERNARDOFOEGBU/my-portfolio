// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import "./Contact.scss";
// import SectionHeading from "../SectionHeading/SectionHeading";
// import { Icon } from "@iconify/react";
// import SocialLinks from "../SocialLinks/SocialLinks";

// const Contact = ({ data, socialData }) => {
//   const { title, text, subTitle } = data;

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_vifytjq", "template_nbzwh1g", form.current, {
//         publicKey: "SmNU-0XA6CaC2jWoR",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="st-dark-bg">
//       <div className="st-height-b100 st-height-lg-b80"></div>
//       <SectionHeading title="Contact" />
//       <div
//         className="container"
//         data-aos="fade-up"
//         data-aos-duration="800"
//         data-aos-delay="500"
//       >
//         <div className="row d-flex">
//           <div className="col-lg-6">
//             <h3 className="st-contact-title">Just say Hello</h3>
//             <div id="st-alert"></div>
//             <form
//               ref={form}
//               onSubmit={sendEmail}
//               // action="#"
//               // method="POST"
//               className="st-contact-form"
//               id="contact-form"
//             >
//               <div className="st-form-field">
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div className="st-form-field">
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//               <div className="st-form-field">
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   placeholder="Your Subject"
//                   required
//                 />
//               </div>
//               <div className="st-form-field">
//                 <textarea
//                   cols="30"
//                   rows="10"
//                   id="message"
//                   name="message"
//                   placeholder="Your Message"
//                   required
//                 ></textarea>
//               </div>
//               <button
//                 className="st-btn st-style1 st-color1"
//                 type="submit"
//                 id="submit"
//                 name="submit"
//               >
//                 Send Message
//               </button>
//             </form>
//             <div className="st-height-b0 st-height-lg-b30"></div>
//           </div>
//           <div className="col-lg-6">
//             <div className="st-height-b0 st-height-lg-b40"></div>
//             <h3 className="st-contact-title">{title}</h3>
//             <div className="st-contact-text">{text}</div>
//             <div className="st-contact-info-wrap">
//               <div className="st-single-contact-info">
//                 <div className="st-icon-wrap">
//                   <Icon icon="fa-regular:envelope" />
//                 </div>
//                 <div className="st-single-info-details">
//                   <h4>Email</h4>
//                   <Link to="#">devis@example.com</Link>
//                   <Link to="#">info@support.com</Link>
//                 </div>
//               </div>
//               <div className="st-single-contact-info">
//                 <div className="st-icon-wrap">
//                   <Icon icon="fa-solid:phone-alt" />
//                 </div>
//                 <div className="st-single-info-details">
//                   <h4>Phone</h4>
//                   <span>+1 876-369-9009</span>
//                   <span>+1 213-519-1786</span>
//                 </div>
//               </div>
//               <div className="st-single-contact-info">
//                 <div className="st-icon-wrap">
//                   <Icon icon="mdi:location" />
//                 </div>
//                 <div className="st-single-info-details">
//                   <h4>Address</h4>
//                   <span>
//                     2661 High Meadow Lane Bear Creek, <br />
//                     Olancha, KY 93544
//                   </span>
//                 </div>
//               </div>
//               <div className="st-social-info">
//                 <div className="st-social-text">{subTitle}</div>
//                 <SocialLinks data={socialData} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="st-height-b100 st-height-lg-b80"></div>
//     </section>
//   );
// };

// Contact.propTypes = {
//   data: PropTypes.object,
//   socialData: PropTypes.array,
// };

// export default Contact;

import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Contact.scss";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import SocialLinks from "../SocialLinks/SocialLinks";

const Contact = ({ data, socialData }) => {
  const { title, text, subTitle } = data;

  const form = useRef();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSendButtonDisabled, setSendButtonDisabled] = useState(true);
  const [isMessageSent, setMessageSent] = useState(null); // null: not yet sent, true: success, false: error

  useEffect(() => {
    setSendButtonDisabled(!validateInputs());
  }, [inputs]);

  useEffect(() => {
    if (isMessageSent) {
      setTimeout(() => setMessageSent(null), 2000); // Hide message after 2 seconds
    }
  }, [isMessageSent]);

  const validateInputs = () => {
    const { name, email, subject, message } = inputs;
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      subject.trim() !== "" &&
      message.trim() !== ""
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return; // Prevent sending mail if inputs are not valid
    }

    emailjs
      .sendForm("service_vifytjq", "template_nbzwh1g", form.current, {
        publicKey: "SmNU-0XA6CaC2jWoR",
      })
      .then(
        () => {
          // alert("Message sent successfully!");
          setMessageSent(true);
          setInputs({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          // alert("Failed to send message. Please try again.");
          setMessageSent(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title="Contact" />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <div className="row d-flex">
          <div className="col-lg-6">
            <h3 className="st-contact-title">Just say Hello</h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="st-contact-form"
              id="contact-form"
            >
              <div className="st-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={inputs.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={inputs.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="st-form-field">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Your Subject"
                  required
                  value={inputs.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="st-form-field">
                <textarea
                  cols="30"
                  rows="10"
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  value={inputs.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button
                className="st-btn st-style1 st-color1"
                type="submit"
                id="sendBtn"
                name="submit"
                disabled={isSendButtonDisabled}
              >
                Send Message
              </button>
              <div id="st-alert">
                {isMessageSent === true && (
                  <div className="success-message">
                    Message sent successfully!
                  </div>
                )}
                {isMessageSent === false && (
                  <div className="error-message">
                    Failed to send message. Please try again.
                  </div>
                )}
              </div>
            </form>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b40"></div>
            <h3 className="st-contact-title">{title}</h3>
            <div className="st-contact-text">{text}</div>
            <div className="st-contact-info-wrap">
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                <div className="st-single-info-details">
                  <h4>Email</h4>
                  <Link to="#">devis@example.com</Link>
                  <Link to="#">info@support.com</Link>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="fa-solid:phone-alt" />
                </div>
                <div className="st-single-info-details">
                  <h4>Phone</h4>
                  <span>+1 876-369-9009</span>
                  <span>+1 213-519-1786</span>
                </div>
              </div>
              <div className="st-single-contact-info">
                <div className="st-icon-wrap">
                  <Icon icon="mdi:location" />
                </div>
                <div className="st-single-info-details">
                  <h4>Address</h4>
                  <span>
                    2661 High Meadow Lane Bear Creek, <br />
                    Olancha, KY 93544
                  </span>
                </div>
              </div>
              <div className="st-social-info">
                <div className="st-social-text">{subTitle}</div>
                <SocialLinks data={socialData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="st-height-b100 st-height-lg-b80"></div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.object,
  socialData: PropTypes.array,
};

export default Contact;
