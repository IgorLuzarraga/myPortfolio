import { motion } from "framer-motion";

const ContactImg = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.8 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
            className="basis-1/2 flex justify-start"
        >
            <img src="assets/bg-images/network.jpg" alt="contact" />
        </motion.div>

    )
}

export default ContactImg