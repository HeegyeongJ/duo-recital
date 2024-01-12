import "./App.css";
import { Section, SectionsContainer } from "react-fullpage";
import Main from "./pages/Main/Main";
import Musicians from "./pages/Musicians/Musicians";
import FirstProgram from "./pages/Programs/FirstProgram";
import SecondProgram from "./pages/Programs/SecondProgram";
import BackCover from "./pages/BackCover/BackCover";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import WelcomLoading from "./pages/WelcomeLoading/WelcomLoading";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  let options = {
    anchors: ["main", "musicians", "program1", "program2", "backCover"],
  };

  const [main, setMain] = useState(false);

  useEffect(() => {
    setTimeout(() => setMain(true), 3000);
  }, []);
  return (
    <>
      {isMobile ? (
        !main ? (
          <WelcomLoading />
        ) : (
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
        )
      ) : (
        <div className="pc">모바일 환경에서만 보실 수 있습니다.</div>
      )}
    </>
  );
}

export default App;
