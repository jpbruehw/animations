// edited img class: sm:h-[276px]
import Globe from 'react-globe.gl';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from "react-responsive"
import classNames from "classnames";

/** TODOS
 *  Add multilingual card
 *  Rearrange the cards to highlight skills
 *  Add mobile styling to globe
 *  make sure the layout looks like the tutorial
 *  consider getting rid of contact button at top
 */

const About = () => {

    const [shouldRender, setShouldRender] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });
    const globeRef = useRef();

    const isMobile = useMediaQuery({ maxWidth: 768 })

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

    return (
        <section className="c-space my-20">
            <div className="grid xl:gird-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-1.png" alt="grid-1" className="w-full h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hey there, nice to meet you...</p>
                            <p className="grid-subtext">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem aliquid exercitationem laudantium quibusdam nemo nobis quas ex veniam, alias perferendis numquam asperiores dignissimos beatae consequuntur doloremque quasi facere fugit!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-2.png" alt="grid-2" className="w-full h-fit md:max-h-[450px] md:mb-4 object-contain"/>
                        <div>
                            <p className="grid-headtext">Do you ever think to yourself: "Hmm, we can do this better"?</p>
                            <p className="grid-subtext">
                                Me too, and by asking that question I have become an expert at making businesses money with technology and data. Many organization today find themselves at the crossroads of <strong>technology, data, and innovation. </strong> 
                                I deliver results by harnessing all three, starting first and foremost with the business case.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
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
                                Throughout my life, I have lived, worked, and/or studied in four continents. I've learned that <b>problems are often universal, but solutions are context specific. </b>
                                To lead effectively and better anticipate your competition, understanding of the cultural, economic, and political context is key. My continent crossing experience means I can effectively 
                                adapt to, connect with, and operate successfully with people from any background.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cl:col-span-2 xl:row-span-3">
                    <div className="grid-container">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About