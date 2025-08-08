const ContactButton = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping"/>
                    <span className="btn-ping_dot"/>
                </span>
            )}
            <a href="#contact">
                {name}
            </a>
        </button>
    )
}

export default ContactButton