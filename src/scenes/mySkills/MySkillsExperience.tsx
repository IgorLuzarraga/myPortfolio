import { motion } from "framer-motion";

const MySkillsExperience = () => {
    return (
        <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="relative h-32">
                <div className="z-10">
                    {/* <p className="font-playfair font-semibold text-5xl">01</p> */}
                    <p className="font-playfair font-semibold text-3xl mt-3">
                        Experience
                    </p>
                </div>

                {/* <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-20 md:bg-opacity-70"></div> */}
            </div>

            <p className="mt-0">
                From my early days diving into the world of programming, I've journeyed through
                TypeScript and JavaScript, honing my skills with a focus on React. This progression
                has empowered me to confidently navigate front-end finesse and dive into back-end
                complexities, making me a capable candidate across junior, mid, and senior
                development roles.
            </p>
        </motion.div>
    )
}

export default MySkillsExperience