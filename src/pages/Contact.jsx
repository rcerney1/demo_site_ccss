import { useState } from 'react';
import Navbar from "../components/Navbar";  // Import your Navbar component

function Contact() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    // Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        setLoading(true);
        setStatus("Sending...");

        try {
            const response = await fetch('http://localhost:5000/api/send-email', {  // Update the endpoint to your backend API URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("Error: " + error.message);
        }

        setLoading(false);
    };


    return (
        <div className="text-gray-900 bg-white font-sans">
            <Navbar />

            {/* Contact Form Section */}
            <section className="h-screen py-24 px-6 text-center bg-gray-50 mt-24"> {/* Full height of screen */}
                <h2 className="text-5xl font-semibold mb-8">Contact Us</h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
                    Have a question? Get in touch with us, and our team will respond as soon as possible.
                </p>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className="text-left space-y-4">
                        <h3 className="text-xl font-semibold">Contact Information</h3>
                        <p>Email: <a href="mailto:email@example.com" className="text-[#e79c8b]">email@example.com</a></p>
                        <p>Phone: <span className="text-[#e79c8b]">(555) 555-5555</span></p>
                        <p>Address: 123 Demo Street, New York, NY 12345</p>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-left mb-2 text-gray-700 text-xl">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-4 border border-gray-300 rounded-md text-lg"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-left mb-2 text-gray-700 text-xl">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-4 border border-gray-300 rounded-md text-lg"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-left mb-2 text-gray-700 text-xl">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full p-4 border border-gray-300 rounded-md text-lg"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#e79c8b] hover:bg-[#d98978] text-white font-semibold px-8 py-4 rounded-md transition"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                        {status && <p className="text-center mt-4">{status}</p>}
                    </form>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-white py-12 px-6 text-center">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-6">
                        <a href="#services" className="text-gray-400 hover:text-white px-4">Services</a>
                        <a href="#contact" className="text-gray-400 hover:text-white px-4">Contact</a>
                        <a href="#about" className="text-gray-400 hover:text-white px-4">About</a>
                    </div>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} California Compliance Security Services. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Contact;
