import { TestimonialsType, TestimonialType } from "../types/testimonialsTypes";

const testimonial1: TestimonialType = {
    testimonial:
        "Igor's work proved me wrong; our website now rivals the beauty of our product.",
    name: "Carlos Martin",
    designation: "CFO",
    company: "Acme Co",
    image: "carlos.png",
    github: "https://github.com/Cmrdevelopment",
    linkedin: "https://www.linkedin.com/in/cmrbolsa-0b139344/",
}

const testimonial2: TestimonialType = {
    testimonial:
        "Igor's dedication shines – he transformed our ideas into a site that's both stunning and effective.",
    name: "Jonathan Rodriguez",
    designation: "COO",
    company: "DEF Corp",
    image: "jonathan.jpg",
    github: "https://github.com/jonathanrodvaz",
    linkedin: "https://www.linkedin.com/in/jonathan-rodriguezvazquez/"
}

const testimonial3: TestimonialType = {
    testimonial:
        "Igor's care for his clients' success sets him apart. He goes the extra mile to ensure our goals are met.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "person-1.jpeg",
    github: "https://github.com/jonathanrodvaz",
    linkedin: "https://www.linkedin.com/in/jonathan-rodriguezvazquez/"
}

export const testimonials: TestimonialsType = [testimonial1, testimonial2, testimonial3];
export const testimonialsFlipped: TestimonialsType = [testimonial3, testimonial2, testimonial1];
