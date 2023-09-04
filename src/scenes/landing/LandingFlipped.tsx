import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ContactMeBtns from "./ContactMeBtns";
import SocialMediaBtns from "./SocialMediaBtns";
import LandingText from "./LandingText";
import LandingImgFlipped from "./LandingImgFlipped";
// import { TextsType } from "../../types/languageTypes";

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
    // texts: TextsType
}


const LandingFlipped = ({ setSelectedPage }: Props) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)")

    return (
        <section
            id={fromSelectedPageToPageId(SelectedPage.Home)}
            className="md:flex mx-auto w-5/6 justify-between items-center gap-16 
            md:h-full py-32"
        >
            {/* TEXT AND CONTACT */}
            <div className="basis-3/5 mt-12 md:mt-32">

                {/* HEADINGS */}
                <LandingText btnsInitPos={50} />

                {/* CONTACT ME*/}
                <ContactMeBtns setSelectedPage={setSelectedPage} btnsInitPos={50} />

            </div>

            {/* IMAGE AND SOCIAL BTNS*/}
            <div className="basis-2/5 flex flex-col justify-center items-center gap-2">
                <LandingImgFlipped isAboveLarge={isAboveLarge} />
                <SocialMediaBtns btnsInitPos={50} />
            </div>

        </section>
    );
};

export default LandingFlipped;
