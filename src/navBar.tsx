import { useEffect } from "react";
import NavBarItem from "./navBarItem";

export default function NavBar() {
    const items = ["Home", "About me", "Skills"];
    const pages = ["home", "aboutMe", "skills"];

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            const idName = event.state?.idName;
            if (idName) {
                const targetElement = document.getElementById(idName);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                }
            }
        };

        window.addEventListener("popstate", handlePopState);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    return (
        <>
            <div className="navBar" id="navBar">
                {items.map((item, index) => (
                    <NavBarItem
                        key={index}
                        itemName={item}
                        idName={pages[index]}
                        id={`${pages[index]}Nav`}
                    />
                ))}
            </div>
        </>
    );
}
