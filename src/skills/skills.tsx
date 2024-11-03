import {
    faCss3,
    faCss3Alt,
    faFlutter,
    faHtml5,
    faJava,
    faJs,
    faNodeJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import SkillItem from "./skillItem";
import "./skills.css";
import {
    faClock,
    faCloud,
    faComment,
    faDatabase,
    faLeaf,
    faLightbulb,
    faProjectDiagram,
    faServer,
    faTerminal,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
    const frontendSkills = [
        { skillName: "HTML", proficiency: "Advanced", icon: faHtml5 },
        { skillName: "CSS", proficiency: "Advanced", icon: faCss3 },
        { skillName: "Javascript", proficiency: "Advanced", icon: faJs },
        { skillName: "Typescript", proficiency: "Advanced", icon: faTerminal },
        { skillName: "React", proficiency: "Advanced", icon: faReact },
        {
            skillName: "Next.js",
            proficiency: "Intermediate",
            icon: faProjectDiagram,
        },
        { skillName: "Flutter", proficiency: "Intermediate", icon: faFlutter },
        { skillName: "Tailwind", proficiency: "Basic", icon: faCss3Alt },
    ];
    const backendSkills = [
        { skillName: "Springboot", proficiency: "Advanced", icon: faLeaf },
        {
            skillName: "Express.js",
            proficiency: "Intermediate",
            icon: faServer,
        },
        { skillName: "Java", proficiency: "Advanced", icon: faJava },
        { skillName: "Node.js", proficiency: "Intermediate", icon: faNodeJs },
        { skillName: "MongoDB", proficiency: "Advanced", icon: faDatabase },
        { skillName: "SQL", proficiency: "Intermediate", icon: faDatabase },
        { skillName: "Firebase", proficiency: "Intermediate", icon: faCloud },
    ];

    const softSkills = [
        { skillName: "Communication", icon: faComment },
        { skillName: "Problem Solving", icon: faLightbulb },
        { skillName: "Team Work", icon: faUsers },
        { skillName: "Time management", icon: faClock },
    ];
    return (
        <>
            <div id="skills" className="skills fullPageScroll">
                <div className="technicalSkills commonFlexStyle">
                    <div className="frontendSkills techSkill">
                        <span className="heading">Frontend</span>
                        <div className="line"></div>
                        <div className="skillBox">
                            {frontendSkills.map((skill, index) => (
                                <SkillItem
                                    key={index}
                                    skillName={skill.skillName}
                                    proficiency={skill.proficiency}
                                    icon={skill.icon}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="backendSkills techSkill">
                        <span className="heading">Backend</span>
                        <div className="line"></div>
                        <div className="skillBox">
                            {backendSkills.map((skill, index) => (
                                <SkillItem
                                    key={index}
                                    skillName={skill.skillName}
                                    proficiency={skill.proficiency}
                                    icon={skill.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="softSkills commonFlexStyle">
                    <span className="heading">Soft Skills</span>
                    <div className="line"></div>
                    <div className="softSkillsBox">
                        {softSkills.map((skill, index) => (
                            <SkillItem
                                key={index}
                                skillName={skill.skillName}
                                icon={skill.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
