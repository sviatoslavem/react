import React, { useRef } from "react";

const Form = ({ addItem, color }) => {
  const titleRef = useRef();
  const completedRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: titleRef.current.value,
      completed: completedRef.current.checked,
    };
    addItem(data);
  };
  return (
    <form
      className="userForm"
      style={{ backgroundColor: color }}
      onSubmit={handleSubmit}
    >
      <label>
        Title: <input type="text" ref={titleRef} />
      </label>
      <label>
        Completed: <input type="checkbox" ref={completedRef} />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Form;
