import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import { AppState, SelectedLanguage } from "../../types/appType";

type Props = {
    headingInitPos: number,
}

const isLanguageEnglish = (state: AppState) =>
    state.language === SelectedLanguage.English

const setGapDependingOfLanguage = (state: AppState) =>
    isLanguageEnglish(state) ? 'gap-2' : 'gap-0'

const ContactHeading = ({ headingInitPos }: Props) => {
    const { state } = useAppContext()

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: headingInitPos },
                visible: { opacity: 1, x: 0 },
            }}
            className="flex justify-end w-full"
        >
            <div>
                <p className={`flex ${setGapDependingOfLanguage(state)} font-playfair font-semibold text-4xl`}>
                    <span>
                        {state.texts.contact.titlePart1}
                    </span>
                    <span className="text-purple-500">
                        {state.texts.contact.titlePart2}
                    </span>
                </p>
                <div className="flex md:justify-end my-5">
                    {/* <LineGradient width="w-1/2" /> */}
                </div>
            </div>
        </motion.div>
    )
}

export default ContactHeading