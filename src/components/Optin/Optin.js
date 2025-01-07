import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
  render() {
    return (
      <div className="optin">
        <p>
          If you want to ask us questions click here and write us a message.
        </p>
        <a
          href="https://www.instagram.com/amaranthagency/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Click Me</button>
        </a>
      </div>
    );
  }
}

export default Optin;
