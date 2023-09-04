import { motion } from "framer-motion";
import { useAppContext } from '../../context/AppContext';
import SimpleTextFormat from "../../components/textFormat/SimpleTextFormat";

const MySkillsInnovative = () => {
    const { state } = useAppContext();

    return (
        <motion.div
            className='bg-card-color p-10 rounded-3xl xs:w-[320px] md:w-1/3'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <p className="font-playfair font-semibold text-2xl md:text-3xl h-28 mt-3">
                {state.texts.mySkills.skill2Title}
            </p>

            <SimpleTextFormat text={state.texts.mySkills.skill2Desc} />
        </motion.div>
    )
}

export default MySkillsInnovative