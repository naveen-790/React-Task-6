import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Smart Glove for 3d Environment</h3>
        <p>
          {" "}
Smart glove consisting a MPU9250 sensor and flex sensor
connected to raspberry pi is used for motion tracking of a virtual
hand in a 3d environment in unity.
          {" "}
        </p>
        <h3>NAVIgation System</h3>
        <p>
          {" "}
          NAVIgation System is a dynamic routing system based on traffic using
AI. It can be used for finding shortest and quickest path between 2
loctions and also has Ambulance navigation and delivery routing. 
          {" "}
        </p>
        <h3>Signature Verfication using NN</h3>
        <p>
          {" "}
          Developed MLP Neutal Networks to identify and to verify a signature.
          {" "}
        </p>
        <h3>Encrypted Chat over Lan</h3>
        <p>
          {" "}
Implementation of full duplex encrypted chat system between
clients via a server using RSA encryption and Diffie-Hellman key
exchange algorithm. Implemented using java multithreading and
socket programming
          {" "}
        </p>
        <h3>HID using Hand Gestures</h3>
        <p>
          {" "}
Human Interface Device based on Hand gestures using MPU6050
sensor and flex sensors fixed on a glove and Arduino to simulate
Keyboard and Mouse inputs.
          {" "}
        </p>
      </div>      
    </section>
  );
}

export default Projects;
