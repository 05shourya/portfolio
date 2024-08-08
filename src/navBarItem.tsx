export default function NavBarItem({
    itemName,
    idName,
    id,
}: {
    itemName: string;
    idName: string;
    id: string;
}) {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        const targetElement = document.getElementById(idName);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState({ idName }, "", `#${idName}`);
    };
    return (
        <>
            <div id={id} className="navBarItem" onClick={handleClick}>
                {itemName}
            </div>
        </>
    );
}
