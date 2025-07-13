function Footer() {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <p lassName="text-white-500">
                Add persnal motto here
            </p>
            <div className="flex items-center gap-3">
                
                <a
                    href="https://github.com/jpbruehw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>

                <a
                    href="https://www.linkedin.com/in/jpbruehwiler/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
                </a>

                <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500">
                © 2025 Jean-Philipp Bruehwiler. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
