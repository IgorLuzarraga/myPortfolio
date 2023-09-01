import { testimonials } from "../../data/testimonialsData";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import TestimonialsHeadings from "./TestimonialsHeadings";
import Testimonial from "./Testimonial";

const Testimonials2 = () => {
    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Testimonials)} className="pt-32 pb-32">

            {/* HEADING */}
            <TestimonialsHeadings headingInitPos={-50} />

            <div className="mt-20 flex flex-col md:flex-row md:justify-center gap-8">
                {showTestimonials()}
            </div>
        </section>
    );
};

const showTestimonials = () =>
    testimonials.map((testimonial, index) =>
        <Testimonial key={testimonial.name} index={index} {...testimonial} />
    )

export default Testimonials2
