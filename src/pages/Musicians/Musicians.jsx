import React from "react";
import Musician from "../../components/Musician";

const Musicians = () => {
  const musicians = [
    {
      imgUrl: "/assets/heegyeong.jpg",
      name: "정희경",
      profiles: [
        "Montecito International piano competition, 2nd Prize",
        "YMIC International Competition, Honorable mention",
        "루마니아 Orchestra Simfonică a Filarmonicii Pitești협연",
        "숙명여자대학교 피아노과 졸업",
      ],
    },
    {
      imgUrl: "/assets/soohee.jpg",
      name: "홍수희",
      profiles: [
        "계원예술고등학교 졸업",
        "숙명여자대학교 성적우수 입학",
        "숙명여자대학교 피아노과 졸업",
        "숙명여대 piano ensemble concert 연주",
      ],
    },
  ];
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
