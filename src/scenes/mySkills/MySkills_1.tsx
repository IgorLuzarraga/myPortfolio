import { motion } from "framer-motion";
import { useAppContext } from '../../context/appContextUtils';
import SimpleTextFormat from "../../components/textFormat/SimpleTextFormatMultiLine";

const MySkills_1 = () => {
    const { state } = useAppContext();

    return (
        <motion.div
            className='bg-card-color p-10 rounded-3xl xs:w-[320px] md:w-1/3'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <p className="font-playfair font-semibold text-2xl md:text-3xl h-28 mt-3">
                {state.texts.mySkills.skill1Title}
            </p>

            <SimpleTextFormat text={state.texts.mySkills.skill1Desc} />

        </motion.div>
    )
}

export default MySkills_1