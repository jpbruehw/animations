import { useState, useEffect } from "react"
import Dropdown from "./Dropdown"
import classNames from "classnames";
import "../../custom-styles/animated-header-tag.css"
import NavbarHeader from "./NavbarHeader"

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navClass = classNames(
        "fixed top-0 left-0 right-0 z-[200] transition-all duration-300 backdrop-blur-md",
        {
            "bg-[#EAEFEF] shadow-xl": !scrolled || isDropdownOpen,
            "bg-[#EAEFEF]/70 shadow-md backdrop-blur-md": scrolled && !isDropdownOpen,
            "backdrop-blur-none": isDropdownOpen,
        }
    )

    return (
        <header className={navClass}>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center p-5 mx-auto c-space">
                    <NavbarHeader />
                    <Dropdown isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} />
                </div>
            </div>
        </header>
    )
}

export default Navbar