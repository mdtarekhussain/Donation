import React, { useEffect, useState } from "react";
import List from "../List/List";

const JobList = () => {
  const [lists, setList] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h3 className="text-[48px] font-[800]">
          Job Category List {lists.length}
        </h3>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="flex flex-col md:flex-row gap-2 mt-10">
          {lists.map((list) => (
            <List key={list.id} list={list}></List>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
