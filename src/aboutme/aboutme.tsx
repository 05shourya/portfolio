import "./aboutme.css";

export default function AboutMe() {
    return (
        <>
            <div id="aboutMe" className="aboutMe fullPageScroll">
                <div className="leftAboutMe">
                    <p>
                        I develop dynamic websites using React and Java,
                        transforming ideas into engaging digital experiences. My
                        journey began in 10th grade, inspired by online sources
                        that ignited my passion for web development. Driven by a
                        love for problem-solving and creating user-friendly
                        solutions, I bring creativity and strategic thinking to
                        my projects. When I'm not coding, you'll find me
                        strategizing over a chessboard or exploring new places,
                        fueling my innovation and imagination.
                    </p>
                </div>
                <div className="rightAboutMe">
                    <img src="Photos/Shourya.jpg" alt="" />
                    <div className="tripPhotos">
                        <img src="Photos/trip1.jpg" alt="" />
                        <img src="Photos/trip2.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
