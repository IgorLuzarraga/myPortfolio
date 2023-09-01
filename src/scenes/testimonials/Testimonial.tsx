import { motion } from "framer-motion";
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { TestimonialType2 } from "../../types/testimonialsTypes";

const Testimonial = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
    github,
    linkedin,
}: TestimonialType2) => {
    return <motion.div
        className='bg-card-color p-10 rounded-3xl xs:w-[320px] w-full'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ delay: index / 5, duration: 0.6 }}
        variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        }}
    >
        <p className="font-playfair text-6xl">“</p>

        <div className='mt-1'>
            <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

            <div className='mt-7 flex justify-between items-center gap-1'>
                <div className='flex-1 flex flex-col'>
                    <p className='text-white font-medium text-[16px]'>
                        <span className='blue-text-gradient'>@</span> {name}
                    </p>
                    <p className='mt-1 text-secondary text-[12px]'>
                        {designation} of {company}
                    </p>
                </div>

                <img
                    src={`../assets/people/${image}`}
                    alt={`feedback_by-${name}`}
                    className='w-20 h-20 rounded-full object-cover'
                />
            </div>
            <div className="mt-7 flex justify-center items-center gap-5">
                <a
                    className="hover:opacity-50 transition duration-500 bg-card-color"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                >
                    <AiFillGithub size={38} />
                </a>
                <a
                    className="hover:opacity-50 transition duration-500 bg-card-color"
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin size={38} />
                </a>
            </div>
        </div>
    </motion.div>
}

export default Testimonial