import React from "react";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // ✅ Stop reload
        alert("Message sent successfully! 🚀");
    };

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                    Contact Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-2xl shadow">
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your message..."
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-white p-6 rounded-2xl shadow space-y-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Get in Touch
                        </h3>
                        <p className="text-gray-600">
                            Have any questions or feedback? We'd love to hear from you!
                        </p>

                        <div className="space-y-2">
                            <p className="text-gray-700">
                                📍 Address: 123 SnapMart Street, Jaipur, Rajasthan
                            </p>
                            <p className="text-gray-700">📞 Phone: +91 1234567890</p>
                            <p className="text-gray-700">✉️ Email: support@snapmart.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
