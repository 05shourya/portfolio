import ProfilePic from "../profilePic";
import SocialMediaIcons from "./social_media_icons";

export default function Home() {
    return (
        <div id="home" className="homePage fullPageScroll">
            <div className="left">
                <p className="myName">Shourya Gupta</p>
                <p className="whoAmI">Web & App Developer</p>
                <p className="basicInfo">
                    Web developer with 4 years of experience using React and
                    Java, and app developer with 1 year of experience using
                    Flutter. Let's bring your ideas to life, I'm just an email
                    away.
                </p>
                <SocialMediaIcons />
            </div>
            <div className="right">
                <div className="profilePicContainer">
                    <ProfilePic />
                </div>
            </div>
        </div>
    );
}
