import { useState } from "react"
import Dropdown from "./Dropdown"
import classNames from "classnames";
import "../../custom-styles/animated-header-tag.css"
import NavbarHeader from "./NavbarHeader"

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    
    return (
        <header
            className={classNames(
                        "fixed top-0 left-0 right-0 z-[200] bg-[#EAEFEF] transition-shadow duration-300",
                        {
                            "shadow-xl": !isDropdownOpen,
                            "shadow-none": isDropdownOpen,
                        }
                    )}
        >
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