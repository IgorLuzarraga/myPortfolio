import { SelectedPage } from "../../types/appType";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import TestimonialsHeadings from "./TestimonialsHeadings";
import Testimonial from "./Testimonial";
import { useAppContext } from '../../context/appContextUtils';
import { TestimonialsType } from "../../types/testimonialsTypes";
import { reverseArrInChunksOf3 } from "../../utilities/utilsArr";

const Testimonials2Flipped = () => {
    const { state } = useAppContext();

    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Testimonials)} className="pt-32 pb-32">

            {/* HEADING */}
            <TestimonialsHeadings headingInitPos={500} />

            <div className="mt-20 flex flex-col md:flex-row md:justify-center gap-8">
                {showTestimonials(state.texts.testimonials.testimonialArr)}
            </div>
        </section>
    );
};

const showTestimonials = (testimonials: TestimonialsType) => {
    const testimonialsReverse = reverseArrInChunksOf3(testimonials)
    return testimonialsReverse.map((testimonial, index) =>
        <Testimonial key={testimonial.name} index={index} {...testimonial} />
    )
}

export default Testimonials2Flipped
