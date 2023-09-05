import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { SelectedPage } from "../../types/appType";
import { fromSelectedPageToPageHref } from "../../utilities/utils";
import { useAppContext } from '../../context/AppContext';

type Props = {
    btnsInitPos: number,
    setSelectedPage: (value: SelectedPage) => void
}

const ContactMeBtns = ({ btnsInitPos, setSelectedPage }: Props) => {
    const { state } = useAppContext()

    return (
        <motion.div
            className="flex mt-5 justify-center md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: btnsInitPos },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <AnchorLink
                className="p-5 bg-btn-color text-white font-semibold hover:bg-red 
                    hover:text-purple-500 transition duration-500 uppercase"
                onClick={() => setSelectedPage(SelectedPage.Contact)}
                href={fromSelectedPageToPageHref(SelectedPage.Contact)}
            >
                {state.texts.landing.contactBtn}
            </AnchorLink>
        </motion.div>
    )
}

export default ContactMeBtns