import classNames from "classnames";
import navLinks from "@/constants/nav-links";
import "@/custom-styles/hamburger-dropdown.css";

const Dropdown = ({ isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
            <>
                <div
                    className={classNames("nav-t", { active: isOpen })}
                    onClick={toggleMenu}
                >
                    <div className="icon"></div>
                </div>
                <div
                    id="menu"
                    className={classNames("shadow-xl", { open: isOpen })}
                >
                <ul>
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.href}>
                                {item.name.slice(0, -1)}
                                <span className="space">{item.name.slice(-1)}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                </div>
            </>
    );
};

export default Dropdown;