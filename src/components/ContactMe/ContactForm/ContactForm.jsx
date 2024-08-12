import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    laststName: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //connecting with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, laststName, email, phoneNo, message } = userData;

    if (firstName && laststName && email && phoneNo && message) {
      const res = await fetch(
        "https://ap-tech-enterprise-default-rtdb.firebaseio.com/clientData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            laststName,
            email,
            phoneNo,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          firstName: "",
          laststName: "",
          email: "",
          phoneNo: "",
          message: "",
        });
        alert("data stored");
      } else {
        alert("Please fill all the fields in the form");
      }
    } else {
      alert("Please fill all the fields in the form");
    }
  };
  return (
    <div className="contact-form-content">
      <form method="POST">
        <div className="name-container">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={userData.firstName}
            onChange={postUserData}
            required
          />
          <input
            type="text"
            name="laststName"
            placeholder="Last Name"
            value={userData.laststName}
            onChange={postUserData}
            required
          />
        </div>
        <div className="name-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userData.email}
            onChange={postUserData}
            required
          />
          <input
            type="number"
            name="phoneNo"
            placeholder="Phone Number"
            value={userData.phoneNo}
            onChange={postUserData}
            required
          />
        </div>
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          rows={3}
          value={userData.message}
          onChange={postUserData}
          required
        ></textarea>

        <button type="submit" onClick={submitData}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
