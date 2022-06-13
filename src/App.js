import "./App.css";
import Header from "./Components/Header";
import CreateNote from "./Components/CreateNote";
import Note from "./Components/Note";
import Foooter from "./Components/Footer";
import React, { useState } from "react";
function App() {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((preVal) => [...preVal, note]);
  };

  const onDelete = (id) => {
    setAddItem((preVal) => preVal.filter((x) => preVal.indexOf(x) !== id));
  };
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="container-fluid notes">
        <div className="row text-md-start justify-content-md-start justify-content-center">
          {addItem.map((val, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
              />
            );
          })}
        </div>
      </div>
      ;
      <Foooter />
    </>
  );
}

export default App;
