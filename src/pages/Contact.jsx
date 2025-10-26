import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(
            // template and args from emailjs service
        )
    };

    const handleFocus = () => {};
    const handleBlur = () => {};

    return (
        <section className="relative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in Touch</h1>
                <form
                    className="w-full flex flex-col gap-7 mt-14"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="" className="text-black-500">
                        Name
                        <input 
                            type="text" 
                            name="name"
                            className="input"
                            placeholder="Please Enter your Name"
                            id="name"
                            required
                            value={form.name}
                            onChange={handleChange} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <label htmlFor="" className="text-black-500">
                        Email
                        <input 
                            type="email" 
                            name="email"
                            className="input"
                            placeholder="john@gmail.com"
                            id="email"
                            required
                            value={form.email}
                            onChange={handleChange} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <label htmlFor="" className="text-black-500">
                        Your Message
                        <textarea 
                            name="message"
                            rows={4}
                            className="textarea"
                            placeholder="Let me know how I can help you!"
                            id="message"
                            required
                            value={form.message}
                            onChange={handleChange} 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <button
                        type="submit"
                        className="btn"
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
