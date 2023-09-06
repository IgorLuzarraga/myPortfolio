import useMediaQuery from "../../hooks/useMediaQuery";
import { SelectedPage } from "../../types/appType";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import LandingImg from "./LandingImg";
import ContactMeBtns from "./ContactMeBtns";
import SocialMediaBtns from "./SocialMediaBtns";
import LandingText from "./LandingText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void,
}

const Landing = ({ setSelectedPage }: Props) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)")

    return (
        <section
            id={fromSelectedPageToPageId(SelectedPage.Home)}
            className="md:flex mx-auto w-5/6 justify-between items-center gap-16 md:h-full 
            pt-14 pb-32"
        >
            {/* IMAGE AND SOCIAL BTNS*/}
            <div className="basis-2/5 flex flex-col justify-center items-center gap-2">
                <LandingImg isAboveLarge={isAboveLarge} />
                <SocialMediaBtns btnsInitPos={-50} />
            </div>

            {/* TEXT AND CONTACT */}
            <div className="basis-3/5 mt-12 md:mt-32">

                {/* HEADINGS */}
                <LandingText btnsInitPos={-50} />

                {/* CONTACT ME*/}
                <ContactMeBtns setSelectedPage={setSelectedPage} btnsInitPos={-50} />

            </div>

        </section>
    );
};

export default Landing;
