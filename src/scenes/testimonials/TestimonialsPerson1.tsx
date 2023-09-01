import { motion } from "framer-motion";

const TestimonialsPerson1 = () => {
    return (
        <motion.div
            className="mx-auto relative bg-card-color max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
              before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:ring-2 before:ring-purple-700 before:content-person1 before:w-[200px] before:h-[200px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.0, duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <p className="font-playfair text-6xl">“</p>
            <p className="text-center text-xl">
                Igor's work proved me wrong; our website now rivals the beauty of our product.
            </p>
        </motion.div>
    );
};

export default TestimonialsPerson1;
