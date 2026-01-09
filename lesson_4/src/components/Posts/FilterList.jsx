import React from "react";
import Input from "../Button/Input";

const FilterList = ({ setFilterStatus, filterStatus }) => {
  return (
    <>
      <Input
        type={"radio"}
        name={"filter"}
        value={"all"}
        checked={filterStatus === "all"}
        handleChange={(e) => setFilterStatus(e.target.value)}
      />
      <Input
        type={"radio"}
        name={"filter"}
        value={"true"}
        checked={filterStatus === "true"}
        handleChange={(e) => setFilterStatus(e.target.value)}
      />
      <Input
        type={"radio"}
        name={"filter"}
        value={"false"}
        checked={filterStatus === "false"}
        handleChange={(e) => setFilterStatus(e.target.value)}
      />
    </>
  );
};

export default FilterList;
