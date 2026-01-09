import React, { useState, useEffect } from "react";
import service from "../services/post";
const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const fetchPosts = async () => {
    try {
      const response = await service.get();
      setPosts(response); //.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const changeTitle = async (item) => {
    const title = prompt(`Enter new title`, `Lorem ipsum`);
    if (title === null) return;
    try {
      const response = await service.put(item.id, { title });
      console.log("Updated item:", response);
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (item) => {
    try {
      await service.delete(item.id);
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };

  const addItem = async (data) => {
    try {
      await service.post(data);
      fetchPosts();
    } catch (err) {
      console.log(err);
    }
  };
  const sortList = () => {
    const sorted = [...posts].sort((a, b) => a.title.localeCompare(b.title));
    setPosts(sorted);
  };

  const FilteredList = () => {
    switch (filterStatus) {
      case "true":
        return posts.filter((p) => p.completed);
      case "false":
        return posts.filter((p) => !p.completed);
      default:
        return posts;
    }
  };
  const getFilteredList = FilteredList();

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts: getFilteredList,
    changeTitle,
    deleteItem,
    addItem,
    sortList,
    setFilterStatus,
    filterStatus,
  };
};

export default usePosts;
