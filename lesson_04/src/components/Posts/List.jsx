import React from "react";
import ListItem from "./ListItem";
const List = ({ posts, changeTitle, deleteItem }) => {
  return posts.length ? (
    <ul>
      {posts.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          changeTitle={changeTitle}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  ) : null;
};

export default List;
