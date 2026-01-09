import React, { useState } from "react";
import usePosts from "../../hooks/usePosts";
import List from "./List";
import Form from "./Form";
import Button from "../Button/Button";
import FilterList from "./FilterList";
import ColorPicker from "../ColorPicker/ColorPicker";

import "./style.css";
const Posts = () => {
  const {
    posts,
    changeTitle,
    deleteItem,
    addItem,
    sortList,
    setFilterStatus,
    filterStatus,
  } = usePosts();

  const [color, setColor] = useState();
  return (
    <>
      <Form addItem={addItem} color={color} />
      <hr />
      <ColorPicker color={color} setColor={setColor} />
      <Button title="Sort list" handleClick={() => sortList()}></Button>
      <FilterList
        setFilterStatus={setFilterStatus}
        filterStatus={filterStatus}
      />
      <List posts={posts} changeTitle={changeTitle} deleteItem={deleteItem} />
    </>
  );
};

export default Posts;
