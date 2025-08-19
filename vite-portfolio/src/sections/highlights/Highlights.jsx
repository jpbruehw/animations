import { highlights } from "../../constants/highlights"
import { Button as HeroUIButton } from "@heroui/button";
import { useIsMobile } from "../../hooks/useIsMobile";

/* TODOS
    - add a section for the links
    - complete the highlights.js file DONE
    - add short explainer text snippet

*/

function Highlights() {

    const isMobile = useIsMobile()

    return (
        <section id="highlights" className={`${!isMobile ? "mt-8" : ""} c-space pb-12`}>
            <h3 className="head-text md:mb-4 h-[50px] md:h-12">Personal Highlights</h3>
            <p className="projects-subtext">
                    I believe the moment you stop learning and striving for excellence, you begin to stagnate. It is a fatal error that I refuse to make. Below are some personal highlights that exemplify how I live this mantra every day.
                </p>
            <div className="highlights-container bg-[#333446]">
                {highlights.map((item) => (
                    <div key={`review-${item.id}`} className="highlight">
                        <div>
                            <p className="text-white-800 font-light">{item.desc}</p>
                            <div className="highlights-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt="highlight" className="w-14 h-14 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800 mb-1">{item.header}</p>
                                        <p className="text-white-600 md:text-base text-sm">{item.subheader}</p>
                                    </div>
                                </div>
                            </div>
                            {item.links.length > 0
                                &&
                                <div className={`${isMobile ? "flex flex-col w-full items-center gap-3" : "flex flex-wrap items-start gap-5"} justify-center mt-4`}>
                                    {item.links.map((link) => (
                                        <HeroUIButton key={`link-${link.id}-${item.header}`} className={isMobile && "w-full"} variant="shadow">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={link.href}
                                            >
                                                {link.text}
                                            </a>
                                        </HeroUIButton>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Highlights