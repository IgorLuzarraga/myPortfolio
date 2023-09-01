import { motion } from "framer-motion";
import { ProjectType } from "../../types/projectsTypes";
import { AiFillGithub } from 'react-icons/ai';
import { BsRocketTakeoffFill } from 'react-icons/bs';

const projectVariant = {
    hidden: { opacity: 0, scale: 0.1 },
    visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, desc, github, vercel, image }: ProjectType) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-card-color z-30 flex flex-col justify-center items-center gap-3 text-center p-16 text-white`;

    return (
        <motion.div
            className="relative hover:ring-4 ring-purple-400"
            // transition={{ delay: 0.2, duration: 1 }}
            variants={projectVariant}
        >
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    {desc}
                </p>
                <div className="flex justify-center items-center gap-5">
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
                        href={vercel}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsRocketTakeoffFill size={38} />
                    </a>
                </div>

            </div>
            <img src={`../assets/projects/${image}`} alt={title}
                className="w-[400px] h-[400px] object-fill" />
        </motion.div>
    );
};

export default Project