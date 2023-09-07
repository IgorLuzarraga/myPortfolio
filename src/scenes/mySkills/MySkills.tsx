import { SelectedPage } from "../../types/appType";
import { fromSelectedPageToPageId } from "../../utilities/utils";
import MySkillsText from "./MySkillsText";
import MySkillsImg from "./MySkillsImg";
import MySkills_1 from "./MySkills_1";
import MySkills_2 from "./MySkills_2";
import MySkills_3 from "./MySkills_3";

const MySkills = () => {
  return (
    <section id={fromSelectedPageToPageId(SelectedPage.Skills)}
      className="py-40"
    >

      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16">

        <MySkillsText />

        <MySkillsImg />

      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-8">

        {/* SKILLS 1 */}
        <MySkills_1 />

        {/* SKILLS 2 */}
        <MySkills_2 />

        {/* SKILLS 3 */}
        <MySkills_3 />

      </div>

    </section>
  );
};

export default MySkills;
