import { useEffect, useState } from "react";
import NavBar from './scenes/navbar';
import { SelectedPage, SelectedLanguage } from "./share/types";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup";
// import LineGradient from "./components/LineGradient";
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
import { TextsType } from "./types/languageTypes";
// import { engTexts, espTexts } from './data/appTexts'
import { importAppTexts } from "./utilities/utils";

const initTexts: TextsType = {
  landing: {
    welcome: "Welcome",
  }
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [selectedLanguage] = useState<SelectedLanguage>(SelectedLanguage.Spanish)
  const [texts, setTexts] = useState<TextsType>(initTexts)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
  const isDesktop = useMediaQuery("(min-width: 1060px")
  const [isAppFlipped, setIsAppFlipped] = useState<boolean>(false)

  useEffect(() => {
    const texts = importAppTexts(selectedLanguage)

    setTexts(texts)
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
        isAppFlipped={isAppFlipped}
        setIsAppFlipped={setIsAppFlipped}
      />

      {isDesktop && (
        !isAppFlipped
          ? <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} position="right-7" />
          : <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} position="left-7" />
      )}

      <div className="bg-gray-800 mx-auto md:h-full mb-[0px]">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          {!isAppFlipped
            ? <Landing
              setSelectedPage={setSelectedPage}
              texts={texts}
            />
            : <LandingFlipped
              setSelectedPage={setSelectedPage}
              texts={texts}
            />
          }

        </motion.div>
      </div>

      {/* <LineGradient /> */}

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Skills)}
        >
          {!isAppFlipped ? <MySkills /> : <MySkillsFlipped />}

        </motion.div>
      </div>

      {/* <LineGradient /> */}

      <div className="bg-gray-800 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        >
          {!isAppFlipped ? <Projects /> : <ProjectsFlipped />}

        </motion.div>
      </div>

      {/* <LineGradient /> */}

      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        >
          {/* {!isAppFlipped ? <Testimonials /> : <TestimonialsFlipped />} */}

          {!isAppFlipped ? <Testimonials2 /> : <Testimonials2Flipped />}

        </motion.div>
      </div>

      {/* <LineGradient /> */}

      <div className="bg-gray-800 mx-auto md:h-full">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
        >

          {!isAppFlipped ? <Contact /> : <ContactFlipped />}

        </motion.div>
      </div>

      {!isAppFlipped ? <Footer /> : <FooterFlipped />}

    </div>
  );
}

export default App;
