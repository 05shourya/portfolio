import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface skillItemProps {
    skillName: string;
    proficiency?: string;
    icon: IconDefinition;
}

export default function SkillItem({
    skillName,
    proficiency,
    icon,
}: skillItemProps) {
    return (
        <>
            <div className="skillItem">
                <p className="skillName">
                    {/* {" "} */}
                    <FontAwesomeIcon icon={icon} /> {skillName}
                </p>
                {proficiency != null ? (
                    <p className="proficiency">{proficiency}</p>
                ) : null}
            </div>
        </>
    );
}
