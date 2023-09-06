import { motion } from "framer-motion";
import { useAppContext } from "../../context/AppContext";
import SimpleTextFormat from "../../components/textFormat/SimpleTextFormatMultiLine";
// import LineGradient from "../../components/LineGradient";

const ProjectsHeadings = () => {
    const { state } = useAppContext()

    return (
        <motion.div
            className="md:w-3/5 mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div>
                <p className="font-playfair font-semibold text-4xl">
                    <span>{state.texts.projects.titlePart1}</span>
                    <span className="text-purple-500">{state.texts.projects.titlePart2}</span>
                </p>
                <div className="flex justify-center mt-5">
                    {/* <LineGradient width="w-2/3" /> */}
                </div>
            </div>
            <p className="mt-5 mb-16">
                <SimpleTextFormat text={state.texts.projects.heading} />
            </p>
        </motion.div>
    )
}

export default ProjectsHeadings