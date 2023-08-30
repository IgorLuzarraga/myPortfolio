import { SelectedPage } from "../../share/types"
import useMediaQuery from '../../hooks/useMediaQuery'
import NavAvobeMediumScreen from "./NavAvobeMediumScreen"
import NavSmallScreen from "./NavSmallScreen"
import BtnFlipApp from "./BtnFlipApp"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    isAppFlipped: boolean,
    setIsAppFlipped: (value: boolean) => void,
}



const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage, isAppFlipped, setIsAppFlipped }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px")
    const navbarBackground = isTopOfPage ? "" : "bg-deep-blue  shadow-2xl"

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">

                {isAboveMediumScreens
                    ? <>
                        {!isAppFlipped
                            ?
                            <>
                                <h4 className="font-playfair text-3xl font-bold">IL</h4>
                                <BtnFlipApp isAppFlipped={isAppFlipped} setIsAppFlipped={setIsAppFlipped} />
                                <NavAvobeMediumScreen
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </>
                            :
                            <>
                                <NavAvobeMediumScreen
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <BtnFlipApp isAppFlipped={isAppFlipped} setIsAppFlipped={setIsAppFlipped} />
                                <h4 className="font-playfair text-3xl font-bold">JE</h4>
                            </>
                        }
                    </>
                    :
                    <>
                        <h4 className="font-playfair text-3xl font-bold">JE</h4>
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

export default NavBar