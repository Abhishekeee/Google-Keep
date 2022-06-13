import React from "react";
import "./CSS/Note.css";
export default function Note(props) {

  const deleteNode=()=>{
   props.deleteItem(props.id); 
  }

  return (
    <div className="box rounded-3 shadow mx-5 my-4">
      <h5 className="fw-bold py-3">{props.title}</h5>
      <p>{props.content}</p>
      <i className="fa-solid fa-trash text-end"onClick={deleteNode}></i>
    </div>
  );
}
