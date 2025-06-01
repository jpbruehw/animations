import { useState } from "react"
import Dropdown from "./Dropdown"
import classNames from "classnames";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    
    return (
        <header
            className={classNames(
                        "fixed top-0 left-0 right-0 z-[200] bg-blue-950 transition-shadow duration-300",
                        {
                            "shadow-md": !isDropdownOpen,
                            "shadow-none": isDropdownOpen,
                        }
                    )}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center p-5 mx-auto c-space">
                    <a href="/" className={classNames(
                                                        " font-bold text-xl z-[250] text-center hover:text-white hover:cursor-pointer transition-colors",
                                                        {
                                                            "text-neutral-400": !isDropdownOpen,
                                                            "text-white": isDropdownOpen,
                                                        }
                    )}>
                        Jean-Philipp Bruehwiler
                    </a>
                <Dropdown isOpen={isDropdownOpen} setIsOpen={setIsDropdownOpen} />
                </div>
            </div>
        </header>
    )
}

export default Navbar