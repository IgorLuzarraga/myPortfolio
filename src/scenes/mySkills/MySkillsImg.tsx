import useMediaQuery from "../../hooks/useMediaQuery";

const MySkillsImg = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <div className="mt-16 md:mt-0">
            {isAboveLarge ? (
                <div
                    className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                >
                    <img alt="skills" className="z-10 h-96 w-full" src="assets/bg-images/skills-2.jpg" />
                </div>
            ) : (
                <img alt="skills" className="z-10" src="assets/bg-images/skills-2.jpg" />
            )}
        </div>
    )
}

export default MySkillsImg