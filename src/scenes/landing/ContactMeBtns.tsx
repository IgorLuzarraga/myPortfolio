import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageHref } from "../../utilities/utils";

type Props = {
    btnsInitPos: number,
    setSelectedPage: (value: SelectedPage) => void
}

const ContactMeBtns = ({ btnsInitPos, setSelectedPage }: Props) => {
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
            {/* <AnchorLink
                className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 
                        font-semibold hover:bg-blue hover:text-white transition duration-500"
                onClick={() => setSelectedPage(SelectedPage.Contact)}
                href={fromSelectedPageToPageHref(SelectedPage.Contact)}
            >
                Contact Me
            </AnchorLink> */}

            {/* <AnchorLink
                className="rounded bg-gradient-green-pink py-0.5 p-0.5"
                onClick={() => setSelectedPage(SelectedPage.Contact)}
                href={fromSelectedPageToPageHref(SelectedPage.Contact)}
            >
                <div className="bg-deep-blue hover:text-myRed transition duration-500 
                w-full h-full flex items-center justify-center px-10 py-3 font-playfair">
                    Let's talk
                </div>
            </AnchorLink> */}

            <AnchorLink
                className="p-5 bg-btn-color text-white font-semibold hover:bg-red 
                    hover:text-purple-500 transition duration-500 uppercase"
                onClick={() => setSelectedPage(SelectedPage.Contact)}
                href={fromSelectedPageToPageHref(SelectedPage.Contact)}
            >
                Let's talk
            </AnchorLink>
        </motion.div>
    )
}

export default ContactMeBtns