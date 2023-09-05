import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../types/appType";
import { fromSelectedPageToPageHref } from "../utilities/utils";
import { motion } from "framer-motion";

type ShowDotLinksProps = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
}

type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
    position: string
}

const DotGroup = ({ selectedPage, setSelectedPage, position }: Props) => {
    return (
        <div className={`flex flex-col gap-6 fixed top-[60%] ${position}`}>
            <ShowDotGroupLinks selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        </div>
    );
};

const ShowDotGroupLinks = ({ selectedPage, setSelectedPage }: ShowDotLinksProps) => {
    const selectedStyles = `relative bg-white before:absolute before:w-6 before:h-6 
    before:rounded-full before:border-2 before:border-white before:left-[-50%] 
    before:top-[-50%]`;

    const enumKeys = Object.values(SelectedPage);

    return (
        enumKeys.map(key => {
            return (selectedPage === key)
                ?
                <motion.div
                    key={key}
                    className={`${selectedStyles} w-3 h-3 rounded-full`}
                    animate={{ scale: 1.5 }}
                    transition={{ ease: "easeInOut", duration: 2.0, repeat: Infinity }}
                >
                    <AnchorLink
                        href={fromSelectedPageToPageHref(key)}
                        onClick={() => setSelectedPage(key)}
                    />
                </motion.div>
                : <AnchorLink
                    key={key}
                    href={fromSelectedPageToPageHref(key)}
                    className="bg-purple-500 w-3 h-3 rounded-full"
                    onClick={() => setSelectedPage(key)}
                />


        })
    )
}

export default DotGroup;
