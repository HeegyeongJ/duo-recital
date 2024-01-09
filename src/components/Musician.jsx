import React from "react";

const Musician = ({ item }) => {
  return (
    <li className="musician-li">
      <div className="musician-img">
        <img src={item.imgUrl} alt="" />
      </div>
      <div className="musician-info">
        <em>{item.name}</em>
        <ul>
          {item?.profiles.length > 0 &&
            item?.profiles.map((list) => (
              <li className="musician-profiles">{list}</li>
            ))}
        </ul>
      </div>
    </li>
  );
};

export default Musician;
