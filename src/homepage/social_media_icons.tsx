import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ResumeButton from "./resumeButton";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";
export default function SocialMediaIcons() {
    const buttons = [
        { icon: faEnvelope, link: "mailto:05shourya@gmail.com" },
        { icon: faLinkedinIn, link: "https://www.linkedin.com/in/05shourya/" },
        { icon: faGithub, link: "https://github.com/05shourya" },
    ];
    return (
        <>
            <div className="socialMediaIcons">
                {buttons.map((button, index) => (
                    <a
                        href={button.link}
                        target="_blank"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <FontAwesomeIcon icon={button.icon} key={index} />
                    </a>
                ))}
                <ResumeButton
                    title="Resume"
                    buttonIcon={faFileAlt}
                    link="Resume/final_resume.pdf"
                />
            </div>
        </>
    );
}
