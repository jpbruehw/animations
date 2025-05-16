import { useState } from "react"
import Dropdown from "./Dropdown"
import classNames from "classnames";

const Navbar = () => {
    const [isDropdwonOpen, setIsDropdownOpen] = useState(false)
    
    return (
        <header
            className={classNames(
                        "fixed top-0 left-0 right-0 z-200 bg-blue-950 transition-shadow duration-300",
                        {
                            "shadow-md": !isDropdwonOpen,
                            "shadow-none": isDropdwonOpen,
                        }
                    )}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-center items-center p-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl text-center hover:text-white transition-colors">
                        Jean-Philipp Bruehwiler
                    </a>
                <Dropdown isOpen={isDropdwonOpen} setIsOpen={setIsDropdownOpen} />
                </div>
            </div>
        </header>
    )
}

export default Navbar