import { useState } from "react";

function Footer() {

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
    navigator.clipboard.writeText('jpbruehwiler@icloud.com');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <footer className="c-space pt-7 pb-3 border-t border-white-500 flex justify-between items-center flex-wrap gap-5">
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

                
            </div>
                <div className="copy-container" onClick={handleCopy}>
                    <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                        jpbruehwiler@icloud.com
                    </p>
                </div>

            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                © 2025 Jean-Philipp Bruehwiler.
            </p>
        </footer>
    );
}

export default Footer;
