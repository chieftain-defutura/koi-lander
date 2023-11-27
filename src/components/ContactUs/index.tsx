import React, { useState } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevronDown.svg";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Field } from "formik";
import "./ContactUs.scss";

const initialValues = {
  name: "",
  email: "",
  subject: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

interface IContactUs {
  setActive: (active: boolean) => void;
}

const ContactUs: React.FC<IContactUs> = ({ setActive }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSubjectSelect = (subject: any) => {
    setSelectedSubject(subject);
    setIsActive(false);
  };

  return (
    <div className="contact-us">
      <div className="mx">
        <div className="contact-us-container">
          <div className="close-icon" onClick={() => setActive(false)}>
            <CloseIcon />
          </div>

          <div className="contact-us-content">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values: any) => console.log(values)}
            >
              {() => (
                <Form>
                  <div className="grid-item">
                    <div>
                      <Field name="name" placeholder="Name" type="text" />
                    </div>
                    <div>
                      <Field name="email" placeholder="E-mail" type="email" />
                    </div>
                  </div>
                  <div className="drop-down-wrapper">
                    <div className="flex-item" onClick={handleToggle}>
                      <p>{selectedSubject ? selectedSubject : "Subject"}</p>
                      <ChevronDown
                        className={`drop-down-icon ${isActive ? "rotate" : ""}`}
                        onClick={handleToggle}
                      />
                    </div>
                    {isActive && (
                      <div className="select-drop-down">
                        <p
                          onClick={() =>
                            handleSubjectSelect("Partnership related")
                          }
                        >
                          Partnership related
                        </p>
                        <p
                          onClick={() =>
                            handleSubjectSelect("Recruitment related")
                          }
                        >
                          Recruitment related
                        </p>
                        <p
                          onClick={() =>
                            handleSubjectSelect("Investment related")
                          }
                        >
                          Investment related
                        </p>
                        <p onClick={() => handleSubjectSelect("Others")}>
                          Others
                        </p>
                      </div>
                    )}
                  </div>
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #252525",
                      width: "100%",
                      padding: "16px 24px",
                    }}
                  />
                  <div className="submit-btn">
                    <button>Submit</button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
