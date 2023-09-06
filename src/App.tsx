import { useEffect, useState } from "react";
import NavBar from './scenes/navbar';
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
import { motion } from "framer-motion"
import Landing from "./scenes/landing/Landing";
import LandingFlipped from "./scenes/landing/LandingFlipped";
import MySkills from "./scenes/mySkills/MySkills";
import MySkillsFlipped from "./scenes/mySkills/MySkillsFlipped";
import Projects from "./scenes/projects/Projects";
import ProjectsFlipped from "./scenes/projects/ProjectsFlipped";
import Testimonials2 from "./scenes/testimonials/Testimonials2";
import Testimonials2Flipped from "./scenes/testimonials/Testimonials2Flipped";
import Contact from "./scenes/contact/Contact";
import ContactFlipped from "./scenes/contact/ContactFlipped";
import Footer from "./scenes/footer/Footer";
import FooterFlipped from "./scenes/footer/FooterFlipped";
import { importAppTexts } from "./utilities/utils";
import { useAppContext } from './context/AppContext';
import { AppState, SelectedPage } from "./types/appType";

const isAppFlipped = (state: AppState) =>
  state.appFlipped === "flipped"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const isDesktop = useMediaQuery("(min-width: 1060px")
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const texts = importAppTexts(state.language)

    dispatch({ type: 'setTexts', payload: texts })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }

      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-deep-blue">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      {isDesktop && (
        !isAppFlipped(state)
          ? <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} position="right-7" />
          : <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} position="left-7" />
      )}

      <div className="bg-gray-800 mx-auto md:h-full pb-28 mb-[0px]">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {state.appFlipped === "notFlipped"
            ? <Landing
              setSelectedPage={setSelectedPage}
            />
            : <LandingFlipped
              setSelectedPage={setSelectedPage}
            />
          }

        </motion.div>
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          {isAppFlipped(state) ? <MySkillsFlipped /> : <MySkills />}

        </motion.div>
      </div>

      <div className="bg-gray-800 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          {isAppFlipped(state) ? <ProjectsFlipped /> : <Projects />}

        </motion.div>
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        >

          {isAppFlipped(state) ? <Testimonials2Flipped /> : <Testimonials2 />}

        </motion.div>
      </div>

      <div className="bg-gray-800 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >

          {isAppFlipped(state) ? <ContactFlipped /> : <Contact />}

        </motion.div>
      </div>

      {isAppFlipped(state) ? <FooterFlipped /> : <Footer />}

    </div>
  );
}

export default App;
