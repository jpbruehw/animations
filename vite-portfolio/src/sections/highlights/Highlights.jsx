import { highlights } from "../../constants/highlights"
import { Button as HeroUIButton } from "@heroui/button";

/* TODOS
    - add a section for the links
    - complete the highlights.js file DONE
    - add short explainer text snippet

*/

function Highlights() {
    return (
        <section className="c-space mt-12 pb-12 bg-[#333446]">
            <h3 className="head-text mb-2">Personal Highlights</h3>
            <p className="projects-subtext">
                    Is success luck or skill? I would argue that it is a mix of both. <b>However, the harder you work, the luckier you get.</b> 
                </p>
            <div className="highlights-container bg-[#333446]">
                {highlights.map((item) => (
                    <div key={`review-${item.id}`} className="client-review">
                        <div>
                            <p className="text-white-800 font-light">{item.desc}</p>

                            <div className="highlights-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt="highlight" className="w-14 h-14 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="font-semibold text-white-800 mb-1">{item.header}</p>
                                        <p className="text-white-500 md:text-base text-sm font-light">{item.subheader}</p>
                                    </div>
                                </div>
                            </div>
                            {item.links.length > 0
                                &&
                                <div className="flex flex-wrap items-start justify-center mt-4">
                                    {item.links.map((link) => (
                                        <HeroUIButton className={item.links.length > 1 ? "mr-2" : ""} variant="shadow">
                                            <a
                                                key={`link-${link.id}`}
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