import { motion } from "framer-motion";
import Project from "./Project";
import { SelectedPage } from "../../share/types";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ProjectsHeadings from "./ProjectsHeadings";
// import ProjectAdvertisement_1 from "./ProjectAdvertisement_1";
// import ProjectAdvertisement_2 from "./ProjectAdvertisement_2";
import { projectsData } from "../../data/projectsData";
import { ProjectsType } from "../../types/projectsTypes";

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
            <div className="flex flex-col justify-center items-center gap-5">
                <motion.div
                    className="flex flex-col justify-center items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-5"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >

                    {/* <ProjectAdvertisement_1 /> */}

                    {showProjects(projectsData)}

                    {/* <ProjectAdvertisement_2 /> */}

                </motion.div>
            </div>
        </section>
    );
};

const showProjects = (projectsData: ProjectsType) =>
    projectsData.map((project, index) =>
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