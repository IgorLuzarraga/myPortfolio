import { motion } from "framer-motion";
import Project from "./Project";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ProjectsHeadings from "./ProjectsHeadings";
import ProjectAdvertisement1 from "./ProjectAdvertisement1";
import ProjectAdvertisement2 from "./ProjectAdvertisement2";
import { ProjectsType } from "../../types/projectsTypes";

const projects: ProjectsType = [{
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
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >

                    <ProjectAdvertisement1 />
                    {showProjects(projects)}

                    {/* <Project project={project} /> */}
                    {/*
                    <Project title="Project 1" />

                    // ROW 2 
                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    // ROW 3 
                    <Project title="Project 6" />
                    <Project title="Project 7" /> */}
                    <ProjectAdvertisement2 />
                </motion.div>
            </div>
        </section>
    );
};

const showProjects = (projects: ProjectsType) =>
    projects.map(project =>
        <Project
            title={project.title}
            desc={project.desc}
            github={project.github}
            vercel={project.vercel}
            image={project.image}
        />
    )


export default Projects