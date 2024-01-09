import React from "react";
import Program from "../../components/Program";

const FirstProgram = () => {
  const program = [
    {
      composer: "Camille Saint-Saëns(1835 - 1921)",
      piece: "Danse Macabre for 2 Pianos, Op. 40",
      player1: "이희수",
      player2: "정희경",
      description: `해골들이 깊은 밤 사이 벌이는 광란의 춤을 유머러스하면서도 \n 그로테스크한 터치로 그려낸  왈츠 리듬 중심의 곡이다.`,
    },
    {
      composer: "Astor Piazolla(1921 - 1992)",
      piece: "Libertango for 2 Pianos",
      player1: "홍수희",
      player2: "이희수",
      description: `‘자유로운 탱고’ 라는 뜻처럼 춤을추기 위한곡이 아닌
       음악을 즐기기 위한 곡으로 작곡되었다. 빠르게 몰아치는 템포와 조화로운 화음, 화려한 열정이 섞인 곡이다.`,
    },
    {
      composer: "Manuel Infante(1883 – 1958)",
      piece: "Danses Andalouses",
      subTitle: "I. Ritmo II. Sentimiento III. El vito",
      player1: "정희경",
      player2: "오하은",
      description: `안달루시아 지역의 정열적인 에너지를 표한한 민요. 1악장은 격렬한 춤곡, 2악장과 3악장은 스페인적 요소를 넣어 화려한 기교를 자랑하는 곡이다.`,
    },
  ];
  return (
    <>
      <div className="bg-flower-top">
        <img src="/assets/bg_flower.svg" alt="" />
      </div>
      <h2 className="section-title">PROGRAMS</h2>
      <div className="programs">
        {program.map((item) => (
          <Program program={item} />
        ))}
      </div>
      <div className="bg-flower-bottom">
        <img src="/assets/bg_flower.svg" alt="" />
      </div>
    </>
  );
};

export default FirstProgram;
