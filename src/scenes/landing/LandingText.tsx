import { motion } from "framer-motion";
// import { TextsType } from "../../types/languageTypes";
import LineGradient from "../../components/LineGradient";
import { useAppContext } from '../../context/AppContext';

type Props = {
    // texts: TextsType,
    btnsInitPos: number,
}

const LandingText = ({ btnsInitPos }: Props) => {
    const { state } = useAppContext();

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: btnsInitPos },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <div className="flex justify-center md:justify-normal gap-[15px] text-6xl font-playfair z-10">
                <div className="flex gap-1 text-center md:text-start">
                    <span>Igor </span>
                    <div className="flex flex-col gap-5">
                        <span className="text-purple-500">Luzarraga</span>
                        <LineGradient />
                    </div>

                </div>

                {/* <p
                    className="xs:relative text-white md:text-deep-blue xs:font-semibold z-20 
            xs:before:content-brush before:absolute before:-left-[25px] 
            before:-top-[80px] before:z-[-1]"
                >
                    Luzarraga
                </p> */}

            </div>

            <p className="mt-10 mb-7 text-lg text-center md:text-start">
                {state.texts.landing.welcome}
            </p>
        </motion.div>
    )
}

export default LandingText