import React from "react";

export default function footer() {
  return (
    <footer
      className="text-center mt-auto py-3"
      style={{ backgroundColor: "#f1c40f" }}
    >
      <p className="m-0 text-light">copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
