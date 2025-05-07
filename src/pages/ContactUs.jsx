import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiUser, FiSend } from 'react-icons/fi';
import CommonHero from '../Shared/CommonHero';

const ContactUs = () => {
    return (
        <div>
            <CommonHero title="Contact Us" />
            <section className="py-4 md:px-24 lg:px-24 bg-gray-50">
                <div className="container mx-auto px-4 items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Left: Contact Info */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-2xl font-bold text-white text-center p-2 bg-indigo-950 mb-6"
                            >
                                Get In Touch With Us Now!
                            </motion.h2>

                            <div className="grid grid-cols-2 text-gray-400 gap-4">
                                {/* Phone Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className=" p-3 rounded-full mb-3">
                                            <FiPhone className="text-indigo-950 text-4xl" />
                                        </div>
                                        <h3 className="font-medium text-gray-500 mb-2">Phone Number</h3>
                                        <div className="space-y-1 text-sm">
                                            <a href="tel:01916017508" className="block hover:text-indigo-950 transition-colors">
                                                <span className="font-medium">Sales Query</span>
                                                (+088) 01916017508
                                            </a>
                                            <a href="tel:01916017508" className="block hover:text-indigo-950 transition-colors">
                                                <span className="font-medium">Service Query</span>
                                                (+088) 01916017508
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Email Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-3 rounded-full mb-3">
                                            <FiMail className="text-indigo-950 text-4xl" />
                                        </div>
                                        <h3 className="font-medium text-gray-500 mb-2">Email</h3>
                                        <div className="space-y-1 text-sm">
                                            <a href="mailto:rejveee@gmail.com" className="block hover:text-indigo-950 transition-colors">
                                                rejveee@gmail.com
                                            </a>
                                            <a href="mailto:info@gmail.com" className="block hover:text-indigo-950 transition-colors">
                                                info@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Location Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-3 rounded-full mb-3">
                                            <FiMapPin className="text-indigo-950 text-4xl" />
                                        </div>
                                        <h3 className="font-medium text-gray-500 mb-2">Location</h3>
                                        <p className="text-sm">
                                            House# 9, Road# 2C, Block# J, Baridhara, Dhaka-1212
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Hours Card */}
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-indigo-50 p-4 rounded-lg border border-indigo-100"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="p-3 rounded-full mb-3">
                                            <FiClock className="text-indigo-950 text-4xl" />
                                        </div>
                                        <h3 className="font-medium text-gray-500 mb-2">Working Hours</h3>
                                        <p className="text-sm">
                                            Saturday to Thursday<br />
                                            09:00 AM to 06:00 PM
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gray-100 rounded-xl shadow-md p-6"
                        >
                            <h2 className="text-2xl font-bold text-white text-center p-2 bg-indigo-950 mb-6">Contact Us</h2>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <FiUser className="text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="First Name *"
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <FiUser className="text-gray-500" />
                                        </div>
                                        <input
                                            type="text"
                                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <FiPhone className="text-gray-500" />
                                        </div>
                                        <input
                                            type="tel"
                                            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Mobile No *"
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <FiMail className="text-gray-500" />
                                        </div>
                                        <input
                                            type="email"
                                            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Email ID *"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg border bg-white border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Message"
                                    ></textarea>
                                </div>

                                <div className="bg-white p-4 rounded-lg">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Please type the characters <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                    <div className="mt-2 p-2 bg-gray-100 rounded text-center font-mono text-lg">
                                        p S † 5 s
                                    </div>
                                    <p className="mt-1 text-xs text-gray-500">
                                        This helps us prevent spam, thank you.
                                    </p>
                                </div>

                                <div className="text-center">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        className="bg-indigo-950 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300 inline-flex items-center"
                                    >
                                        Submit <FiSend className="ml-2" />
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default ContactUs;
