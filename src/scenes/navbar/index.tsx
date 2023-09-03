import { SelectedPage } from "../../share/types"
import useMediaQuery from '../../hooks/useMediaQuery'
import NavAvobeMediumScreen from "./NavAvobeMediumScreen"
import NavSmallScreen from "./NavSmallScreen"
import BtnFlipApp from "./BtnFlipApp"
import ShowLogo from "../../components/ShowLogo"

type Props = {
    isTopOfPage: boolean,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    isAppFlipped: boolean,
    setIsAppFlipped: (value: boolean) => void,
}

// const ProfileImg = () => {
//     return <img
//         alt="profile image"
//         className="hover:filter hover:grayscale transition duration-1000 
//     h-14 w-14 rounded-full object-cover"
//         src="assets/people/profile-image.jpeg"
//     />
// }

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage, isAppFlipped, setIsAppFlipped }: Props) => {
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