import { motion } from "framer-motion";

const MySkillsExperience = () => {
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
            <p className="font-playfair font-semibold text-3xl h-28 mt-3">
                Experience
            </p>

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