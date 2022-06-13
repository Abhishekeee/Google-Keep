import React from "react";
import Logo from "../images/GoogleNoteLogo.png";
export default function header() {
  return (
    <div
      className="d-flex text-light p-3 align-items-center shadow"
      style={{ backgroundColor: "#f1c40f" }}
    >
      <img src={Logo} className="img-fluid" alt="Logo" width="50px" />
      <h1 className="fs-3 ps-2">Google keep</h1>
    </div>
  );
}
