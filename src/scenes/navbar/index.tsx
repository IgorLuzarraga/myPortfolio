import { SelectedLanguage, SelectedPage } from "../../share/types"
import useMediaQuery from '../../hooks/useMediaQuery'
import NavAvobeMediumScreen from "./NavAvobeMediumScreen"
import NavSmallScreen from "./NavSmallScreen"
import BtnFlipApp from "../../components/BtnFlipApp"
import ShowLogo from "../../components/ShowLogo"
import ModalLanguageMenu from "../../components/ModalLanguageMenu"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    selectedLanguage: SelectedLanguage,
    setSelectedLanguage: (value: SelectedLanguage) => void,
    isAppFlipped: boolean,
    setIsAppFlipped: (value: boolean) => void,
}

const NavBar = ({
    isTopOfPage,
    selectedPage,
    setSelectedPage,
    selectedLanguage,
    setSelectedLanguage,
    isAppFlipped,
    setIsAppFlipped
}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
    const navbarBackground = isTopOfPage ? "" : "bg-nav-color shadow-2xl"

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">

                {isAboveMediumScreens
                    ? <>
                        {!isAppFlipped
                            ?
                            <>
                                <ShowLogo selectedPage={selectedPage} />
                                <NavAvobeMediumScreen
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <div className="flex justify-center gap-10">
                                    <BtnFlipApp isAppFlipped={isAppFlipped} setIsAppFlipped={setIsAppFlipped} />
                                    <ModalLanguageMenu selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
                                </div>
                            </>
                            :
                            <>
                                <NavAvobeMediumScreen
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <BtnFlipApp isAppFlipped={isAppFlipped} setIsAppFlipped={setIsAppFlipped} />
                                <ShowLogo selectedPage={selectedPage} />
                            </>
                        }
                    </>
                    :
                    <>
                        <ShowLogo selectedPage={selectedPage} />
                        <NavSmallScreen
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </>
                }

            </div>
        </nav>
    )
}

// const showProfileImg = () =>
//     <div className="flex justify-center items-center gap-3">
//         <h4 className="font-playfair text-3xl font-bold">IL</h4>
//         <ProfileImg />
//     </div>

export default NavBar