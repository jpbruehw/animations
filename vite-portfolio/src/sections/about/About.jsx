// edited img class: sm:h-[276px]
import Globe from 'react-globe.gl';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import ContactButton from '../../components/ContactButton';

import { useMediaQuery } from 'react-responsive';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useIsTallMobile } from '../../hooks/useIsTallMobile';

/** TODOS
 *  Add multilingual card
 *  Rearrange the cards to highlight skills
 *  Add mobile styling to globe
 *  make sure the layout looks like the tutorial
 *  get the globe spinning slowly
 *  add a header to this and a little desc blurb
 */

const About = () => {

    const [shouldRender, setShouldRender] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });
    const globeRef = useRef();

    const points = [
        {
            name: 'Zurich, Switzerland',
            lat: 47.3769,
            lng: 8.5417,
            altitude: 0.01,
            color: '#DA291C',
        },
        {
            name: "Boston, USA",
            lat: 42.3555,
            lng: -71.0565,
            altitude: 0.2,
            color: '#0A3161',
        },
        {
            name: 'Barcelona, Spain',
            lat: 41.3874,
            lng: 2.1686,
            altitude: 0.2,
            color: '#F1BF00',
        },
        {
            name: 'Bangkok, Thailand',
            lat: 13.7563,
            lng: 100.5018,
            altitude: 0.2,
            color: '#EF3340',
        },
        {
            name: 'Valparaiso, Chile',
            lat: -33.0473,
            lng: -71.6127,
            altitude: 0.2,
            color: '#0032A0',
        },
    ]

useEffect(() => {
        if (inView) {
            setShouldRender(true);
        }
    }, [inView]);

    useEffect(() => {
        if (globeRef.current) {
            globeRef.current.pointOfView(
                { lat: 47.3769, lng: 8.5417}, // Zurich
                2000 // ms transition duration
            );
        }
    }, [shouldRender]);

    const isMobile = useIsMobile()
    const isTallMobile = useIsTallMobile()

    const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1280 })
    const isMonitor = useMediaQuery({ minWidth: 1281, maxWidth: 2200 })
    const isXLMonitor = useMediaQuery({ minWidth: 2201 })

    return (
        <section id="about"
                    className={`
                        c-space
                        ${(isMonitor || isLaptop) && "-mt-[150px]"} 
                        ${(isMobile && !isTallMobile) && "-mt-60"} 
                        ${(isMobile && isTallMobile) && "-mt-[400px]"}
                        ${isMonitor && "-mt-[175px]"}
                        ${isXLMonitor && "-mt-[400px]"}
                    `}>
            <div className="w-full mb-4">
                <p className={`${isMobile ? "h-[75px] -mb-8" : "h-12"} head-text`}>
                    Welcome to my site.
                </p>
                <p className="projects-subtext">
                    Whatever your reason for visiting, it's nice to meet you.
                </p>
            </div>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-1.png" alt="grid-1" className="w-full sm:h-[350px] h-fit object-contain" />
                        <p className={isMobile ? "grid-headtext" : "grid-headtext-main"}>A bit about me.</p>
                        <p className="grid-subtext">
                            <b>Who is the person behind this page?</b> Well, let me tell you. A relentless self-starter who only ever gives his very best effort and nothing less. 
                            A person who understands that a team is a sum of its parts, and that success is never the product of one person alone. 
                            A person that appreciates the necessity of understanding and fitting into different cultures, having called several different countries and organizations home over the years.
                        </p>
                        <div></div>
                        <p className="grid-subtext">
                            A person that understands the opportunities, but more importantly the limitations, of emerging technologies. 
                            A person that understands how technology, strategy, and innovation intertwine to build better business outcomes. 
                            A person that chooses to use failure as a learning experience rather than as a defeat. 
                        </p>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div ref={ref} className="rounded-3xl w-full sm:h-[326px] sm:mt-20 h-fit flex justify-center items-center">
                            {shouldRender && (
                                <Globe
                                    ref={globeRef}
                                    height={326}
                                    width={326}
                                    backgroundColor="rgba(0,0,0,0)"
                                    backgroundImageOpacity={0.5}
                                    showAtmosphere
                                    showGraticules
                                    globeImageUrl="/assets/earth-day.jpg"
                                    bumpImageUrl="/assets/earth-topology.png"
                                    pointsData={points}
                                    pointColor={d => d.color}
                                    pointlabel="name"
                                    pointRadius={0.5}
                                    pointAltitude={0.2}
                                />
                            )}
                        </div>
                        <div>
                            <p className="grid-headtext"> I Have Global Perspectives That Drive Competitive Advantage.</p>
                            <p className="grid-subtext">
                                Throughout my life, I have lived, worked, and/or studied in four continents. I've learned that <b>problems are often universal, but solutions are context specific.</b>
                            </p>
                            <br />
                            <p className="grid-subtext">
                                To lead effectively and better anticipate your competition, understanding of the cultural, economic, and political context is key. My continent crossing experience means I can effectively 
                                adapt to, connect with, and operate successfully with people from any background.
                            </p>
                            <ContactButton name="Get in Touch" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-3.svg" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Analytic Expertise that Powers Profitable Decision Making.</p>
                            <p className="grid-subtext">
                                A firm's data is its most valuable asset...or at least it can be. 
                                Most firms understand the potential value of their data, but struggle with execution.
                            </p>
                            <br />
                            <p className="grid-subtext">
                                Whether robotic process automation, AI, or hardcore statistics, I have the technical ability and subject matter expertise  
                                to build and execute data strategies that make companies money.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-4.png" alt="grid-4" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Do you ever think to yourself: "Hmm, we can do this better"?</p>
                            <p className="grid-subtext">
                                Me too, and by asking that very question, I have become an expert at making businesses money through empowering them to be lean, efficient, and innovative.
                            </p>
                            <br />
                            <p className="grid-subtext">
                                Many organization today find themselves at the crossroads of <strong>technology, data, and innovation. </strong> 
                                I deliver results by harnessing my expertise in all three to craft strategies that address even the most complex business cases.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid-5.png" alt="grid-5" className="w-full md:mx-auto sm:h-[240px] xl:object-contain h-fit object-cover sm:object-top"/>
                        <p className="grid-headtext">It's never a fair fight when I'm on your side.</p>
                        <p className="grid-subtext">
                            Like if your business had pocket aces...and your competition has 7-2 off-suit!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About