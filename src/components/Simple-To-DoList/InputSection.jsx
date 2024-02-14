import React, { useState } from "react";
import ToDoLists from "./ToDoLists";

const InputSection = () => {
  const [text, setText] = useState("");
  const [task, setTask] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
    },
    {
      id: 2,
      text: "Meeting at office",
    },
  ]);

  function handleAdd(text) {
    const newTask = {
        id: Date.now(),
        text,
    };
    setTask([...task, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTask(task.filter(task => task.id !== id));
  }

  return (
    <>
    <div className="w-full max-w-md flex items-center gap-2">
      <input
        type="text"
        placeholder="Add your daily tasks..."
        className="px-2 py-3 w-full max-w-96 my-3 rounded-xl"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => handleAdd(text)}
        className="bg-blue-600 py-3 px-4 rounded-xl text-white hover:bg-blue-800"
      >
        Add
      </button>
    </div>
    {
        task.map(task => (
            <ToDoLists task={task} key={task.id} deleteTask={deleteTask}/>
        ))
    }
    </>

  );
};

export default InputSection;
