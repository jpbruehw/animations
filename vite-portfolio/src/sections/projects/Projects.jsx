import { Suspense, useState } from "react";
import { myProjects } from "../../constants/projects"
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../../components/CanvasLoader.jsx"
import DemoComputer from "../../components/DemoComputer.jsx";
import { useIsMobile } from "../../hooks/useIsMobile.js";

const projectCount = myProjects.length

function Projects() {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex]
    
    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous'){
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1
            }
        })
    }

    const cvxpyDesc = (
                        <>
                            Implemented{' '}
                            <a
                                href="https://www.cvxpy.org/tutorial/intro/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-blue-500"
                            >
                            CVXPY
                            </a>{' '}
                            convex optimization package to simulate and build risk/return optimal portfolios using the Efficient Frontier and Capital Allocation Line. This methodology allows for more accurate forecasting beyond traditional approaches.
                        </>
                    );

    const isMobile = useIsMobile()
    console.log(isMobile)
    
    return (
        <section className="c-space my-20">
            <div className="">
                <p className="head-text">
                    Some of my favorite projects
                </p>
                <p className="projects-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sit quisquam tempora iusto, ipsam quos beatae pariatur eius deleniti atque fuga, officiis voluptate voluptas quas corrupti. Deleniti inventore magnam ex!</p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-xl">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>
                    </div>
                    <div className="backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="project-logo" className="w-16 h-16 rounded-lg shadow-sm"/>
                    </div>
                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
                        <p className="animatedText">{currentProject.desc === "" ? cvxpyDesc : currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subDesc}</p>
                    </div>
                    <div className="flex flex-col flex-wrap justify-center gap-4">
                            <div className="flex items-center flex-wrap justify-start gap-4">
                                {currentProject.tags.map((tag) => (
                                    <div key={tag.id} className="tech-logo">
                                        <img src={tag.path} alt={tag.name} className="rounded-lg" />
                                    </div>
                                ))}
                            </div>
                            <div className=
                                "flex flex-row items-center justify-start gap-4 mt-6"
                            >
                                <a href={currentProject.href} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg gap-2 cursor-pointer text-white-600">
                                    <p>{currentProject.isData ? "View Report" : "View Demo"}</p>
                                    <img src="assets/arrow-up.png" alt="arrow-up" className="w-3 h-3"/>
                                </a>
                                <a href={currentProject.githubHref} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg gap-2 cursor-pointer text-white-600">
                                    <p>View on GitHub</p>
                                    <img src="assets/arrow-up.png" alt="arrow-up" className="w-3 h-3"/>
                                </a>
                            </div>
                    </div>
                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
                        </button>
                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <img src="/assets/right-arrow.png" alt="left arrow" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                    <div className="border bg-black border-black-300 rounded-lg h-96 md:h-full shadow-2xl shadow-black-200">
                        <Canvas>
                            <ambientLight intensity={3} />
                            <directionalLight position={[10, 10, 5]} />
                            <Center>
                                <Suspense fallbackBack={<CanvasLoader />} />
                                <group scale={isMobile ? 1.65 : 1.85} position={[-2.35, -1.4, 0.75]} rotation={[0, -0.14, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Center>
                            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                        </Canvas>
                    </div>
            </div>
        </section>
    )
}

export default Projects