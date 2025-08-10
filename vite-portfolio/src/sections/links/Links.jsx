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
        <section id="links">
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-5">
                    
                </div>
                <div className="flex items-center gap-5">
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                        Let's Connect:
                    </p>
                    <a
                        href="https://github.com/jpbruehw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src="/assets/github.png" alt="github" className="h-full rounded-full transition-transform duration-200 ease-in-out hover:scale-110" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jpbruehwiler/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src="/assets/linkedin.svg" alt="linkedin" className="h-full rounded-full transition-transform duration-200 ease-in-out hover:scale-110" />
                    </a>

                    <div className="copy-container" onClick={handleCopy}>
                        <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                            jpbruehwiler@icloud.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Links