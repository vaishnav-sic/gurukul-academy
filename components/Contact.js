import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import BlockTitle from "./BlockTitle";
import ContactBgShape from "../assets/images/shapes/contact-bg-shape-1-1.png";
import ContactImage from "../assets/images/resources/ContactUs.png";
import TrophyImage from "../assets/images/SIC_Logo.svg";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    graduation: "",
    passoutYear: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    graduation: "",
    passoutYear: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@(gmail|yahoo|rediff)\.com\b/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    const dateTime = `${formattedDate} ${formattedTime}`;

    const formDataWithDateTime = {
      ...formData,
      dateTime: dateTime,
    };

    // Validation
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      graduation: "",
      passoutYear: "",
    };

    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email =
        "Invalid email format (must be @gmail.com or @yahoo.com)";
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Invalid phone number (must be 10 digits)";
    }

    if (formData.graduation.trim() === "") {
      newErrors.graduation = "Graduation is required";
    }

    if (formData.passoutYear.trim() === "") {
      newErrors.passoutYear = "Passout Year is required";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    try {
      const docRef = await addDoc(
        collection(db, "EnquiryForm"),
        formDataWithDateTime
      );

      setShowPopup(true);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        graduation: "",
        passoutYear: "",
        message: "",
      });

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <section className="contact-one" id="enquire">
      <img src={ContactBgShape} className="contact-one__bg-shape-1" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <form
              onSubmit={handleSubmit}
              className="contact-form-validated contact-one__form">
              <BlockTitle
                textAlign="left"
                paraText="Contact Now"
                titleText={`Have Question?\n Write a Message`}
              />
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && (
                    <span className="error-message">{errors.firstName}</span>
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && (
                    <span className="error-message">{errors.lastName}</span>
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>
                <div className="col-lg-6">
                  <select
                    name="graduation"
                    value={formData.graduation}
                    onChange={handleInputChange}>
                    <option value="">Select Graduation</option>
                    <option value="BE(CS/IT)">BE(CS/IT)</option>
                    <option value="BE(other)">BE(other)</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="BCS">BCS</option>
                    <option value="MCS">MCS</option>
                    <option value="BSC">BSC</option>
                    <option value="OTHER">OTHER</option>
                  </select>
                  {errors.graduation && (
                    <span className="error-message">{errors.graduation}</span>
                  )}
                </div>
                <div className="col-lg-6">
                  <select
                    name="passoutYear"
                    value={formData.passoutYear}
                    onChange={handleInputChange}>
                    <option value="">Select Passout Year</option>
                    {Array.from({ length: 8 }, (_, i) => 2019 + i).map(
                      (year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      )
                    )}
                    <option value="OTHER">Other</option>
                  </select>
                  {errors.passoutYear && (
                    <span className="error-message">{errors.passoutYear}</span>
                  )}
                </div>
                <div className="col-lg-12">
                  <input
                    type="text"
                    placeholder="Write Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}></input>
                </div>
                <div className="col-lg-12 text-left">
                  <button type="submit" className="thm-btn contact-one__btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="result"></div>

            {/* Pop-up */}
            {showPopup && (
              <div className="popup">
                <p>We will get back to you shortly.</p>
                <img src={TrophyImage} alt="Trophy" className="trophy-image" />
                <div className="green-line"></div>
              </div>
            )}
          </div>
          <div
            className="col-lg-5 d-flex wow fadeInRight"
            data-wow-duration="1500ms">
            <div className="my-auto">
              <div className="contact-one__image">
                <img src={ContactImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
