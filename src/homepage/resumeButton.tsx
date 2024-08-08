import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface resumeButtonProps {
    title: string;
    buttonIcon: IconDefinition;
    link: string;
}

export default function ResumeButton({
    title,
    buttonIcon,
    link,
}: resumeButtonProps) {
    return (
        <>
            <div className="resumeButton">
                <FontAwesomeIcon icon={buttonIcon} />
                <a href={link} target="_blank">
                    {title}
                </a>
            </div>
        </>
    );
}
