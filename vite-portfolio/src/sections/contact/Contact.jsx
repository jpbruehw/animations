import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile.js';
import { useIsTallMobile } from '../../hooks/useIsTallMobile.js';
import useAlert from '../../hooks/useAlert.js';
import Alert from '../../components/Alert.jsx';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
    const formRef = useRef();

    const isMobile = useIsMobile()
    const isTallMobile = useIsTallMobile()
    const isMonitor = useMediaQuery({ minWidth: 1281, maxWidth: 2200 })
    const isXLMonitor = useMediaQuery({ minWidth: 2201 })

    const { alert, showAlert, hideAlert } = useAlert();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); 
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'J.P. Bruehwiler',
                from_email: form.email,
                to_email: 'jpkbruehwiler@gmail.com',
                message: form.message,
            },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            .then(
                () => {
                    setLoading(false);
                    showAlert({
                        show: true,
                        text: 'Thank you for your message 😃',
                        type: 'success',
                    }); 
                    setTimeout(() => {
                        hideAlert(false);
                        setForm({
                            name: '',
                            email: '',
                            message: '',
                        });
                    }, [3000]);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);   
                    showAlert({
                        show: true,
                        text: "I didn't receive your message 😢",
                        type: 'danger',
                });
                },
            );
    }   

    return (
        <section className={`c-space mb-10 bg-black-200 rounded-lg w-[90%] md:w-[95%] mx-auto ${isMobile ? "mt-4" : "mt-10"}`} id="contact">
            {alert.show && <Alert {...alert} />}

            <div className={`relative flex items-center justify-center flex-col ${isXLMonitor ? "h-[60vh]" : (isMobile & isTallMobile) ? "h-[80vh]" : (isMobile & !isTallMobile) ? "min-h-screen" : "md:h-[100vh] 2xl:h-[80vh]"}`}>

                <div className={`c-space w-full z-10 ${isMobile ? "" : isXLMonitor ?  "max-w-[55vw]" : isMonitor ? "max-w-[65vw] mx-auto" : "pt-12 pb-12"}`}>
                    <h3 className="head-text">Reach out, let's talk.</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className={`flex flex-col ${(isMobile & isTallMobile) ? "mt-6 space-y-10" : (isMobile & !isTallMobile) ? "mt-4 space-y-5" : "mt-12 space-y-7"}`}>
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex. John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex. johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;