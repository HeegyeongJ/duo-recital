import "./App.css";
import { Section, SectionsContainer } from "react-fullpage";
import Main from "./pages/Main/Main";
import Musicians from "./pages/Musicians/Musicians";
import FirstProgram from "./pages/Programs/FirstProgram";
import SecondProgram from "./pages/Programs/SecondProgram";
import BackCover from "./pages/BackCover/BackCover";
import { useEffect, useState } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let options = {
    anchors: [
      "sectionOne",
      "sectionTwo",
      "sectionThree",
      "sectionFour",
      "sectionFive",
    ],
  };
  return (
    <>
      {isMobile ? (
        <SectionsContainer {...options}>
          <Section>
            <Main />
          </Section>
          <Section>
            <Musicians />
          </Section>
          <Section>
            <FirstProgram />
          </Section>
          <Section>
            <SecondProgram />
          </Section>
          <Section>
            <BackCover />
          </Section>
        </SectionsContainer>
      ) : (
        <div className="pc">모바일 환경에서만 보실 수 있습니다.</div>
      )}
    </>
  );
}

export default App;
