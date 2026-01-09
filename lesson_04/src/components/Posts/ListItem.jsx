import React from "react";
import Button from "../Button/Button";

const ListItem = ({ item, changeTitle, deleteItem }) => {
  const getClassName = () => {
    const classes = [`list__item`];
    item.completed && classes.push(`list__item--completed`);
    return classes.join(` `);
  };

  return (
    <li className={getClassName()}>
      {item.title}{" "}
      <Button title={"Change title"} handleClick={() => changeTitle(item)} />{" "}
      <Button title={"Delete"} handleClick={() => deleteItem(item)} />
    </li>
  );
};

export default ListItem;
