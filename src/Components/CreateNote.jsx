import React, { useState } from "react";
import "./CSS/CreateNote.css";

export default function CreateNote(props) {
  const [expand, setExpand] = useState(false);
  const unExpand = () => setExpand(false);
  const form = (e) => {
    e.preventDefault();
  };
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="container my-5" onDoubleClick={unExpand}>
      <div className="row justify-content-center">
        <form className="rounded-3 col-lg-7 col-md-9 col-10 shadow p-0" onSubmit={form}>
          {expand && (
            <input
              type="text"
              className="w-100 title px-3 pt-3"
              placeholder="Title"
              onChange={inputEvent}
              value={note.title}
              name="title"
            />
          )}
          <textarea
            rows="3"
            className="note w-100 px-3 pt-3"
            placeholder="Write a note.."
            onClick={() => setExpand(true)}
            value={note.content}
            onChange={inputEvent}
            name="content"
          ></textarea>
          {expand && <i className="fa-solid fa-plus shadow" onClick={addEvent}></i>}
        </form>
      </div>
    </div>
  );
}
