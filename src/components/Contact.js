import { React, useState } from "react";
import "./contact.css";

const Contact = () => {
  
  const [user, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let value, name;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  // console.log(user);
  const sendInfo = async (e) => {
    const [Name, Email, Subject, Message] = user;
    e.preventDefault();
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Email, Subject, Message }),
    };
    const sendW = await fetch(
      "https://react-ecommerce-contact-c1cb7-default-rtdb.firebaseio.com/Test.json",
      option
    );
    console.log(sendW);
    if (sendW) {
      return alert("Message Sent");
    }
  };

  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="con-form">
            <h2># contact us</h2>
            <form method="POST">
              <div className="box">
                <div className="label">
                  <h4>Name</h4>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Name"
                    value={user.Name}
                    name="Name"
                    onChange={data}
                  ></input>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>E-mail</h4>
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={user.Email}
                    name="Email"
                    onChange={data}
                  ></input>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>Subject</h4>
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Subject"
                    value={user.Subject}
                    name="Subject"
                    onChange={data}
                  ></input>
                </div>
              </div>
              <div className="box">
                <div className="label">
                  <h4>Message</h4>
                </div>
                <div className="input-box">
                  <textarea
                    placeholder="Message !"
                    value={user.Message}
                    name="Message"
                    onChange={data}
                  ></textarea>
                </div>
              </div>
              <div className="bottom">
                <button className="btn" type="sublet" onClick={sendInfo}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
