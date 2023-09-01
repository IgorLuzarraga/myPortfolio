import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/motion";
import { testimonials } from "../../data/testimonialsData";
import { TestimonialType2 } from "../../types/testimonialsTypes";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import TestimonialsHeadings from "./TestimonialsHeadings";

const Testimonials2 = () => {
    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Testimonials)} className="pt-32 pb-32">

            {/* <div className="mt-12 bg-black-100 rounded-[20px]"> */}
            {/* <div
                className="bg-tertiary rounded-2xl min-h-[300px]"
            >
            </div> */}
            {/* HEADING */}
            <TestimonialsHeadings headingInitPos={-50} />

            <div className="mt-20 pb-14 sm:px-16 px-6 flex flex-wrap gap-7">
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={testimonial.name} index={index} {...testimonial} />
                ))}
            </div>
            {/* </div> */}
        </section>
    );
};

const Testimonial = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}: TestimonialType2) => (
    <motion.div
        // variants={fadeIn({"", "spring", index * 0.5, 0.75})}
        variants={fadeIn(
            {
                direction: "up",
                type: "spring",
                delay: index * 0.5,
                duration: 0.75
            })
        }

        className='bg-card-color p-10 rounded-3xl xs:w-[320px] w-full'
    >
        <p className='text-white font-black text-[48px]'>"</p>

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
        </div>
    </motion.div>
)

export default Testimonials2
