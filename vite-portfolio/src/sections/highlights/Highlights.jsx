import { highlights } from "../../constants/highlights"

/* TODOS
    - add a section for the links
    - complete the highlights.js file
    - add short explainer text snippet

*/

function Highlights() {
    return (
        <section className="c-space mt-20 pb-4 bg-[#333446]">
            <h3 className="head-text">Personal Highlights</h3>

            <div className="highlights-container bg-[#333446]">
                {highlights.map((item) => (
                    <div key={`review-${item.id}`} className="client-review">
                        <div>
                            <p className="text-white-800 font-light">{item.desc}</p>

                            <div className="highlights-content">
                                <div className="flex gap-3">
                                    <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                    <p className="font-semibold text-white-800">{item.header}</p>
                                    <p className="text-white-500 md:text-base text-sm font-light">{item.subheader}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Highlights