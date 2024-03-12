import React, { useEffect, useState } from "react";
import Musician from "../../components/Musician";

const Musicians = () => {
  const [musicians, setMusicians] = useState([]);
  const fetchMusicians = () => {
    fetch("/data/musicians.json")
      .then((res) => res.json())
      .then((res) => setMusicians(res));
  };

  useEffect(() => {
    fetchMusicians();
  }, []);

  return (
    <>
      <h2 className="section-title">MUSICIANS</h2>
      <ul className="musician-list">
        {musicians.map((item, index) => (
          <Musician key={index} item={item} />
        ))}
      </ul>
    </>
  );
};

export default Musicians;
