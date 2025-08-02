import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import { useIsMobile } from '../../hooks/useIsMobile.js';
import useAlert from '../../hooks/useAlert.js';
import Alert from '../../components/Alert.jsx';

//** TODOS
// add a new bg image for mobile screens
// change the colors so the form inputs are a bit brighter
// get the email client working
// move the social links and email above the footer

const Contact = () => {
    const formRef = useRef();

    const isMobile = useIsMobile()

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
        <section className={`c-space mb-10 ${isMobile ? "bg-black-200 mt-4 w-[90%] mx-auto rounded-lg" : "mt-10"}`} id="contact">
            {alert.show && <Alert {...alert} />}

            <div className="relative min-h-screen flex items-center justify-center flex-col">
                { !isMobile && <img src="/assets/terminal.png" alt="terminal" className="absolute inset-0 h-full w-full rounded-lg" /> }

                <div className={`c-space z-10 mb-8 ${isMobile ? "mt-8" : "mt-20"}`}>
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
                        life, I’m here to help.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
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