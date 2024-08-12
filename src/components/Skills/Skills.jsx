import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState(SKILLS[0]);

  const handleSelectedSkill = (data) => {
    setSelectedSkills(data);
  };
  return (
    <section className="skills-container">
      <h5>Technical Profiency</h5>

      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkills.title === item.title}
              onClick={() => {
                handleSelectedSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <SkillsInfoCard
            heading={selectedSkills.title}
            skills={selectedSkills.skills}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
