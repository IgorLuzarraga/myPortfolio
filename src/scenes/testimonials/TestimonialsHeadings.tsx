import { motion } from "framer-motion";
// import LineGradient from "../../components/LineGradient";
import SimpleTextFormat from "../../components/textFormat/SimpleTextFormat";
import { useAppContext } from "../../context/AppContext";
import TitleFormat from "../../components/textFormat/TitleFormat";

type Props = {
    headingInitPos: number,
}

const TestimonialsHeadings = ({ headingInitPos }: Props) => {
    const { state } = useAppContext()

    return (
        <motion.div
            className="md:w-2/3 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: headingInitPos },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <TitleFormat
                titlePart1={state.texts.testimonials.titlePart1}
                titlePart2={state.texts.testimonials.titlePart2}
            />

            {/* <LineGradient width="mx-auto w-2/5" /> */}

            <p className="mt-10 mb-7">
                <SimpleTextFormat text={state.texts.testimonials.heading} />
            </p>

        </motion.div>
    )
}

export default TestimonialsHeadings