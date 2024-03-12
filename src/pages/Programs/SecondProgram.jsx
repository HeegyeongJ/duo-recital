import React from "react";
import Program from "../../components/Program";

const SecondProgram = () => {
  const program = [
    {
      composer: "Dave Brubeck(1920 - 2012)",
      piece: "Points on Jazz for 2 Pianos",
      subTitle: "III. Blues  VII. Waltz",
      player1: "오하은",
      player2: "홍수희",
      description: `발레모음곡이자 한 테마를 주제로 한 재즈변주곡으로 
      다양한 음악장르를 빌려 작곡되었는데
      3번은 블루스, 7번은 왈츠를 기반으로 작곡되었다.`,
    },
    {
      composer: "Charles Gounod(1818 – 1893)",
      piece: "Faust Waltz",
      subTitle: "for 2 Pianos 8 Hands",
      player1: "홍수희 오하은",
      player2: "정희경 이희수",
      description: `괴테의 희곡 <파우스트>를 원작으로 한 오페라 곡중 하나이며
      이 왈츠는 파우스트 박사가 메피스토라는 
      악마와 계약을해서 젊어지자 울려퍼진 곡이다.`,
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
      <p className="encore">Special Encore</p>
      <div className="bg-flower-bottom">
        <img src="/assets/bg_flower.svg" alt="" />
      </div>
    </>
  );
};

export default SecondProgram;
