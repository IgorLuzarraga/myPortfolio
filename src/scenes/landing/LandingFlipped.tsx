import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ContactMeBtns from "./ContactMeBtns";
import SocialMediaBtns from "./SocialMediaBtns";
import LandingText from "./LandingText";
import LandingImgFlipped from "./LandingImgFlipped";

type Props = {
    setSelectedPage: (value: SelectedPage) => void
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
            <div className="z-30 basis-2/5 mt-12 md:mt-32">

                {/* HEADINGS */}
                <LandingText btnsInitPos={50} />

                {/* CONTACT ME*/}
                <ContactMeBtns setSelectedPage={setSelectedPage} btnsInitPos={50} />
                <SocialMediaBtns btnsInitPos={50} />

            </div>

            {/* IMAGE */}
            <LandingImgFlipped isAboveLarge={isAboveLarge} />

        </section>
    );
};

export default LandingFlipped;
