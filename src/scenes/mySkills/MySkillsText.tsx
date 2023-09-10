import { motion } from "framer-motion";
// import LineGradient from "../../components/LineGradient"
import { useAppContext } from '../../context/appContextUtils';
import SimpleTextFormat from "../../components/textFormat/SimpleTextFormatMultiLine";
import TitleFormat from "../../components/textFormat/TitleFormat";

const MySkillsText = () => {
    const { state } = useAppContext();

    return (
        <motion.div
            className="md:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <TitleFormat
                titlePart1={state.texts.mySkills.titlePart1}
                titlePart2={state.texts.mySkills.titlePart2}
            />

            {/* <LineGradient width="w-1/3" /> */}

            <p className="mt-10 mb-7">
                <SimpleTextFormat text={state.texts.mySkills.heading} />
            </p>
        </motion.div>
    )
}

export default MySkillsText