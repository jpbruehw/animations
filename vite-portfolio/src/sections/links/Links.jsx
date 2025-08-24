import { useState } from "react";

function Links() {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
    navigator.clipboard.writeText('jpbruehwiler@icloud.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section id="links" className="c-space mb-12 sm:mb-0">
            <p className="head-text md:mb-6 mb-4 text-center">
                Links
            </p>
            <div className="flex items-center justify-center flex-wrap gap-5 md:gap-8">
                <div className="flex flex-col justify-center items-center">
                    <a
                    href="https://github.com/jpbruehw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    >
                        <img src="/assets/github.svg" alt="github" className="h-full rounded-full sm:transition-transform sm:duration-200 sm:ease-in-out sm:hover:scale-110" />
                    </a>
                    <p className="md:text-xl font-medium text-gray_gradient text-white">
                        GitHub 
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <a
                        href="https://www.linkedin.com/in/jpbruehwiler/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src="/assets/linkedin.svg" alt="linkedin" className="h-full rounded-full sm:transition-transform sm:duration-200 sm:ease-in-out sm:hover:scale-110" />
                    </a>
                    <p className="md:text-xl font-medium text-gray_gradient text-white">
                        LinkedIn
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <a
                        href="https://drive.google.com/file/d/11j2gAkISUGY10ZSocZIlt0OyA1RwQoMc/view?usp=share_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src="/assets/cv.svg" alt="resume" className="h-full rounded-full sm:transition-transform sm:duration-200 sm:ease-in-out sm:hover:scale-110" />
                    </a>
                    <p className="md:text-xl font-medium text-gray_gradient text-white">
                        Resume
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <a
                        href="https://drive.google.com/file/d/1xIuXDUn-J9_CYk0OdG4s8mzdy6GQNIZm/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src="/assets/thesis.svg" alt="master's thesis" className="h-full rounded-full sm:transition-transform sm:duration-200 sm:ease-in-out sm:hover:scale-110" />
                    </a>
                    <p className="md:text-xl font-medium text-gray_gradient text-white">
                        Msc. Thesis
                    </p>
                </div>
                <div className="copy-container" onClick={handleCopy}>
                    <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                    <p className="text-2xl lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                        jpkbruehwiler@gmail.com
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Links