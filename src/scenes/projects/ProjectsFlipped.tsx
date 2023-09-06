import { motion } from "framer-motion";
import { SelectedPage } from "../../types/appType";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import ProjectsHeadings from "./ProjectsHeadings";
// import ProjectAdvertisement1 from "./ProjectAdvertisement_1";
// import ProjectAdvertisement2 from "./ProjectAdvertisement_2";
import ProjectFlipped from "./ProjectFlipped";
import { ProjectsType } from "../../types/projectsTypes";
import { useAppContext } from '../../context/AppContext';
import { reverseArray } from "../../utilities/utils";

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const ProjectsFlipped = () => {
    const { state } = useAppContext();

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
                    viewport={{ once: false, amount: 0.2 }}
                >

                    {/* <ProjectAdvertisement1 /> */}


                    {showProjects(state.texts.projects.projectsArr)}

                    {/* <ProjectAdvertisement2 /> */}


                </motion.div>
            </div>
        </section>
    );
};

const showProjects = (projectsData: ProjectsType) => {
    const projectsDatasReverse = reverseArray(projectsData)

    return projectsDatasReverse.map((project, index) =>
        <ProjectFlipped
            key={`${project.title}-${index}`}
            title={project.title}
            desc={project.desc}
            github={project.github}
            vercel={project.vercel}
            image={project.image}
        />
    )
}

export default ProjectsFlipped