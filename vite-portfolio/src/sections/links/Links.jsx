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
        <section id="links" className="c-space">
            <p className="head-text md:mb-4 mb-2">
                Links
            </p>
            <div className="flex items-center flex-wrap gap-5">
                {/* <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    Connect:
                </p> */}
                <div className="flex flex-col justify-center items-center">
                    <a
                    href="https://github.com/jpbruehw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    >
                        <img src="/assets/github.png" alt="github" className="h-full rounded-full transition-transform duration-200 ease-in-out hover:scale-110" />
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
                        <img src="/assets/linkedin.svg" alt="linkedin" className="h-full rounded-full transition-transform duration-200 ease-in-out hover:scale-110" />
                    </a>
                    <p className="md:text-xl font-medium text-gray_gradient text-white">
                        LinkedIn
                    </p>
                </div>
                <div className="copy-container" onClick={handleCopy}>
                    <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                        jpkbruehwiler@gmail.com
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Links