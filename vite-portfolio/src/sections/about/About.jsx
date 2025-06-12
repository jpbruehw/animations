// edited img class: sm:h-[276px]
const About = () => {
    return (
        <section className="c-space my-20">
            <div className="grid xl:gird-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-1.png" alt="grid-1" className="w-full h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hey there, nice to meet you.</p>
                            <p className="grid-subtext">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem aliquid exercitationem laudantium quibusdam nemo nobis quas ex veniam, alias perferendis numquam asperiores dignissimos beatae consequuntur doloremque quasi facere fugit!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid-2.png" alt="grid-2" className="w-full h-fit md:max-h-[450px] object-contain"/>
                        <div>
                            <p className="grid-headtext">Hey there, nice to meet you.</p>
                            <p className="grid-subtext">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorem aliquid exercitationem laudantium quibusdam nemo nobis quas ex veniam, alias perferendis numquam asperiores dignissimos beatae consequuntur doloremque quasi facere fugit!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About