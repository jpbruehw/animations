// edited img class: sm:h-[276px]
import Globe from 'react-globe.gl';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';
import ContactButton from '../../components/ContactButton';

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

    return (
        <section className="c-space my-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
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
                        <img src="/assets/grid-2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">Do you ever think to yourself: "Hmm, we can do this better"?</p>
                            <p className="grid-subtext">
                                Me too, and by asking that question I have become an expert at making businesses money with technology and data. Many organization today find themselves at the crossroads of <strong>technology, data, and innovation. </strong> 
                                I deliver results by harnessing all three, starting first and foremost with the business case. className="w-full h-fit md:max-h-[450px] md:mb-4 object-contain"
                            </p>
                        </div>
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
                                Throughout my life, I have lived, worked, and/or studied in four continents. I've learned that <b>problems are often universal, but solutions are context specific. </b>
                                To lead effectively and better anticipate your competition, understanding of the cultural, economic, and political context is key. My continent crossing experience means I can effectively 
                                adapt to, connect with, and operate successfully with people from any background.
                            </p>
                            <ContactButton name="Get in Touch" isBeam containerClass="w-full mt-10"/>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-3.svg" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain"
                        />
                        <p className="grid-headtext">Multilingual: On and Off the Keyboard.</p>
                        <p className="grid-subtext">
                            Expert in programming languages like python etc. then talk about the languages you know.
                        </p>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid-4-new.svg" alt="grid-4" className="w-full md:h-[170px] sm:h-[276px] h-fit object-cover sm:object-top"/>
                        <p className="grid-headtext">Analytic Expertise that Powers Profitable Decision Making.</p>
                        <p className="grid-subtext">
                            Write here about analytic expertise and how it leads to better outcomes etc.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About