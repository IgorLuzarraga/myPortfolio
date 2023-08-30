import { motion } from "framer-motion";

const TestimonialsPerson2 = () => {
    return (
        <motion.div
            className="mx-auto relative bg-card-color max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
                Igor's dedication shines – he transformed our ideas into a site that's both stunning and effective.
            </p>
        </motion.div>
    )
}

export default TestimonialsPerson2