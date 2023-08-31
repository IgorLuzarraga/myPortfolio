import { motion } from "framer-motion";
import Project from "./Project";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ProjectsHeadings from "./ProjectsHeadings";
import ProjectAdvertisement_1 from "./ProjectAdvertisement_1";
import ProjectAdvertisement_2 from "./ProjectAdvertisement_2";
import { ProjectsType } from "../../types/projectsTypes";

const projects: ProjectsType = [
    {
        title: "Ruteros",
        desc: "Explore a global social network for travel enthusiasts. Share stories, plan trips, and join travel groups. Turn wanderlust into shared adventures, fostering connections with fellow explorers worldwide.",
        github: "https://github.com/IgorLuzarraga/Frontend_ruteros",
        vercel: "https://frontend-ruteros-azure.vercel.app/",
        image: "ruteros.jpg",
    },
    {
        title: "Finance App",
        desc: "Full Stack Finance Dashboard Application",
        github: "https://github.com/IgorLuzarraga/finance-app",
        vercel: "https://finance-app-v24h.vercel.app/",
        image: "finance.jpg",
    },
    {
        title: "Restauran UI",
        desc: "The app is a captivating Restaurant application landing page composed of distinct sections.",
        github: "https://github.com/IgorLuzarraga/restaurant-ui",
        vercel: "https://restaurant-ui-mu.vercel.app/",
        image: "restaurant.jpg",
    },
    {
        title: "Fitnes App",
        desc: "Evogym is a captivating fitness application landing page composed of distinct sections, each triggering delightful animations as you explore.",
        github: "https://github.com/IgorLuzarraga/gym-typescript",
        vercel: "https://evogym-sooty.vercel.app/",
        image: "evogym.jpg",
    },
    {
        title: "DevLink",
        desc: "Explore a global social network for travel enthusiasts. Share stories, plan trips, and join travel groups. Turn wanderlust into shared adventures, fostering connections with fellow explorers worldwide.",
        github: "https://github.com/IgorLuzarraga/Frontend-DevLink",
        vercel: "https://frontend-dev-link-vert.vercel.app/",
        image: "devlink.jpg",
    },
    {
        title: "Portfolio",
        desc: "A Responsive TypeScript Portfolio Application landing page composed of distinct sections, each triggering delightful animations as you explore.",
        github: "https://github.com/IgorLuzarraga/react-portfolio-ts",
        vercel: "https://react-portfolio-ts-gamma.vercel.app/",
        image: "portfolio-je.jpg",
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const Projects = () => {
    return (
        <section id={fromSelectedPageToPageId(SelectedPage.Projects)}
            className="mx-auto w-5/6 py-32">

            {/* HEADINGS */}
            <ProjectsHeadings />

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3 gap-5"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    {/* <ProjectAdvertisement_1 /> */}

                    {showProjects(projects)}

                    {/* <ProjectAdvertisement_2 /> */}

                </motion.div>
            </div>
        </section>
    );
};

const showProjects = (projects: ProjectsType) =>
    projects.map((project, index) =>
        <Project
            key={`${project.title}-${index}`}
            title={project.title}
            desc={project.desc}
            github={project.github}
            vercel={project.vercel}
            image={project.image}
        />
    )


export default Projects