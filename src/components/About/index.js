import React from "react";
import profileImage from "../../assets/cover/profile.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Jefferson Quandt</h1>
      <img
        src={profileImage}
        className="my-2"
        style={{ width: "30%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
